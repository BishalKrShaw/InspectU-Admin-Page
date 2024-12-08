import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Admin from "./components/admin/Admin.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store.js";
import {Provider} from "react-redux"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="admin" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
