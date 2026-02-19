
 //pages
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Products from "../pages/Products";
import About from "../pages/About";
import Main from "../layout/Main/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";//
import Error from "../pages/Error";
//

import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement : <Error />,
    children: [
  { index:true , element: <Home /> },
  { path: "/categories", element: <Categories /> },
  { path: "/categories/products/:id", element: <Products /> ,
  loader:(({params})=>{
if(typeof params.id !== 'string'||
  !/^[a-z]+$/.test(params.id)
){
 throw new Response('bad request', {
  statusText :'not found',
  status:400})


}else{ return true}

      })




  },
  { path: "/about", element: <About /> },
    { path: "/Register", element: <Register />,},
      { path: "/Login", element: <Login /> },
    ],
  },
]);

export default function AppRou(){


return(

   
 <RouterProvider router={router} />

  


)
}