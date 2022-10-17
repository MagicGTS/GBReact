import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: null,
  error: null,
  loading: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    getAuthRequest: (state) => {
      return {
        ...state,
        loading: true,
        isAuth: false,
      };
    },
    getAuthSuccess: (state, action) => {
      return {
        ...state,
        user: action.payload,
        loading: false,
        isAuth: true,
      };
    },
    getAuthFailure: (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
        isAuth: false,
      };
    },
  },
});
export function selectUser() {
  return (state) => state.user.name
}
export function selectIsAuth() {
  return (state) => state.user.isAuth
}
export function selectUserError() {
  return (state) => state.user.error
}
export function selectUserLoading() {

  return (state) => state.user.loading
}
export const { getAuthRequest, getAuthSuccess, getAuthFailure } = userSlice.actions
export default userSlice.reducer;
