import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { SelectLevelProvider } from "./components/Context/Context";
import { EasyModeProvider } from "./components/Context/easyMode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SelectLevelProvider>
      <EasyModeProvider>
        <RouterProvider router={router}></RouterProvider>
      </EasyModeProvider>
    </SelectLevelProvider>
  </React.StrictMode>,
);
