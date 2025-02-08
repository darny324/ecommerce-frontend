import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core"

function App() {

  return (
    <main className='font-mono'>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
