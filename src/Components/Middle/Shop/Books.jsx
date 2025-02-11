import CheckSection from "./CheckSection";
import Filter from "./Filter";
import SearchProducts from "./SearchProducts"

const booksAndStationeryFilters = [
  {
    category: "Category",
    filterType: 'normal', 
    options: [
      { label: "Fiction", value: "category_fiction" },
      { label: "Non-Fiction", value: "category_non_fiction" },
      { label: "Comics & Graphic Novels", value: "category_comics_graphic_novels" },
      { label: "Textbooks", value: "category_textbooks" },
      { label: "Children’s Books", value: "category_childrens_books" },
      { label: "Self-Help", value: "category_self_help" },
      { label: "Magazines", value: "category_magazines" }
    ]
  },
  {
    category: "Genre",
    filterType: 'normal', 
    options: [
      { label: "Mystery & Thriller", value: "genre_mystery_thriller" },
      { label: "Science Fiction & Fantasy", value: "genre_scifi_fantasy" },
      { label: "Romance", value: "genre_romance" },
      { label: "History", value: "genre_history" },
      { label: "Biographies", value: "genre_biographies" },
      { label: "Business & Finance", value: "genre_business_finance" },
      { label: "Education", value: "genre_education" }
    ]
  },
  {
    category: "Author",
    filterType: 'normal', 
    options: [
      { label: "J.K. Rowling", value: "author_jk_rowling" },
      { label: "George R.R. Martin", value: "author_george_rr_martin" },
      { label: "Stephen King", value: "author_stephen_king" },
      { label: "Agatha Christie", value: "author_agatha_christie" },
      { label: "Paulo Coelho", value: "author_paulo_coelho" },
      { label: "Malcolm Gladwell", value: "author_malcolm_gladwell" }
    ]
  },
  {
    category: "Language",
    filterType: 'normal', 
    options: [
      { label: "English", value: "language_english" },
      { label: "Spanish", value: "language_spanish" },
      { label: "French", value: "language_french" },
      { label: "German", value: "language_german" },
      { label: "Chinese", value: "language_chinese" },
      { label: "Hindi", value: "language_hindi" }
    ]
  },
  {
    category: "Format",
    filterType: 'normal', 
    options: [
      { label: "Paperback", value: "format_paperback" },
      { label: "Hardcover", value: "format_hardcover" },
      { label: "E-Book", value: "format_ebook" },
      { label: "Audiobook", value: "format_audiobook" }
    ]
  },
  {
    category: "Stationery Type",
    filterType: 'normal', 
    options: [
      { label: "Notebooks & Journals", value: "stationery_notebooks_journals" },
      { label: "Pens & Pencils", value: "stationery_pens_pencils" },
      { label: "Markers & Highlighters", value: "stationery_markers_highlighters" },
      { label: "Diaries & Planners", value: "stationery_diaries_planners" },
      { label: "Art Supplies", value: "stationery_art_supplies" },
      { label: "Office Supplies", value: "stationery_office_supplies" }
    ]
  },
  {
    category: "Brand",
    filterType: 'normal', 
    options: [
      { label: "Moleskine", value: "brand_moleskine" },
      { label: "Parker", value: "brand_parker" },
      { label: "Faber-Castell", value: "brand_faber_castell" },
      { label: "Staedtler", value: "brand_staedtler" },
      { label: "Cambridge", value: "brand_cambridge" },
      { label: "Pilot", value: "brand_pilot" }
    ]
  }
];




const Books = () => {
  return (
    <div className="flex md:flex-row flex-col">
        <Filter>
          {
            booksAndStationeryFilters.map((filter) => 
            <CheckSection key={filter.category + '+clothingfilter'} title={filter.category} options={filter.options} filterType={filter.filterType} />
            )
          }
        </Filter>
        <SearchProducts page='electronic' />
      </div>
    )
}

export default Books