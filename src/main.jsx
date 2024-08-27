import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import RutaHija from "./components/RutaHija.jsx";
import Pregunta from "./components/Pregunta.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "RutaHija",
        element: <RutaHija />,
      },
      {
        path: "RutaHija/:id",
        element: <Pregunta />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
