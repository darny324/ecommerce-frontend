import { motion } from "framer-motion"

const About = () => {
  const container = {
    hidden: {
      y: 80, 
      opacity: 0, 
    }, 
    show: {
      y: 0, 
      opacity: 1, 
      transition: {
        staggerChildren: 0.1, 
        duration: 0.5, 
      }
    }, 
    
  }
  
  
  return (
    <motion.div 
    variants={container}
    initial='hidden'
    animate='show'
    className="flex flex-col px-6 items-center mt-4 gap-4">
      <div className="md:w-[54rem] gap-4 flex flex-col items-center md:flex-row px-4 py-4 rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.5)]">
        <img src='/src/assets/ecommerce.jpg' className=" w-[13rem] md:w-[26rem] rounded-md" />
        <span>
          <h1>Our Story</h1>
          <p className="text-gray-500" >Welcome to <b>ShopSphere</b>, where 
          shopping meets convenience! Our journey started with a simple idea: to 
          create an online store that offers high-quality products at affordable 
          prices. Whether you&apos;re looking for the latest trends, unique finds, 
          or everyday essentials, we’ve got you covered.</p>
        </span>
      </div>

      <div className="md:w-[54rem] gap-4 flex flex-col items-center md:flex-row-reverse px-4 py-4 rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.5)]">
        <img src='/src/assets/offer.jpg' className="w-[13rem] md:w-[26rem] rounded-md" />
        <span>
          <h1>What we offer?</h1>
          <p className="text-gray-500" >At <b>ShopSphere</b>, we provide a 
            carefully curated selection of products across four categories: 
            fashion, electronics and tech related devices, sports products, and
            Books and stationery. We prioritize quality, affordability, and 
            customer satisfaction in every item we sell.</p>
        </span>
      </div>

      <div className="w-[85%] md:w-[45%] text-center flex flex-col gap-12">
        <h1 className="text-center">Meet The Team</h1>
        <div className="flex flex-col items-center">
          <img src='/src/assets/profile.png' className="w-[6rem] h-[6rem] rounded-full object-contain" />
          <h2>Alex Carter</h2>
          <h2>Founder & CEO</h2>
          <p className="text-gray-500">Alex started <b>ShopSphere</b> as a passion project to explore the world of eCommerce. With a background in business and tech, Alex loves creating seamless shopping experiences for customers.</p>
        </div>

        <div className="flex flex-col items-center">
          <img src='/src/assets/profile.png' className="w-[6rem] h-[6rem] rounded-full object-contain" />
          <h2>Jamie Lee</h2>
          <h2>Product Manager</h2>
          <p className="text-gray-500">Jamie handpicks every product, ensuring quality and affordability. Always on the lookout for the latest trends, Jamie makes sure the store stays fresh and exciting.</p>
        </div>

        <div className="flex flex-col items-center">
          <img src='/src/assets/profile.png' className="w-[6rem] h-[6rem] rounded-full object-contain" />
          <h2>Taylor Smith</h2>
          <h2>Customer Support Lead</h2>
          <p className="text-gray-500">Taylor is the friendly face behind customer inquiries. Whether it’s a question about shipping, returns, or recommendations, Taylor ensures every customer leaves happy.</p>
        </div>

        <div className="flex flex-col items-center">
          <img src='/src/assets/profile.png' className="w-[6rem] h-[6rem] rounded-full object-contain" />
          <h2>Chris Johnson</h2>
          <h2>Warehouse & Logistics Coordinator</h2>
          <p className="text-gray-500">Chris manages all things shipping, making sure every order is packed securely and delivered on time. A pro at handling logistics, Chris keeps everything running smoothly behind the scenes.</p>
        </div>

        <div className="flex flex-col items-center mb-8">
          <img src='/src/assets/profile.png' className="w-[6rem] h-[6rem] rounded-full object-contain" />
          <h2>Morgan Davis</h2>
          <h2>Social Media & Marketing Specialist</h2>
          <p className="text-gray-500">Morgan runs all social media accounts, keeping customers engaged with updates, promotions, and fun content. From Instagram stories to TikTok trends, Morgan keeps [Your Store Name] in the spotlight.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default About