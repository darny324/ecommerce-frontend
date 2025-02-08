import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faArrowRight, faB, faBars, faCartShopping, faChevronDown, faSearch, faShoppingBag, faStar, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import Home from './Components/Middle/Home/Home.jsx'
import { faFacebook, faInstagram, faTelegram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Shop from './Components/Middle/Shop/Shop.jsx'
import Electronic from './Components/Middle/Shop/Electronic.jsx'
import Sports from './Components/Middle/Shop/Sports.jsx'
import Clothing from './Components/Middle/Shop/Clothing.jsx'
import Books from './Components/Middle/Shop/Books.jsx'
import Menu from './Components/Middle/Shop/Menu.jsx'
library.add(faB, faShoppingBag, faBars, faCartShopping, faStar, 
  faStarHalf, faStarHalfStroke, faArrowRight, faArrowLeft, faFacebook, 
faTwitter, faInstagram, faTelegram, faYoutube, faSearch, faChevronDown);

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
        element: <Shop />, 
        children: [
          {
            index: '/shop', 
            element: <Menu />
          }, 
          {
            path: 'electronics', 
            element: <Electronic />
          }, 
          {
            path: 'sports', 
            element: <Sports />
          }, 
          {
            path: 'clothes',
            element: <Clothing /> 
          }, 
          {
            path: 'books', 
            element: <Books />
          }
        ]
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
