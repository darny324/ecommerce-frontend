import { Outlet, useLocation } from "react-router-dom"

const Shop = () => {
  const {pathname} = useLocation();
  return (
    <section>
      {
        pathname === '/shop' || pathname === '/shop/' ? <Outlet /> 
        : <>
          <Outlet />
        </>
      }
      
    </section>
  )
}

export default Shop