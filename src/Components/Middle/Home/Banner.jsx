
const Banner = () => {
  return (
    <div>
      <h1 className="text-center mb-5">Explore More</h1>
      <div className='flex flex-wrap gap-8 justify-center'>
        <div className="w-[300px] lg:w-[500px] h-[300px] bg-[url('/src/assets/banner-computer.webp')]
        bg-cover bg-no-repeat bg-center
        ">
          <p></p>
        </div>
        <div className="w-[300px] lg:w-[600px] h-[300px] bg-[url('/src/assets/banner-clothes.webp')]
        bg-cover bg-no-repeat bg-center
        "></div>
        <div className="w-[300px] lg:w-[350px] h-[200px] bg-[url('/src/assets/sportwears.avif')]
        bg-cover bg-no-repeat bg-center
        "></div>
        <div className="w-[300px] lg:w-[350px] h-[200px] bg-[url('/src/assets/books-banner.jpg')]
        bg-cover bg-no-repeat bg-center
        "></div>
        <div className="w-[300px] lg:w-[400px] h-[200px] bg-[url('/src/assets/banner-ecommerce.avif')]
        bg-cover bg-no-repeat bg-center
        "></div>
      </div>
    </div>
  )
}

export default Banner