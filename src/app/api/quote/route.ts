export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Quote request received:", data);

    return Response.json({ ok: true, message: "Quote request received" }, { status: 200 });
  } catch (err) {
    return Response.json({ ok: false, message: "Invalid payload" }, { status: 400 });
  }
}