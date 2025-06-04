import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MainModeler from "./pages/MainModeler/MainModeler.jsx";
import MainWebDev from "./pages/MainWebDev/MainWebDev.jsx";
import ModelerWorks from "./pages/ModelerPortfolio/ModelerWorks.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/3d-artist", element: <MainModeler /> },
  { path: "/web-dev", element: <MainWebDev /> },
  { path: "/3d-artist/works/:id", element: <ModelerWorks /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
