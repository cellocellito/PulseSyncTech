import { NextResponse } from "next/server";
import { chatStore } from "@/lib/chat-store";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const sessionId = searchParams.get("session_id");
        const lastTimestamp = parseInt(searchParams.get("last_timestamp") || "0");

        if (!sessionId) {
            return NextResponse.json({ error: "Missing session_id" }, { status: 400 });
        }

        const newMessages = chatStore.getNewMessages(sessionId, lastTimestamp);

        return NextResponse.json({ messages: newMessages });
    } catch (error) {
        console.error("Error in poll API:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
