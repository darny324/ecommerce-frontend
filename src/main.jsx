import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faArrowRight, faB, faBars, faCartShopping, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faCreditCard, faSearch, faShoppingBag, faShoppingCart, faStar, faStarHalf, faStarHalfStroke, faXmark } from '@fortawesome/free-solid-svg-icons'
import Home from './Components/Middle/Home/Home.jsx'
import { faCcMastercard, faFacebook, faInstagram, faPaypal, faTelegram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Menu from './Components/Middle/Shop/Menu.jsx'
import Products from './Components/Middle/Shop/Products.jsx'
import SingleProduct from './Components/Middle/Shop/SingleProduct.jsx'
import About from './Components/Middle/About/About.jsx'
import Contact from './Components/Middle/Contact/Contact.jsx'
import Counter from './Components/Middle/Counter/Counter.jsx'
import { Provider } from 'react-redux'
import store from './Components/redux/store.js'
import SignIn from './Components/Auth/SignIn.jsx'
import SignUp from './Components/Auth/SignUp.jsx'
import Shop from './Components/Middle/Shop/Shop.jsx'
library.add(faB, faShoppingBag, faBars, faCartShopping, faStar, 
  faStarHalf, faStarHalfStroke, faArrowRight, faArrowLeft, faFacebook, 
faTwitter, faInstagram, faTelegram, faYoutube, faSearch, faChevronDown, 
faChevronLeft, faChevronRight, faChevronUp, faChevronDown, faShoppingCart, 
faXmark, faPaypal, faCcMastercard, faCreditCard);

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
        element: <About />
      }, 
      {
        path: 'counter', 
        element: <Counter />
      }, 
      {
        path: 'contact', 
        element: <Contact />
      }
    ]
  },
  {
    path: '/sign-in', 
    element: <SignIn />
  }, 
  {
    path: '/sign-up', 
    element: <SignUp />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={routes}>
        <App />
    </RouterProvider>
    </Provider>
    
  </StrictMode>,
)
