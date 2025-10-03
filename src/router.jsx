import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import AdninLayout from "./admin/AdninLayout";
import Products from "./admin/features/Products/Products";
import DashboardPage from "./admin/features/pages/DashboardPage/DashboardPage";
import Holydays from "./pages/category/Holydays/Holydays";
import Wholesale from "./pages/wholesale/Wholesale";
// import ProductNews from "./components/product/productNews/ProductNews";
import News from "./components/product/productNews/News";
import AssembleSet from "./components/assemble/assembleSet/AssembleSet";
// import { ImageOff } from "lucide-react";
import SweetDiscount from "./components/assemble/sweetDiscount/SweetDiscount";
// import Holydays from "./pages/category/Holydays/Holydays";
import Design from "./pages/design/design";
import SobratNabor from "./pages/Sobrat-Nabor/SobratNabor";
import September1 from "./pages/options/september1/September1";
import LoginPage from "./admin/features/pages/LoginPage/LoginPage";
import HappyBirthday from "./pages/options/happyBirthday/HappyBirthday";
import ClassicMacarons from "./pages/options/classicMacarons/ClassicMacarons";
import Gallery from "./pages/design/style/Gallery";
import Gift from "./pages/gift/gift";
import CartPage from "./components/cart/CartPage";
import Card from "./components/card/Card";
import Otzyv from "./pages/about/abouts/Otzyv";
import Guarantee from "./pages/about/abouts/Guarantee";
import Auther from "./auth/Auther";
import Finalli from "./auth/Finalli";
import Delivery from "./pages/about/abouts/Delivery";
import Contacts from "./pages/about/abouts/Contacts";
import About from "./pages/about/abouts/About";
const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "design",
        element: <Design />,
      },
      ,
      {
        path: "holydays",
        element: <Holydays />,
      },
      {
        path: "wholesale",
        element: <Wholesale />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/set",
        element: <AssembleSet />,
      },
      {
        path: "/discount",
        element: <SweetDiscount />,
      },
      {
        path: "/sobratnabor/:id",
        element: <SobratNabor />,
      },
      {
        path: "september1",
        element: <September1 />,
      },
      {
        path: "happyBirthday/:id",
        element: <HappyBirthday />,
      },
      {
        path: "classicMacarons",
        element: <ClassicMacarons />,
      },
      {
        path: "gift",
        element: <Gift />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      }, 
      {
        path: "/otzyv",
        element: <Otzyv />,
      },   {
        path: "/guarantee",
        element: <Guarantee />,
      }, 
   {
        path: "/auther",
        element: <Auther/>,
      },  {
        path: "/finalli",
        element: <Finalli/>,
      }, 
  {
        path: "/delivery",
        element: <Delivery/>,
      },
       {
        path: "/contacts",
        element: <Contacts/>,
      }, 
  {
        path: "/about",
        element: <About/>,
      }, 

    ],
  },
  {
    path: "/log-in",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <AdninLayout />,
    children: [
      {
        path: "/admin",
        element: <DashboardPage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);
export default myRouter;
