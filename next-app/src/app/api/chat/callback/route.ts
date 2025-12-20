import { NextResponse } from "next/server";
import { chatStore } from "@/lib/chat-store";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("Received callback from n8n:", body);

        // Expecting body to contain { session_id: "...", message: "..." }
        // or { session_id: "...", output: "..." }

        const sessionId = body.session_id;
        const messageContent = body.message || body.output || body.text || body.reply;

        if (sessionId && messageContent) {
            chatStore.addMessage(sessionId, {
                role: "assistant",
                content: typeof messageContent === 'string' ? messageContent : JSON.stringify(messageContent),
                timestamp: Date.now()
            });
        }

        return NextResponse.json({
            status: "success",
            message: "Callback received and stored"
        });
    } catch (error) {
        console.error("Error in chat callback:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
