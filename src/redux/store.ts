import {
  AnyAction,
  configureStore,
  Dispatch,
  ThunkAction,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import thunkMiddleware, { ThunkDispatch, ThunkMiddleware } from "redux-thunk";
import authReducer from "@/redux/features/authSlice";

export const store = configureStore({
  reducer: { auth: authReducer },
  middleware: [thunkMiddleware as ThunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, Dispatch, AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
