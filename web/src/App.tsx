import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './routes/routes'
import { RouterProvider } from 'react-router'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
