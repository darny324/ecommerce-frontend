import CheckSection from "./CheckSection";
import Filter from "./Filter"
import SearchProducts from "./SearchProducts"

const clothingFilters = [
  {
    category: "Category",
    filterType: 'normal', 
    options: [
      { label: "T-Shirts", value: "category_tshirts" },
      { label: "Shirts", value: "category_shirts" },
      { label: "Jeans & Trousers", value: "category_jeans_trousers" },
      { label: "Dresses", value: "category_dresses" },
      { label: "Jackets & Coats", value: "category_jackets_coats" },
      { label: "Activewear", value: "category_activewear" },
      { label: "Ethnic Wear", value: "category_ethnic_wear" }
    ]
  },
  {
    category: "Size",
    filterType: 'normal', 
    options: [
      { label: "XS", value: "size_xs" },
      { label: "S", value: "size_s" },
      { label: "M", value: "size_m" },
      { label: "L", value: "size_l" },
      { label: "XL", value: "size_xl" },
      { label: "XXL", value: "size_xxl" }
    ]
  },
  {
    category: "Brand",
    filterType: 'normal', 
    options: [
      { label: "Nike", value: "brand_nike" },
      { label: "Adidas", value: "brand_adidas" },
      { label: "Puma", value: "brand_puma" },
      { label: "Levi’s", value: "brand_levis" },
      { label: "Gucci", value: "brand_gucci" },
      { label: "Zara", value: "brand_zara" },
      { label: "H&M", value: "brand_hm" }
    ]
  },
  {
    category: "Color",
    filterType: 'normal', 
    options: [
      { label: "Black", value: "color_black" },
      { label: "White", value: "color_white" },
      { label: "Blue", value: "color_blue" },
      { label: "Red", value: "color_red" },
      { label: "Green", value: "color_green" },
      { label: "Yellow", value: "color_yellow" },
      { label: "Gray", value: "color_gray" },
      { label: "Pink", value: "color_pink" }
    ]
  },
  {
    category: "Material",
    filterType: 'normal', 
    options: [
      { label: "Cotton", value: "material_cotton" },
      { label: "Denim", value: "material_denim" },
      { label: "Leather", value: "material_leather" },
      { label: "Wool", value: "material_wool" },
      { label: "Polyester", value: "material_polyester" },
      { label: "Silk", value: "material_silk" }
    ]
  },
  {
    category: "Gender",
    filterType: 'normal', 
    options: [
      { label: "Men", value: "gender_men" },
      { label: "Women", value: "gender_women" },
      { label: "Unisex", value: "gender_unisex" }
    ]
  },
  {
    category: "Pattern & Style",
    filterType: 'normal', 
    options: [
      { label: "Solid", value: "pattern_solid" },
      { label: "Striped", value: "pattern_striped" },
      { label: "Printed", value: "pattern_printed" },
      { label: "Floral", value: "pattern_floral" },
      { label: "Checked", value: "pattern_checked" }
    ]
  },
  {
    category: "Fit Type",
    filterType: 'normal', 
    options: [
      { label: "Slim Fit", value: "fit_slim" },
      { label: "Regular Fit", value: "fit_regular" },
      { label: "Loose Fit", value: "fit_loose" },
      { label: "Oversized", value: "fit_oversized" }
    ]
  },
  {
    category: "Sleeve Length",
    filterType: 'normal', 
    options: [
      { label: "Sleeveless", value: "sleeve_sleeveless" },
      { label: "Short Sleeve", value: "sleeve_short" },
      { label: "Long Sleeve", value: "sleeve_long" }
    ]
  },
  {
    category: "Occasion",
    filterType: 'normal', 
    options: [
      { label: "Casual", value: "occasion_casual" },
      { label: "Formal", value: "occasion_formal" },
      { label: "Party Wear", value: "occasion_party_wear" },
      { label: "Sports & Gym", value: "occasion_sports_gym" }
    ]
  }
];





const Clothing = () => {
  return (
  <div className="flex md:flex-row flex-col">
      <Filter>
        {
          clothingFilters.map((filter) => 
          <CheckSection key={filter.category + '+clothingfilter'} title={filter.category} options={filter.options} filterType={filter.filterType} />
          )
        }
      </Filter>
      <SearchProducts page='electronic' />
    </div>
  )
}

export default Clothing