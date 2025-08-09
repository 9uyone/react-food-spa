import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api";
import { useEffect, useState } from "react";
import { Preloader } from "../components/layout/Preloader";
import { MealList } from "../components/MealList";
import { Button } from "@mui/material";
import { BackButton } from "../components/BackButton";

export function Category() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <BackButton />
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}
