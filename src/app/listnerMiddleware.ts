import { addListener, createListenerMiddleware } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "./store";
import { addAuthListners } from "../features/auth/authSlice";

export const listnerMiddleware = createListenerMiddleware();

export const startAppListening = listnerMiddleware.startListening.withTypes<
  RootState,
  AppDispatch
>();

export type AppStartListening = typeof startAppListening;

export const addAppListner = addListener.withTypes<RootState, AppDispatch>();

export type AppAddListner = typeof addAppListner;

// App Listners
addAuthListners(startAppListening);
