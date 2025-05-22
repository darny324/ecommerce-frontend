import { useEffect, useState } from "react"
import Filter from "./Filter"
import SearchProducts from "./SearchProducts"



const fields = ['category', 'brand', 'processor', 'ram', 'storage', 'batteryLife', 'material'];


const categories = [
  { label: "Desktops & Laptops", value: "desktops & laptops" },
  { label: "Smartphones & Tablets", value: "smartphones & tablets" },
  { label: "Monitors & Accessories", value: "monitors accessories" },
  { label: "Gaming Consoles", value: "gaming consoles" },
  { label: "Tevelsions & Monitors", value: "televisions & monitors"}
];

const brands = [
  { label: "Apple", value: "apple" },
  { label: "Samsung", value: "samsung" },
  { label: "Dell", value: "dell" },
  { label: "HP", value: "hp" },
  { label: "Lenovo", value: "lenovo" },
  { label: "Asus", value: "asus" },
  { label: "Acer", value: "acer" },
  { label: "Sony", value: "sony" },
  { label: "Logitech", value: "logitech" },
  { label: "Razer", value: "razer" },
  { label: "Intel", value: "intel" },
  { label: "AMD", value: "amd" },
];

const processors = [
  { label: "Intel i3", value: "intel i3" },
  { label: "Intel i5", value: "intel i5" },
  { label: "Intel i7", value: "intel i7" },
  { label: "Intel i9", value: "intel i9" },
  { label: "AMD Ryzen 3", value: "amd ryzen 3" },
  { label: "AMD Ryzen 5", value: "amd ryzen 5" },
  { label: "AMD Ryzen 7", value: "amd ryzen 7" },
  { label: "AMD Ryzen 9", value: "amd ryzen 9" },
];

const rams = [
  { label: "4 GB", value: "4GB" },
  { label: "8 GB", value: "8GB" },
  { label: "16 GB", value: "16GB" },
  { label: "32 GB", value: "32GB" },
  { label: "64 GB", value: "64GB" },
];


const storages = [
  { label: "128 GB SSD", value: "128GB SSD" },
  { label: "256 GB SSD", value: "256GB SSD" },
  { label: "512 GB SSD", value: "512GB SSD" },
  { label: "1 TB SSD", value: "1TB SSD" },
  { label: "1 TB HDD", value: "1TB HDD" },
  { label: "2 TB HDD", value: "2TB HDD" },
];


const materials = [
  { label: "Plastic", value: "plastic" },
  { label: "Aluminum", value: "aluminum" },
  { label: "Magnesium Alloy", value: "magnesium-alloy" },
  { label: "Carbon Fiber", value: "carbon-fiber" },
];

const ratings = [
  {label: "1 star", value: 'ratings>=1'}, 
  {label: '2 star', value: "ratings>=2"},
  {label: '3 star', value: "ratings>=3"},
  {label: '4 star', value: "ratings>=4"},
  {label: '5 star', value: "ratings>=5"},
];

const discounts = [
  {label: '10%+', value: "discount>=0.1"},
  {label: '20%+', value: "discount>=0.2"},
  {label: '30%+', value: "discount>=0.3"},
  {label: '40%+', value: "discount>=0.4"},
  {label: '50%+', value: "discount>=0.5"},
];



