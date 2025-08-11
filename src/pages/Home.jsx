import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import { Search } from "../components/Search";
import { Preloader } from "../components/layout/Preloader";
import { CategoryList } from "../components/CategoryList";

export function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  // Завантаження каталогу (один раз)
  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(data.categories);
    });
  }, []);

  // Обробка пошуку
  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      setFilteredCatalog(
        catalog.filter((item) =>
          item.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else setFilteredCatalog(catalog);
  };

  return (
    <>
      {!catalog.length ? (
        <Preloader />
      ) : (
        <>
          <Search callback={handleSearch} />
          <CategoryList catalog={filteredCatalog} />
        </>
      )}
    </>
  );
}
