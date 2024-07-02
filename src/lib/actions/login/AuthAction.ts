import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { redirect } from "next/navigation";

export const authByUserPass = createAsyncThunk(
  "auth/login",
  async (
    {
      username,
      password,
    }: {
      username: string | undefined;
      password: string | undefined;
    },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/login/api",
        JSON.stringify({
          username: username,
          password: password,
        })
      );
      return res.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
