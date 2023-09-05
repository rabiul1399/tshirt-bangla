import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./componnet/Home/Home.jsx";
import "./index.css";
import Products from "./componnet/Products/Products.jsx";
import OrderReview from "./componnet/OrderReview/OrderReview.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/product",
        element: <Products />,
        loader: () => fetch("tshirts.json"),
      },
      {
        path: "/review",
        element: <OrderReview />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
