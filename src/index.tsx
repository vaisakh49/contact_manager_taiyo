import React from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import "./index.css";
import { Contacts } from "./features/contacts/Contacts";
import { ChartAndMap } from "./features/charts-and-maps/ChartAndMap";
import { AppWrapper } from "./components/AppWrapper";
import { PageNotFound } from "./components/PageNotFound";
import { Provider } from "react-redux";
import { store } from "./store/store";

const router = createBrowserRouter([
  {
    // path: "/*",
    element: <AppWrapper />,
    children: [
      {
        index: true,
        element: <Navigate to="/contacts" />,
      },
      { path: "contacts", element: <Contacts /> },
      { path: "chartandmaps", element: <ChartAndMap /> },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
