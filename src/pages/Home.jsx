import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import { Search } from "../components/Search";
import { Preloader } from "../components/layout/Preloader";
import { CategoryList } from "../components/CategoryList";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

export function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str) => {
    navigate({
      search: `?search=${str}`,
    });
  };

  // Завантаження каталогу (один раз)
  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);

  // Фільтрація при зміні каталогу або пошукового запиту
  useEffect(() => {
    if (catalog.length) {
      if (search) {
        const searchTerm = search.split("=")[1];
        setFilteredCatalog(
          catalog.filter((item) =>
            item.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      } else {
        setFilteredCatalog(catalog);
      }
    }
  }, [catalog, search]);

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
