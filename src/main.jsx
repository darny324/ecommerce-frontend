import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faArrowDown, faArrowLeft, faArrowRight, faB, faBars, faBoxArchive, faCartShopping, faCheck, faCheckCircle, faChevronDown, faChevronLeft, faChevronRight, faChevronUp, faCreditCard, faCross, faDolly, faEdit, faPlus, faPlusCircle, faSearch, faShoppingBag, faShoppingCart, faSort, faStar, faStarHalf, faStarHalfStroke, faTableCells, faTrash, faUser, faUsers, faXmark } from '@fortawesome/free-solid-svg-icons'
import Home from './Components/Middle/Home/Home.jsx'
import { faCcMastercard, faFacebook, faInstagram, faPaypal, faTelegram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Menu from './Components/Middle/Shop/Menu.jsx'
import Products from './Components/Middle/Shop/Products.jsx'
import SingleProduct from './Components/Middle/Shop/SingleProduct.jsx'
import About from './Components/Middle/About/About.jsx'
import Contact from './Components/Middle/Contact/Contact.jsx'
import Counter from './Components/Middle/Counter/Counter.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import SignIn from './Components/Auth/SignIn.jsx'
import SignUp from './Components/Auth/SignUp.jsx'
import Shop from './Components/Middle/Shop/Shop.jsx'
import Confirm from './Components/Auth/Confirm.jsx'
import MainPage from './Components/Admin/main/MainPage.jsx'
import Dashboard from './Components/Admin/Page/dashboard/Dashboard.jsx'
import AdminProudcts from './Components/Admin/Page/products/AdminProducts.jsx'
import Orders from './Components/Admin/Page/orders/Orders.jsx'
import Customers from './Components/Admin/Page/customers/Customers.jsx'
import ProductQuery from './Components/Admin/Page/products/ProductQuery.jsx'
import CreateProduct from './Components/Admin/Page/products/CreateProduct.jsx'
import EditProduct from './Components/Admin/Page/products/EditProduct.jsx'
import SingleOrder from './Components/Admin/Page/orders/SingleOrder.jsx'
import OrderLists from './Components/Admin/Page/orders/OrderLists.jsx'
import CustomerList from './Components/Admin/Page/customers/CustomerList.jsx'
import SingleCustomer from './Components/Admin/Page/customers/SingleCustomer.jsx'
import User from './Components/Middle/User/User.jsx'
import EditUser from './Components/Middle/User/EditUser.jsx'
import UserInfo from './Components/Middle/User/UserInfo.jsx'
library.add(faB, faShoppingBag, faBars, faCartShopping, faStar, 
  faStarHalf, faStarHalfStroke, faArrowRight, faArrowLeft, faFacebook, 
faTwitter, faInstagram, faTelegram, faYoutube, faSearch, faChevronDown, 
faChevronLeft, faChevronRight, faChevronUp, faChevronDown, faShoppingCart, 
faXmark, faPaypal, faCcMastercard, faCreditCard, faTrash, faAngleDown, 
faCheckCircle, faBoxArchive, faDolly, faUsers, faUser,
faPlusCircle, faSort, faEdit);

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
        path: 'contact', 
        element: <Contact />
      }, 
      {
        path: 'user', 
        element: <User />,
        children: [
          {
            index: true, 
            element: <UserInfo />
          },
          {
            path: 'edit', 
            element: <EditUser />
          }
        ]
      }
    ]
  },
  {
    path: 'counter', 
    element: <Counter />
  }, 
  {
    path: '/sign-in', 
    element: <SignIn />
  }, 
  {
    path: '/sign-up', 
    element: <SignUp />
  }, {
    path: '/otp', 
    element: <Confirm />
  }, 
  {
    path: '/admin', 
    element: <MainPage />,
    children: [
      {
        path: 'dashboard', 
        element: <Dashboard />
      }, {
        path: 'products', 
        element: <AdminProudcts />,
        children: [
          {
            index: true, 
            element: <ProductQuery />
          },
          {
            path: 'create', 
            element: <CreateProduct />
          }, 
          {
            path: 'edit/:id', 
            element: <EditProduct />
          }
        ]
      }, {
        path: 'orders', 
        element: <Orders />,
        children: [
          {
            index: true, 
            element: <OrderLists />
          },
          {
            path: ':orderId', 
            element: <SingleOrder />
          }
        ]
      }, {
        path: 'customers', 
        element: <Customers />,
        children: [
          {
            index: true, 
            element: <CustomerList />
          }, 
          {
            path: ':userId', 
            element: <SingleCustomer />
          }
        ]
      }
    ]
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
