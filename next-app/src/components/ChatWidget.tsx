"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";

type Message = {
    role: "user" | "assistant";
    content: string;
};

// Função para fazer fetch com timeout
async function fetchWithTimeout(url: string, options: RequestInit, timeout = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal,
        });
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        throw error;
    }
}

// Função para enviar mensagem para a API
async function sendChatMessage({ message, sessionId }: { message: string; sessionId: string }) {
    const response = await fetchWithTimeout(
        "/api/chat",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                message,
                session_id: sessionId,
            }),
        },
        5000 // 5 segundos de timeout
    );

    if (!response.ok) {
        throw new Error("Failed to send message");
    }

    return response.json();
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasBeenOpened, setHasBeenOpened] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Olá! Sou a Pulse AI. Como posso ajudar você hoje?" },
    ]);
    const [sessionId, setSessionId] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Generate a new unique session ID on every page load
        const newSessionId = `user_${Math.random().toString(36).substring(2, 15)}`;
        setSessionId(newSessionId);

        // Delay showing the chat button until page is fully loaded
        const timer = setTimeout(() => {
            setIsMounted(true);
        }, 1500); // Aparece após 1.5 segundos

        return () => clearTimeout(timer);
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "auto", block: "end" });
    };

    useEffect(() => {
        if (isOpen) {
            setHasBeenOpened(true);
        }
        scrollToBottom();
    }, [messages, isOpen]);

    // Mutation com TanStack Query
    const chatMutation = useMutation({
        mutationFn: sendChatMessage,
        onSuccess: (data) => {
            if (data.reply) {
                const rawText = data.reply.replace(/^output:\s*/i, "");
                const messageParts = rawText.replace(/\\n/g, '\n').split('\n');

                messageParts.forEach((part: string, index: number) => {
                    if (part.trim()) {
                        setTimeout(() => {
                            setMessages((prev) => [
                                ...prev,
                                { role: "assistant", content: part.trim() }
                            ]);
                        }, index * 800);
                    }
                });
            }
        },
        onError: (error) => {
            console.error("Chat error:", error);

            let errorMessage = "Desculpe, tive um problema ao processar sua mensagem.";

            if (error instanceof Error) {
                if (error.name === "AbortError") {
                    errorMessage = "A requisição demorou muito. Tente novamente.";
                } else if (error.message.includes("Failed to fetch")) {
                    errorMessage = "Não foi possível conectar ao servidor. Verifique sua conexão.";
                }
            }

            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: errorMessage },
            ]);
        },
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || chatMutation.isPending) return;

        const userMessage = inputValue.trim();
        setInputValue("");
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);

        chatMutation.mutate({
            message: userMessage,
            sessionId: sessionId,
        });
    };


    // Não renderiza nada até a página carregar
    if (!isMounted) {
        return null;
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && hasBeenOpened && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="lenis-prevent mb-4 w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] bg-gradient-to-br from-background via-background to-primary/5 border border-primary/20 rounded-3xl shadow-2xl shadow-primary/10 flex flex-col overflow-hidden backdrop-blur-xl"
                    >
                        {/* Header */}
                        <div className="relative p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-primary/10">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/30">
                                            <Sparkles className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-foreground">Pulse AI</h3>
                                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                            Online agora
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-10 w-10 rounded-xl hover:bg-primary/10 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent hover:scrollbar-thumb-primary/50">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={cn(
                                        "flex gap-3 max-w-[85%]",
                                        msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-md",
                                            msg.role === "user"
                                                ? "bg-gradient-to-br from-primary to-purple-600"
                                                : "bg-gradient-to-br from-primary/20 to-purple-600/20 border border-primary/20"
                                        )}
                                    >
                                        {msg.role === "user" ? (
                                            <User className="w-4 h-4 text-white" />
                                        ) : (
                                            <Bot className="w-4 h-4 text-primary" />
                                        )}
                                    </div>
                                    <div
                                        className={cn(
                                            "p-4 rounded-2xl text-sm leading-relaxed shadow-sm",
                                            msg.role === "user"
                                                ? "bg-gradient-to-br from-primary to-purple-600 text-white rounded-tr-md"
                                                : "bg-secondary/50 text-secondary-foreground rounded-tl-md border border-primary/10"
                                        )}
                                    >
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}
                            {chatMutation.isPending && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex gap-3 max-w-[85%]"
                                >
                                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 border border-primary/20 flex items-center justify-center shrink-0">
                                        <Bot className="w-4 h-4 text-primary" />
                                    </div>
                                    <div className="bg-secondary/50 border border-primary/10 p-4 rounded-2xl rounded-tl-md flex items-center gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
                                        <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
                                        <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 border-t border-primary/10 bg-background/50 backdrop-blur-sm">
                            <div className="flex gap-2">
                                <Input
                                    value={inputValue}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                                    placeholder="Digite sua mensagem..."
                                    className="flex-1 rounded-xl border-primary/20 bg-background/50 focus:border-primary focus:ring-primary/20"
                                    disabled={chatMutation.isPending}
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    disabled={chatMutation.isPending || !inputValue.trim()}
                                    className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg shadow-primary/30 transition-all"
                                >
                                    <Send className="w-4 h-4" />
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 text-white shadow-2xl shadow-primary/40 flex items-center justify-center hover:shadow-primary/60 transition-all duration-300 group"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="w-6 h-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageCircle className="w-6 h-6" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pulse effect */}
                <span className="absolute inset-0 rounded-2xl bg-primary animate-ping opacity-20" />
            </motion.button>
        </div>
    );
}
