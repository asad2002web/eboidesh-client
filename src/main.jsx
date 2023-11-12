import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { Auth0Provider } from '@auth0/auth0-react'
import { clientId, domain } from './authentication/auth0-config'
import AllBooksContext from './context/AllBooksContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-askyh0h63ie62djb.us.auth0.com'
      clientId='8jNwk5rUte2icvX8txbE25DfslSBsqMM'
      redirectUri={window.location.origin}
    >
      <AllBooksContext>
        <RouterProvider router={router} />
      </AllBooksContext>
    </Auth0Provider>
  </React.StrictMode>,
)
