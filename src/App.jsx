import { RouterProvider } from "react-router-dom";
import "./App.css";
import myRouter from "./router";
import { CartProvider } from "./components/cart/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CartProvider>
      <RouterProvider router={myRouter} />
      <ToastContainer
        position="top-right"     
        autoClose={3000}   
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </CartProvider>
  );
}

export default App;
