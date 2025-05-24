import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core"
import localforage from 'localforage'
import axios from 'axios'
import { BACKEND_URL } from './main'
import { useDispatch } from 'react-redux'
import { setUser } from './redux/user'

export const loader = async ({params}) => {
  try {
    const token = await localforage.getItem("token");
    const res = await axios.get(`${BACKEND_URL}/users/authenticated-user`, {
      headers: {
        Authorization: `Bearer ${token}`, 
      }
    });

    const {user} = res.data;
    return {user};
  } catch (err) {
    console.log(err);
  }
  return {success: 'true'};
}


function App() {
  const {user} = useLoaderData();
  const dispatch = useDispatch();
  dispatch(setUser({user}));

  return (
    <main className=''>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
