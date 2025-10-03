import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./admin/shared/components/context/AuthContext.js";
import { OrdersProvider } from "./context/OldersContext.jsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./locales/next.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <I18nextProvider i18n={i18n}>
        <OrdersProvider>
          <App />
        </OrdersProvider>
      </I18nextProvider>
    </AuthProvider>
  </StrictMode>
);
