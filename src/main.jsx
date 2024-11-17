import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainCintainerVedion from './component/MainCintainerVedion.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserRegisterModel from './component/userAuth/UserRegisterModel.jsx'
import UserLogin from './component/userAuth/UserLogin.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path:'/',
        element: <MainCintainerVedion />
      },
      {
        path:'/Sign up',
        element: <UserRegisterModel />
      },
      {
        path:'/Sign in',
        element: <UserLogin />
      },
     
    ]
  },
]);

export default router;

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />  
)
