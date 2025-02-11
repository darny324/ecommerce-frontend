import { useSearchParams } from "react-router-dom"
import AllProducts from "./AllProducts";
import Electronic from "./Electronic";
import Clothing from "./Clothing";
import Sports from "./Sports";
import Books from "./Books";
import SearchBox from "./SearchBox";


const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get('type');
  let typeHtml = null;
  if ( type === 'electronics') typeHtml = <Electronic />
  else if ( type === 'clothes') typeHtml = <Clothing />
  else if ( type === 'sports') typeHtml = <Sports />
  else if ( type === 'books-and-Stationery') typeHtml = <Books />
  else typeHtml = <AllProducts />
  return (
    <>
    <SearchBox />
      {typeHtml}
    </>
  )
}

export default Products