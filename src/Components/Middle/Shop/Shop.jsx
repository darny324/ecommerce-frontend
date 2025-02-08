import { Outlet, useLocation } from "react-router-dom"
import SearchBox from "./SearchBox";
import Filter from "./Filter";

const Shop = () => {
  const {pathname} = useLocation();
  return (
    <section>
      {
        pathname === '/shop' ? <Outlet /> 
        : <>
        <SearchBox />
        <div>
          <Filter />
          <Outlet />
        </div>
        </>
      }
      
    </section>
  )
}

export default Shop