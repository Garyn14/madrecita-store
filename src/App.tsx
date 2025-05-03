import { useState } from "react"
import MainContainer from "./components/MainContainer"
import ProductList from "./components/ProductList"
import "./App.css"

function App() {
  interface PageInteraction {
    searchProduct: string
    categorySelected: number
  }

  const [pageInteraction, setPageInteraction] = useState<PageInteraction>({
    searchProduct: "",
    categorySelected: 0
  })

  const handleSearch = (searchTerm: string) => {
    setPageInteraction(prev => ({
      ...prev,
      searchProduct: searchTerm
    }));
  };

  const handleCategorySelect = (categoryId: number) => {
    setPageInteraction(prev => ({
      ...prev,
      categorySelected: categoryId
    }));
  };

  return (
    <MainContainer 
      onSearch={handleSearch} 
      onCategorySelect={handleCategorySelect}
      selectedCategory={pageInteraction.categorySelected}
    >
      <ProductList 
        searchTerm={pageInteraction.searchProduct}
        selectedCategory={pageInteraction.categorySelected}
      />
    </MainContainer>
  )
}

export default App