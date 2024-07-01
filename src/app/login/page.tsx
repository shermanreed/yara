import LoginForm from "@/components/LoginForm";
import React, { Suspense } from "react";
import Loading from "./loading";

export default function page() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <LoginForm />
      </Suspense>
    </>
  );
}
