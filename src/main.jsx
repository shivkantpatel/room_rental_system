import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainCintainerVedion from './component/MainCintainerVedion.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserRegisterModel from './component/userAuth/UserRegisterModel.jsx'
import UserLogin from './component/userAuth/UserLogin.jsx'
import RoomRegister from './component/RoomRegister/RoomRegister.jsx'



const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <MainCintainerVedion />
        },
        {
          path: '/Room-register',
          element: <RoomRegister />
        },
        {
          path: '/Sign-up',
          element: <UserRegisterModel />
        },
        {
          path: '/Sign-in',
          element: <UserLogin />
        },

      ]
    },
  ],
  {
    future: {
     
      v7_startTransition: true,           // Enable React.startTransition wrapping state updates
      v7_relativeSplatPath: true,         // Changes in relative route resolution with splat routes
      v7_fetcherPersist: true,            // Fetcher behavior persistence changes
      v7_skipActionErrorRevalidation: true,  // Revalidation after 4xx/5xx action responses
      v7_normalizeFormMethod: true,       // Normalizes form method casing to uppercase
      v7_partialHydration: true       
    },
  }
);

export default router;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
