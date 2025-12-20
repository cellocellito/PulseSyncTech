// Simple in-memory store for chat messages
// NOTE: In a real production environment (serverless), this should be replaced with Redis or a Database.

type ChatMessage = {
    role: "user" | "assistant";
    content: string;
    timestamp: number;
};

class ChatStore {
    private sessions: Map<string, ChatMessage[]> = new Map();

    addMessage(sessionId: string, message: ChatMessage) {
        if (!this.sessions.has(sessionId)) {
            this.sessions.set(sessionId, []);
        }
        this.sessions.get(sessionId)?.push(message);
    }

    getMessages(sessionId: string): ChatMessage[] {
        return this.sessions.get(sessionId) || [];
    }

    // Get messages after a certain timestamp (for polling)
    getNewMessages(sessionId: string, afterTimestamp: number): ChatMessage[] {
        const messages = this.getMessages(sessionId);
        return messages.filter(msg => msg.timestamp > afterTimestamp);
    }
}

// Global instance to persist across requests in dev mode
// In production serverless, this will reset on cold starts
export const chatStore = new ChatStore();
