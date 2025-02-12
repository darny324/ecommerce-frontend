import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faArrowRight, faB, faBars, faCartShopping, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faSearch, faShoppingBag, faShoppingCart, faStar, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import Home from './Components/Middle/Home/Home.jsx'
import { faFacebook, faInstagram, faTelegram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Shop from './Components/Middle/Shop/Shop.jsx'
import Menu from './Components/Middle/Shop/Menu.jsx'
import Products from './Components/Middle/Shop/Products.jsx'
import SingleProduct from './Components/Middle/Shop/SingleProduct.jsx'
library.add(faB, faShoppingBag, faBars, faCartShopping, faStar, 
  faStarHalf, faStarHalfStroke, faArrowRight, faArrowLeft, faFacebook, 
faTwitter, faInstagram, faTelegram, faYoutube, faSearch, faChevronDown, 
faChevronLeft, faChevronRight, faChevronUp, faChevronDown, faShoppingCart);

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
            path: 'products', 
            element: <Products />
          }, 
          {
            path: 'products/:id', 
            element: <SingleProduct />
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
