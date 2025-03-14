import laptopImg from '../../../assets/Laptop-computer.webp'
import Card from '../../Library/Card'

const arr = [
  {
    image: laptopImg, 
    name: 'ASUS Zenbook 14 OLED 2024 Business nbook 14 OLED 2024 Businesnbook 14 OLED 2024 Busines', 
    rating: 4.2, 
    brand: 'ASUS', 
    price: 349.00, 
  }, 
  {
    image: laptopImg, 
    name: 'Lenovo IdeaPad Slim 3 Chromebook ', 
    rating: 4.6, 
    brand: 'Lenovo', 
    price: 275.00, 
  }, 
  {
    image: laptopImg, 
    name: 'HP Chromebook 14 Laptop', 
    rating: 3.9, 
    brand: 'Chrome Os', 
    price: 429.00, 
  }, 
  {
    image: laptopImg, 
    name: 'ASUS Zenbook 14 OLED 2024 Business nbook 14 OLED 2024 Businesnbook 14 OLED 2024 Busines', 
    rating: 4.2, 
    brand: 'ASUS', 
    price: 349.00, 
  }, 
  
  
];

const NewArrival = () => {

  
  return (
    <div 
    className='flex flex-col items-center py-6
     w-full relative px-12
    '>
      <h1 className='mt-8'>New Arrival</h1>
      <p className='text-center text-base text-slate-300 mb-8'>Explore more, buy more</p>
      <div className="grid lg:grid-cols-4 grid-rows-1 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {
          arr.map((a, i) => {
            return <Card key={i + '+featured'} item={a} />
          })
        }
      </div>
    </div>
  )
}

export default NewArrival