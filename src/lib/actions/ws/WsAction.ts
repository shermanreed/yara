import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWorkSpace = createAsyncThunk(
  "ws/getList",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:3000/home/api");
      return res.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
