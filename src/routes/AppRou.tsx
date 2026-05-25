import {  lazy, Suspense } from "react";
import ProteceRoute from "../COMPONENTS/auth/proteceRoute"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

 //pages
const Home = lazy(() => import("../pages/Home"))
const Categories = lazy(() => import("../pages/Categories"));
const Products = lazy(() => import("../pages/Products"));
const About = lazy(() => import("../pages/About"));
const Cart = lazy(() => import("../pages/cart"));
const Wishlist = lazy(() => import("../pages/wishlist"));
const Register = lazy(() => import("../pages/Register"));
const Error = lazy(() => import("../pages/Error"));
const Login = lazy(() => import("../pages/Login")); 
const Main = lazy(() => import("../layout/Main/Main")); 
const ProfileLayout = lazy(() => import("../layout/Main/ProfileLayout/ProfileLayout")); 
const Orders = lazy(() => import("../pages/Orders"));

const Profile = lazy(() => import("../pages/profile"));

//

//




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement : <Error />,
    children: [
  { index:true , element:<Suspense
fallback={<div>loading</div>}><Home /></Suspense> },
   { 
      path: "/categories", 
      element: <Suspense fallback={<div>loading</div>}><Categories /></Suspense>,
      errorElement: <div>Something went wrong</div>  
    },
  { path: "/categories/products/:id", element:<Suspense fallback={<div>loading</div>}><Products /></Suspense> ,
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

  { path: "/cart", element:<Suspense fallback={<div>loading</div>}><Cart /></Suspense> },
  
  { path: "/wishlist", element:
    <ProteceRoute>
  <Suspense fallback={<div>loading</div>}><Wishlist /></Suspense> 
  </ProteceRoute>
},
  { path: "/about", element: <Suspense fallback={<div>loading</div>}><About /></Suspense>  },
    { path: "/Register", element: <Suspense fallback={<div>loading</div>}><Register /></Suspense>},
      { path: "/Login", element: <Suspense fallback={<div>loading</div>}><Login /></Suspense> },

 { 
  path: "/profile",   // lowercase
  element: (
    <ProteceRoute>
      <Suspense fallback={<div>loading</div>}>
        <ProfileLayout />
      </Suspense>
    </ProteceRoute>
  ),
  children: [
    { 
      index: true,

      element: (
        <Suspense fallback={<div>loading</div>}>
          <Profile />
        </Suspense>
      ) 
    },
   { path: "orders", element: <Suspense fallback={<div>loading</div>}><Orders /></Suspense>, errorElement: <div>Something went wrong</div>  
},

  ]
}
  
   ]
  }
], {
  basename: "/e-Commerce" 
});

export default function AppRou(){


return(

   
 <RouterProvider router={router} />

  


)
}