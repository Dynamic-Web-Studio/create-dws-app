import { verifyJwt } from "@/lib/jwt";

export async function GET(req: Request) {
  const token = req.headers.get("Authorization");

  if (!token || !verifyJwt(token)) {
    return new Response("Unauthorized", { status: 401 });
  }
  const verify = (await verifyJwt(token)) as any;

  if (verify.admin !== true) {
    return new Response("Unauthorized", { status: 401 });
  }

  return new Response("Admin data");
}
