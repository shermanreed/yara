import { baseUrl } from "@/_API/baseUrl";
import { getWorkSpaceApi } from "@/_API/ws/API";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const res = await fetch(baseUrl + getWorkSpaceApi, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies().get("token")?.value}`,
      },
    });
    if (res.ok) {
      const data = await res.json();
      return Response.json(data);
    }
    switch (res.status) {
      case 400:
        return NextResponse.json({ error: "Bad Request" }, { status: 400 });
      case 401:
        return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
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
