import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import AdninLayout from "./admin/AdninLayout";
import Products from "./admin/features/Products/Products";
import DashboardPage from "./admin/features/pages/DashboardPage/DashboardPage";
// import Holydays from "./pages/category/Holydays/Holydays";
import Wholesale from "./pages/wholesale/Wholesale";
import ProductNews from "./components/product/productNews/ProductNews";
import News from "./components/product/productNews/News";
import AssembleSet from "./components/assemble/assembleSet/AssembleSet";
import { ImageOff } from "lucide-react";
import SweetDiscount from "./components/assemble/sweetDiscount/SweetDiscount";
import Holydays from "./pages/category/Holydays/Holydays";
import Design from "./pages/design/design";

import SobratNabor from "./pages/Sobrat-Nabor/SobratNabor";
import Gallery from "./pages/design/style/Gallery";
const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path:"",
                element:<Home/>
            },

            {
                path:"design",
                element: <Design/>
            },
            , {
                path:"holyday",
                element:<Holydays/>
            },
            {
                path:"wholesale",
                element: <Wholesale/>
            },
            {
                path:"gallery",
                element: <Gallery/>
            },
        
                path:"/news",
                element:<News/>
            }, {
                path:"/set",
                element:<AssembleSet/>
            },{
                path:"/discount",
                element:<SweetDiscount/>
          },{
                path:"/sobratnabor/:id",
                element:<SobratNabor/>
            },

        ],
    },
   {
        path: "/",
        element: <AdninLayout />,
        children: [
            {
                path: "/admin",
                element: <DashboardPage/>
            },
            {
                path: "/products",
                element: <Products />
            },
            
        ]
    }
])
export default myRouter