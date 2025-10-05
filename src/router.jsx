import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import AdninLayout from "./admin/AdninLayout";
import Products from "./admin/features/Products/Products";
import DashboardPage from "./admin/features/pages/DashboardPage/DashboardPage";
import Holydays from "./pages/category/Holydays/Holydays";
import Wholesale from "./pages/wholesale/Wholesale";
import News from "./components/product/productNews/News";
import AssembleSet from "./components/assemble/assembleSet/AssembleSet";
import SweetDiscount from "./components/assemble/sweetDiscount/SweetDiscount";
import Design from "./pages/design/Design";
import SobratNabor from "./pages/Sobrat-Nabor/SobratNabor";
import September1 from "./pages/options/september1/September1";
import LoginPage from "./admin/features/pages/LoginPage/LoginPage";
import HappyBirthday from "./pages/options/happyBirthday/HappyBirthday";
import ClassicMacarons from "./pages/options/classicMacarons/ClassicMacarons";
import Gallery from "./pages/design/style/Gallery";
import Gift from "./pages/gift/Gift";
import CartPage from "./components/cart/CartPage";
import Otzyv from "./pages/about/abouts/Otzyv";
import Guarantee from "./pages/about/abouts/Guarantee";
import Auther from "./auth/Auther";
import Finalli from "./auth/Finalli";
import Delivery from "./pages/about/abouts/Delivery";
import Contacts from "./pages/about/abouts/Contacts";
import About from "./pages/about/abouts/About";
import Catalog from "./pages/options/catalog/Catalog";
import EclairsPage from "./pages/options/eclairs/EclairsPage";
import WafflePage from "./pages/options/WafflePage/WafflePage";
import ComboPage from "./pages/options/comboPage/ComboPage";
import MacaronPage from "./pages/options/macaron/MacaronPage";
import CorGifts from "./pages/options/Cor-gifts/CorGifts";

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
        path: "gallery/:count",
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
        path: "happyBirthday",
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
      }, {
        path: "/catalog",
        element: <Catalog/>,
      }, 
     {
        path: "/eclairs",
        element: <EclairsPage/>,
      },    {
        path: "/waffle",
        element: <WafflePage/>,
      }, 
   {
        path: "/combo",
        element: <ComboPage/>,
      }, {
        path: "/macaron",
        element: <MacaronPage/>,
      },  {
        path: "/corgifts",
        element: <CorGifts/>,
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
