import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import AllBooksContext from './context/AllBooksContext'
import AuthContext from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <AllBooksContext>
        <RouterProvider router={router} />
      </AllBooksContext>
    </AuthContext>
  </React.StrictMode>,
)
