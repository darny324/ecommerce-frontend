import CheckSection from "./CheckSection";
import Filter from "./Filter";
import SearchProducts from "./SearchProducts"

const sportsFilters = [
  {
    category: "Category",
    filterType: 'normal', 
    options: [
      { label: "Sportswear", value: "category_sportswear" },
      { label: "Footwear", value: "category_footwear" },
      { label: "Gym Equipment", value: "category_gym_equipment" },
      { label: "Sports Accessories", value: "category_sports_accessories" },
      { label: "Outdoor & Camping Gear", value: "category_outdoor_camping_gear" },
      { label: "Protective Gear", value: "category_protective_gear" }
    ]
  },
  {
    category: "Brand",
    filterType: 'normal', 
    options: [
      { label: "Nike", value: "brand_nike" },
      { label: "Adidas", value: "brand_adidas" },
      { label: "Puma", value: "brand_puma" },
      { label: "Under Armour", value: "brand_under_armour" },
      { label: "Reebok", value: "brand_reebok" },
      { label: "Decathlon", value: "brand_decathlon" },
      { label: "ASICS", value: "brand_asics" }
    ]
  },
  {
    category: "Sport Type",
    filterType: 'normal', 
    options: [
      { label: "Football", value: "sport_football" },
      { label: "Basketball", value: "sport_basketball" },
      { label: "Cricket", value: "sport_cricket" },
      { label: "Tennis", value: "sport_tennis" },
      { label: "Badminton", value: "sport_badminton" },
      { label: "Running", value: "sport_running" },
      { label: "Gym & Fitness", value: "sport_gym_fitness" },
      { label: "Cycling", value: "sport_cycling" }
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
    category: "Footwear Type",
    filterType: 'normal', 
    options: [
      { label: "Running Shoes", value: "footwear_running_shoes" },
      { label: "Training Shoes", value: "footwear_training_shoes" },
      { label: "Cleats", value: "footwear_cleats" },
      { label: "Sneakers", value: "footwear_sneakers" },
      { label: "Sandals", value: "footwear_sandals" }
    ]
  },
  {
    category: "Material",
    filterType: 'normal', 
    options: [
      { label: "Cotton", value: "material_cotton" },
      { label: "Polyester", value: "material_polyester" },
      { label: "Leather", value: "material_leather" },
      { label: "Synthetic", value: "material_synthetic" },
      { label: "Rubber", value: "material_rubber" }
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
      { label: "Gray", value: "color_gray" }
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
  }
];



const Sports = () => {
  return (
    <div className="flex md:flex-row flex-col">
        <Filter>
          {
            sportsFilters.map((filter) => 
            <CheckSection key={filter.category + '+clothingfilter'} title={filter.category} options={filter.options} filterType={filter.filterType} />
            )
          }
        </Filter>
        <SearchProducts page='electronic' />
      </div>
    )
}

export default Sports