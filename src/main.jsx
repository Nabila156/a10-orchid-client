import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from "next-themes";
import AuthProvider from './providers/AuthProvider'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider attribute="data-theme">
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer></ToastContainer>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
)