const AllProducts = () => {
  const [filters, setFilters] = useState({
    category: [], 
    brand: [], 
    processor: [], 
    ram: [], 
    storage: [], 
    batteryLife: [], 
    material: [], 
  });

  const [numericFilters, setNumericFilters] = useState({
    ratings: '', 
    discount: '', 
  });

  const [sliderValue, setSliderValue] = useState(20);

  const onChecked = (field, value) => {
    setFilters((filter) => {
      const current = filter[field]
      const updated = filter[field].includes(value) ? filter[field].filter((f) => f !== value) : [...filter[field], value];
      return {...filter, [field]: updated};
    })
  }

  const onNumericChecked = (field, value) => {
    setNumericFilters((filter) => {
      if ( filter[field] === value){
        return {...filter, [field]: ''};
      }
      return {...filter, [field]:value};
    })
  }


  useEffect(() => {
    let query = "";
    fields.forEach((field, i) => {
      filters[field].forEach((value, index) => {
        if ( index === 0 ){
          query += field + '=';
        }
        if ( index === filters[field].length - 1) {
          query += value + "&"; 
        } else {
          query += value + ",";
        }
      })
    })
    query += "numericFilters=", 
    query += numericFilters.ratings + ",";
    query += numericFilters.discount;
    console.log(query);
  }, [filters, numericFilters])

  return (
    <div className="flex md:flex-row flex-col items-start">
      <Filter>
      <div>
          <p>${sliderValue.toFixed(2)}</p>
          <input type="range" min='20' max='20000' value={sliderValue}
          onChange={(e) => setSliderValue(parseInt(e.target.value))}
          />
          <button className="border border-gray-400 cursor-pointer hover:bg-gray-200 px-2 rounded-3xl">Find</button>
        </div>
        <div>
          <label className="font-semibold">Ratings</label>
          {
            ratings.map((rating) => {
              return <div key={rating.label + "+rating"} className="text-sm py-1">
                <input 
                checked={numericFilters.ratings === rating.value}
                onChange={(e) => {onNumericChecked('ratings', rating.value)}}
                className="checkbox checkbox-sm mr-1" type="checkbox"/>
                <span className="text-gray-600">{rating.label}</span>
              </div>
            })
          }
        </div>

        <div>
          <label className="font-semibold">Discounts</label>
          {
            discounts.map((discount) => {
              return <div key={discount.label + "+discount"} className="text-sm py-1">
                <input 
                checked={numericFilters.discount === discount.value}
                onChange={(e) => {onNumericChecked('discount', discount.value)}}
                className="checkbox checkbox-sm mr-1" type="checkbox"/>
                <span className="text-gray-600">{discount.label}</span>
              </div>
            })
          }
        </div>

        <div>
          <label className="font-semibold">Category</label>
          {
            categories.map((category) => {
              return <div key={category.label + "+category"} className="text-sm py-1">
                <input 
                checked={filters.category.includes(category.value)}
                onChange={(e) => {onChecked('category', category.value)}}
                className="checkbox checkbox-sm mr-1" type="checkbox"/>
                <span className="text-gray-600">{category.label}</span>
              </div>
            })
          }
        </div>
        <div>
          <label className="font-semibold">Brands</label>
          {
            brands.map((brand) => {
              return <div key={brand.label + "+brand"} className="text-sm py-1">
                <input 
                checked={filters.brand.includes(brand.value)}
                onChange={(e) => {onChecked('brand', brand.value)}}
                className="checkbox checkbox-sm mr-1" type="checkbox"/>
                <span className="text-gray-600">{brand.label}</span>
              </div>
            })
          }
        </div>

        <div>
          <label className="font-semibold">Processors</label>
          {
            processors.map((processor) => {
              return <div key={processor.label + "+processor"} className="text-sm py-1">
                <input 
                checked={filters.processor.includes(processor.value)}
                onChange={(e) => {onChecked('processor', processor.value)}}
                className="checkbox checkbox-sm mr-1" type="checkbox"/>
                <span className="text-gray-600">{processor.label}</span>
              </div>
            })
          }
        </div>

        <div>
          <label className="font-semibold">RAM</label>
          {
            rams.map((ram) => {
              return <div key={ram.label + "+ram"} className="text-sm py-1">
                <input 
                checked={filters.ram.includes(ram.value)}
                onChange={(e) => {onChecked('ram', ram.value)}}
                className="checkbox checkbox-sm mr-1" type="checkbox"/>
                <span className="text-gray-600">{ram.label}</span>
              </div>
            })
          }
        </div>

        <div>
          <label className="font-semibold">Storage</label>
          {
            storages.map((storage) => {
              return <div key={storage.label + "+storage"} className="text-sm py-1">
                <input 
                checked={filters.storage.includes(storage.value)}
                onChange={(e) => {onChecked('storage', storage.value)}}
                className="checkbox checkbox-sm mr-1" type="checkbox"/>
                <span className="text-gray-600">{storage.label}</span>
              </div>
            })
          }
        </div>

        <div>
          <label className="font-semibold">Material</label>
          {
            materials.map((material) => {
              return <div key={material.label + "+material"} className="text-sm py-1">
                <input 
                checked={filters.material.includes(material.value)}
                onChange={(e) => {onChecked('material', material.value)}}
                className="checkbox checkbox-sm mr-1" type="checkbox"/>
                <span className="text-gray-600">{material.label}</span>
              </div>
            })
          }
        </div>
      </Filter>
      <SearchProducts page='all' />
    </div>
  )
}

export default AllProducts