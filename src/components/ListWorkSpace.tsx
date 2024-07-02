"use client";
import { getWorkSpace } from "@/lib/actions/ws/WsAction";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ws } from "@/lib/slices/wsSlice";
import React, { useEffect } from "react";

export default function ListWorkSpace() {
  const dispatch = useAppDispatch();
  const { listWorkSpace, status } = useAppSelector(ws);
  useEffect(() => {
    dispatch(getWorkSpace());
  }, [dispatch]);

  return (
    <div className="w-1/2 h-1/2 flex items-center justify-center bg-gray-500 rounded-lg">
      {status === "loading" ? (
        <>Loading ...</>
      ) : (
        <div className="w-full p-4 flex justify-around">
          {listWorkSpace?.map((item: any, index: number) => (
            <ul key={index} className="flex gap-x-3 p-3 rounded-lg bg-red-400">
              <li>{item.name}</li>
              <li>{item.creator}</li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}
