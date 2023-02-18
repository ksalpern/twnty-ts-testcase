import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import store from "./app/store";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
