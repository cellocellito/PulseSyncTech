import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { message, session_id } = await req.json();

        // Placeholder for n8n webhook URL
        // You should replace this with your actual n8n webhook URL
        const N8N_WEBHOOK_URL = "https://n8n.pulsesync.tech/webhook/7b818cf2-793a-4a52-86ce-c3e71c139003";

        const response = await fetch(N8N_WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message,
                session_id
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch from n8n");
        }

        let replyText = "";
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
            try {
                const data = await response.json();
                replyText = data.output || data.text || data.message || data.reply || JSON.stringify(data);
            } catch (e) {
                console.error("Error parsing JSON from n8n:", e);
                replyText = await response.text();
            }
        } else {
            // Handle plain text response
            replyText = await response.text();
        }

        return NextResponse.json({ reply: replyText });

    } catch (error) {
        console.error("Error in chat API:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
