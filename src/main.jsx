import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faArrowRight, faB, faBars, faCartShopping, faShoppingBag, faStar, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import Home from './Components/Middle/Home/Home.jsx'
import { faFacebook, faInstagram, faTelegram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
library.add(faB, faShoppingBag, faBars, faCartShopping, faStar, 
  faStarHalf, faStarHalfStroke, faArrowRight, faArrowLeft, faFacebook, 
faTwitter, faInstagram, faTelegram, faYoutube);

const routes = createBrowserRouter([
  {
    path: '/', 
    element: <App />, 
    children: [
      {
        index: '/', 
        element: <Home />
      }, 
      {
        path: '/shop', 
        element: <>shop</>
      }, 
      {
        path: '/about', 
        element: <>about</>
      }, 
      {
        path: 'counter', 
        element: <>Counter</>
      }, 
      {
        path: 'contact', 
        element: <>Contact</>
      }
    ]
  },
  {
    path: '/home', 
    element: <div>Hello</div>  
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}><App /></RouterProvider>
    
  </StrictMode>,
)
