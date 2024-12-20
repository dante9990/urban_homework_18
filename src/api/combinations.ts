import { instance } from "./axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCombinations = createAsyncThunk(
  "combinations",
  async (page: number) => {
    const { data } = await instance.get(
      `/combinations?pageIndex=${page}&pageSize=18`
    );
    return data;
  }
);
