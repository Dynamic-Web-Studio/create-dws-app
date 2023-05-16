import { verifyJwt } from "@/lib/jwt";

export async function GET(
  req: Request,
  { params }: { params: { id: number } }
) {
  const token = req.headers.get("Authorization");
  if (!token || !verifyJwt(token)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const verify = (await verifyJwt(token)) as any;
  const { id } = params;

  return new Response(`User ${id} data, ${JSON.stringify(verify.name)}`);
}
