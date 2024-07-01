import { createSlice } from "@reduxjs/toolkit";
import { authByUserPass } from "../actions/login/AuthAction";
import { RootState } from "../store";
type initialStateType = {
  status: "loading" | "success" | "reject" | undefined;
};
const initialState: initialStateType = {
  status: undefined,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(authByUserPass.pending, (state) => {
      state.status = "loading";
    });
    addCase(authByUserPass.fulfilled, (state, { payload }) => {
      state.status = "success";
      console.log("success", payload);
    });
    addCase(authByUserPass.rejected, (state, { payload }: any) => {
      state.status = "reject";
      console.log(payload?.error);
    });
  },
});
export const {} = authSlice.actions;
export const auth = (state: RootState) => state.authState;
export default authSlice.reducer;
