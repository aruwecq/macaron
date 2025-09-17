import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import AdninLayout from "./admin/AdninLayout";
import MainContent from "./admin/widgets/MainContent/MainContent";
import ProductForm from "./admin/features/Products/ProductForm";
import Products from "./admin/features/Products/Products";
import DashboardPage from "./admin/features/pages/DashboardPage/DashboardPage";
// import Holydays from "./pages/category/Holydays";
import Wholesale from "./pages/wholesale/Wholesale";
import Design from "./pages/design/design";
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
            // , {
            //     path:"holydays",
            //     element:<Holyday/>
            // },
            {
                path:"wholesale",
                element: <Wholesale/>
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