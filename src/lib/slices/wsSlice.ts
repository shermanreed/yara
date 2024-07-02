import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getWorkSpace } from "../actions/ws/WsAction";
type initialStateType = {
  status: "loading" | "success" | "reject" | undefined;
  listWorkSpace: [];
};
const initialState: initialStateType = {
  status: undefined,
  listWorkSpace: [],
};
export const wsSlice = createSlice({
  name: "ws",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getWorkSpace.pending, (state) => {
      state.status = "loading";
    });
    addCase(getWorkSpace.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.listWorkSpace = payload.data;
    });
    addCase(getWorkSpace.rejected, (state, { payload }: any) => {
      state.status = "reject";
      console.log(payload?.error);
    });
  },
});
export const {} = wsSlice.actions;
export const ws = (state: RootState) => state.wsState;
export default wsSlice.reducer;
