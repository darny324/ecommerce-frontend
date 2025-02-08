import DesktopImg from '../../../assets/desktop.png'
import CameraImg from '../../../assets/camera.jpg'
import PhoneImg from '../../../assets/phones.png'
import headPhoneImg from '../../../assets/headphones.webp'
import MenuCard from './MenuCard'
import NurseryRhyme from '../../../assets/nursery_rymes.avif'
import Racket from '../../../assets/racket.png'
import ShuttleCock from '../../../assets/shuttle_cock.jpg'
import LotrBook from '../../../assets/lotr_book.jpg'
import BallPen from '../../../assets/ballpen.jpg'
import NoteBook from '../../../assets/notebook.jpg'
import SoccerBall from '../../../assets/soccer_ball.jpg'
import Sportjersey from '../../../assets/sportclothe.jpeg'
import TShirt from '../../../assets/tshirt1.webp'
import Suit from '../../../assets/suit.avif'
import KidCloth from '../../../assets/kid.webp'
import Dress from '../../../assets/dress.webp'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const elec = [
  {name: 'desktop', image:DesktopImg}, 
  {name: 'phone', image:CameraImg }, 
  {name: 'camera', image:PhoneImg}, 
  {name: 'headphones', image:headPhoneImg}, 
]

const clothes = [
  {name: 'casual tshirts', image:TShirt}, 
  {name: 'suits', image:Suit }, 
  {name: 'kid clothes', image:KidCloth}, 
  {name: 'dresses', image:Dress}, 
]

const sports = [
  {name: 'badminton racket', image:Racket}, 
  {name: 'shuttlecock', image:ShuttleCock }, 
  {name: 'soccer ball', image:SoccerBall}, 
  {name: 'sport jerseys', image:Sportjersey}, 
]

const books = [
  {name: 'Best Sellers', image:LotrBook}, 
  {name: 'Ball pen', image:BallPen },
  {name: 'Notebooks', image:NoteBook}, 
  {name: 'Nursery Rhymes', image:NurseryRhyme}, 
]

const Menu = () => {
  
  return (
    <div>
      <h1 className='text-center'>Menu</h1>
      <div className='
      grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center box-border
      gap-4
      '>
        <MenuCard title='Electronics' items={elec} to='electronics'  />
        <MenuCard title='Clothings' items={clothes} to='sports' />
        <MenuCard title='Sports' items={sports} to='clothes' />
        <MenuCard title='Books and stationaries' items={books} to='books' />
        <span className='m-auto text-blue-600 hover:text-blue-400
        transition-color duration-500 ease-in-out
        '>
          <Link>
            <span className='mr-2'>See All</span>
            <FontAwesomeIcon icon='arrow-right' />
          </Link>
          
        </span>
      </div>
    </div>
  )
}

export default Menu