import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        // Placeholder for n8n webhook URL
        // You should replace this with your actual n8n webhook URL
        const N8N_WEBHOOK_URL = "YOUR_N8N_WEBHOOK_URL";

        // If no URL is provided, return a mock response for testing
        if (N8N_WEBHOOK_URL === "YOUR_N8N_WEBHOOK_URL") {
            // Simulate network delay
            await new Promise((resolve) => setTimeout(resolve, 1000));
            return NextResponse.json({
                reply: "Estou configurado, mas preciso da URL do webhook do n8n para funcionar corretamente. Por favor, configure a variável de ambiente ou atualize o código.",
            });
        }

        const response = await fetch(N8N_WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch from n8n");
        }

        const data = await response.json();

        // Assuming n8n returns { output: "response text" } or similar
        // Adjust based on your actual n8n workflow response structure
        return NextResponse.json({ reply: data.output || data.text || "Resposta recebida do n8n" });

    } catch (error) {
        console.error("Error in chat API:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
