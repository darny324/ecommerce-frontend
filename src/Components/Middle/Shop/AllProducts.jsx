import Filter from "./Filter"
import SearchProducts from "./SearchProducts"


const AllProducts = () => {
  return (
    <div className="flex md:flex-row flex-col items-start">
      <Filter>
      </Filter>
      <SearchProducts page='all' />
    </div>
  )
}

export default AllProducts