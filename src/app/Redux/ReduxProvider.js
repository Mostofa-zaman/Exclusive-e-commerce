// src/features/ReduxProvider.js
"use client"; // Eta must!

import { Provider } from "react-redux";
import { store } from "../features/store.js";

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}