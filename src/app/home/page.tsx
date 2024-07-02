import ListWorkSpace from "@/components/ListWorkSpace";
import { cookies } from "next/headers";
import React, { Suspense } from "react";
import Loading from "./loading";
const login = cookies().get("token");
export default function page() {
  if (!login) throw new Error("unUth");
  return (
    <div className="h-full flex items-center justify-center">
      <Suspense fallback={<Loading />}>
        <ListWorkSpace />
      </Suspense>
    </div>
  );
}
