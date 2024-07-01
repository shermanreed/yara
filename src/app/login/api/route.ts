import { baseUrl } from "@/_API/baseUrl";
import { authByUserPassApi } from "@/_API/login/API";
import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const body = await req.json();

    const res = await fetch(baseUrl + authByUserPassApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      const data = await res.json();
      cookies().set("token", data.message);
      return Response.json(data);
    }
    switch (res.status) {
      case 400:
        return NextResponse.json({ error: "Bad Request" }, { status: 400 });
      case 401:
        return NextResponse.json(
          { error: "Invalid password" },
          { status: 401 }
        );
      case 403:
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      case 404:
        return NextResponse.json({ error: "user not found" }, { status: 404 });
      case 500:
        return NextResponse.json(
          { error: "Internal Server Error" },
          { status: 500 }
        );
      default:
        return NextResponse.json({ error: "An unexpected error occurred" });
    }
  } catch (error) {
    throw Response.json(error);
  }
}
