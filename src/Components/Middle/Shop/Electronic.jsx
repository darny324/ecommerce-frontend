import SearchProducts from "./SearchProducts"
import Filter from './Filter'
import CheckSection from "./CheckSection"



/**
 * 
 * Apple (MacBook, iMac, Mac Mini, Mac Studio)
Dell (XPS, Inspiron, Alienware, Latitude)
HP (Hewlett-Packard) (Pavilion, Envy, Spectre, Omen)
Lenovo (ThinkPad, IdeaPad, Legion, Yoga)
Asus (ROG, TUF, ZenBook, VivoBook)
Acer (Aspire, Predator, Nitro, Swift)
Microsoft (Surface Laptop, Surface Pro)
MSI (Stealth, Titan, Creator, Prestige)
Razer (Blade series for gaming)
Samsung (Galaxy Book series)
 */
const electronicsFilters = [
  {
    category: "Category",
    filterType: 'normal', 
    options: [
      { label: "Laptops", value: "category=Laptops" },
      { label: "Desktops", value: "category=Desktops" },
      { label: "Tablets", value: "category=Tablets" },
      { label: "Smartphones", value: "category=Smartphones" },
      { label: "Smartwatches", value: "category=Smartwatches" },
      { label: "TVs & Monitors", value: "category=TVs & Monitors" },
      { label: "Cameras", value: "category=Cameras" },
      { label: "Headphones & Earbuds", value: "category=Headphones & Earbuds" },
      { label: "Speakers", value: "category=Speakers" },
      { label: "Gaming Consoles", value: "category=Gaming Consoles" },
      { label: "Accessories", value: "category=Accessories" }
    ]
  },
  {
    category: "Brand",
    filterType: 'normal', 
    options: [
      { label: "Apple", value: "brand=Apple" },
      { label: "Samsung", value: "brand=Samsung" },
      { label: "Sony", value: "brand=Sony" },
      { label: "LG", value: "brand=LG" },
      { label: "HP", value: "brand=HP" },
      { label: "Dell", value: "brand=Dell" },
      { label: "Lenovo", value: "brand=Lenovo" },
      { label: "Asus", value: "brand=Asus" },
      { label: "Acer", value: "brand=Acer" },
      { label: "Microsoft", value: "brand=Microsoft" },
      { label: "Bose", value: "brand=Bose" },
      { label: "JBL", value: "brand=JBL" }
    ]
  },
  {
    category: "Screen Size",
    filterType: 'numeric', 
    options: [
      { label: "Below 10 inches", value: "screenSize<10" },
      { label: "10 - 13 inches", value: "screenSize>=10 && screenSize<=13" },
      { label: "13 - 15 inches", value: "screenSize>=13 && screenSize<=15" },
      { label: "15 - 17 inches", value: "screenSize>=15 && screenSize<=17" },
      { label: "Above 17 inches", value: "screenSize>17" }
    ]
  },
  {
    category: "Processor",
    filterType: 'normal', 
    options: [
      { label: "Intel Core i3", value: "processor='Intel Core i3'" },
      { label: "Intel Core i5", value: "processor='Intel Core i5'" },
      { label: "Intel Core i7", value: "processor='Intel Core i7'" },
      { label: "Intel Core i9", value: "processor='Intel Core i9'" },
      { label: "AMD Ryzen 3", value: "processor='AMD Ryzen 3'" },
      { label: "AMD Ryzen 5", value: "processor='AMD Ryzen 5'" },
      { label: "AMD Ryzen 7", value: "processor='AMD Ryzen 7'" },
      { label: "Apple M1/M2/M3", value: "processor='Apple M1/M2/M3'" }
    ]
  },
  {
    category: "RAM",
    filterType: 'normal', 
    options: [
      { label: "2GB", value: "ram=2" },
      { label: "4GB", value: "ram=4" },
      { label: "8GB", value: "ram=8" },
      { label: "16GB", value: "ram=16" },
      { label: "32GB", value: "ram=32" }
    ]
  },
  {
    category: "Storage Type",
    filterType: 'normal', 
    options: [
      { label: "HDD", value: "storageType='HDD'" },
      { label: "SSD", value: "storageType='SSD'" },
      { label: "Hybrid (HDD + SSD)", value: "storageType='Hybrid (HDD + SSD)'" }
    ]
  },
  {
    category: "Storage Capacity",
    filterType: 'normal', 
    options: [
      { label: "128GB", value: "storageCapacity=128" },
      { label: "256GB", value: "storageCapacity=256" },
      { label: "512GB", value: "storageCapacity=512" },
      { label: "1TB", value: "storageCapacity=1024" },
      { label: "2TB", value: "storageCapacity=2048" }
    ]
  },
  {
    category: "Battery Capacity (mAh)",
    filterType: 'numeric', 
    options: [
      { label: "Below 3000mAh", value: "batteryCapacity<3000" },
      { label: "3000 - 4000mAh", value: "batteryCapacity>=3000 && batteryCapacity<=4000" },
      { label: "4000 - 5000mAh", value: "batteryCapacity>=4000 && batteryCapacity<=5000" },
      { label: "5000 - 6000mAh", value: "batteryCapacity>=5000 && batteryCapacity<=6000" },
      { label: "6000mAh and above", value: "batteryCapacity>=6000" }
    ]
  },
  {
    category: "Connectivity",
    filterType: 'normal', 
    options: [
      { label: "Wi-Fi", value: "connectivity='Wi-Fi'" },
      { label: "Bluetooth", value: "connectivity='Bluetooth'" },
      { label: "5G", value: "connectivity='5G'" },
      { label: "4G LTE", value: "connectivity='4G LTE'" },
      { label: "NFC", value: "connectivity='NFC'" },
      { label: "USB-C", value: "connectivity='USB-C'" },
      { label: "Thunderbolt", value: "connectivity='Thunderbolt'" }
    ]
  },
  {
    category: "Operating System",
    filterType: 'normal', 
    options: [
      { label: "Windows", value: "os='Windows'" },
      { label: "macOS", value: "os='macOS'" },
      { label: "Linux", value: "os='Linux'" },
      { label: "Android", value: "os='Android'" },
      { label: "iOS", value: "os='iOS'" },
      { label: "Chrome OS", value: "os='Chrome OS'" }
    ]
  },
  {
    category: "Resolution",
    filterType: 'normal', 
    options: [
      { label: "HD", value: "resolution='HD'" },
      { label: "Full HD", value: "resolution='Full HD'" },
      { label: "2K", value: "resolution='2K'" },
      { label: "4K UHD", value: "resolution='4K UHD'" },
      { label: "8K", value: "resolution='8K'" }
    ]
  },
  {
    category: "Warranty",
    filterType: 'numeric', 
    options: [
      { label: "No Warranty", value: "warrantyInMonths>=0" },
      { label: "6 Months", value: "warrantyInMonths>=6" },
      { label: "1 Year", value: "warrantyInMonths>=12" },
      { label: "2 Years+", value: "warrantyInMonths>=24" }
    ]
  }
];




const Electronic = () => {
 
  
  return (
    <div className="flex md:flex-row flex-col">
      <Filter>
          {
            electronicsFilters.map((filter) => 
            <CheckSection key={filter.category + '+clothingfilter'} title={filter.category} options={filter.options} filterType={filter.filterType} />
            )
          }
        </Filter>
      <SearchProducts page='electronic' />
    </div>
  )
}

export default Electronic