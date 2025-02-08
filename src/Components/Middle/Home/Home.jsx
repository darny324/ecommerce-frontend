import Banner from './Banner'
import FeaturedProducts from './FeaturedProducts'
import Intro from './Intro'
import NewArrival from './NewArrival'

const Home = () => {
  return (
    <section>
      <Intro />
      <FeaturedProducts />
      <NewArrival />
      <Banner />
    </section>
  )
}

export default Home