/* eslint-disable prettier/prettier */
import {
  AnyAction,
  configureStore,
  Dispatch,
  ThunkAction,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import thunkMiddleware, { ThunkDispatch, ThunkMiddleware } from "redux-thunk";
import authSlice from "@/redux/features/authSlice";

export const store = configureStore({
  reducer: { auth: authSlice },
  middleware: [thunkMiddleware as ThunkMiddleware],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = ThunkDispatch<RootState, Dispatch, AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export const useAppDispatch = () => useDispatch<TypedDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
