import React from "react";
import { Provider } from "jotai";
import AppNavigation from "./navigation/appNavigation";

export default function App() {
  return (
    <Provider>
      <AppNavigation />
    </Provider>
  );
}
