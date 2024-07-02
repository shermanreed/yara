import { cookies } from "next/headers";

export async function DELETE() {
  cookies().delete("token");
  return Response.json({ message: "logouted" });
}
