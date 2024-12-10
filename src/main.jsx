import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./routers/router";
import { RouterProvider } from "react-router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
