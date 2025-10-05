import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();

  cookieStore.set("token", "fiejuifheiufohwfhwhyew3473843687");
  console.log(cookieStore.get("token"));

  console.log(cookieStore.delete("token"));

  console.log(cookieStore.has("token"));

  return new Response(JSON.stringify({ msg: "Hello" }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
