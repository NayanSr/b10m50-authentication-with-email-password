import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import HomePage from './assets/components/HomePage.jsx'
import Login from './assets/components/Login.jsx'
import Register from './assets/components/Register.jsx'

const router= createBrowserRouter([
  {path:'/', element: <MainLayout/>, children:[
    {path:'/', element: <HomePage/>},
    {path: 'login', element: <Login/>},
    {path:'register', element: <Register/>}
  ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
