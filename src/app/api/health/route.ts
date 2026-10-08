import client from "@/lib/db";

export async function GET() {
  try {
    await client.connect();

    await client.db().command({
      ping: 1,
    });

    return Response.json({
      success: true,
      mongodb: "connected",
    });
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);

    return Response.json(
      {
        success: false,
        mongodb: "disconnected",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 503 }
    );
  }
}