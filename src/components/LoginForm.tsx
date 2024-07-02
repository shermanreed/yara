"use client";
import { authByUserPass } from "@/lib/actions/login/AuthAction";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { auth } from "@/lib/slices/authSlice";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type lginDataType = {
  username: string | undefined;
  password: string | undefined;
};

export default function LoginForm(): JSX.Element {
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const { status } = useAppSelector(auth);
  const [dataLogin, setDataLogin] = useState<lginDataType>({
    username: undefined,
    password: undefined,
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      authByUserPass({
        username: dataLogin.username,
        password: dataLogin.password,
      })
    );
  };
  useEffect(() => {
    status === "success" && push("/home");
  }, [push, status]);

  return (
    <section className="h-screen w-full">
      <div className="h-full w-full flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-y-3"
        >
          <input
            onChange={(e) =>
              setDataLogin((prev: lginDataType) => ({
                ...prev,
                username: e.target.value,
              }))
            }
            value={dataLogin.username}
            type="text"
            placeholder="username"
            className="p-2 rounded-md border-2 border-black"
          />
          <input
            onChange={(e) =>
              setDataLogin((prev: lginDataType) => ({
                ...prev,
                password: e.target.value,
              }))
            }
            value={dataLogin.password}
            type="text"
            placeholder="password"
            className="p-2 rounded-md border-2 border-black"
          />
          <button className="p-2 border-b-2 w-full border-black rounded-lg hover:bg-gray-200">
            {status === "loading" ? <>loading ....</> : <>login</>}
          </button>
        </form>
      </div>
    </section>
  );
}
