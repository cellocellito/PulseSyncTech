import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("Received callback from n8n:", body);

        // Here you could process the data, e.g., save to database, trigger other events, etc.

        return NextResponse.json({
            status: "success",
            message: "Callback received successfully",
            receivedData: body
        });
    } catch (error) {
        console.error("Error in chat callback:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
