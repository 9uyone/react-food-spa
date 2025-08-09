import Grid from "@mui/material/Grid";
import { MealItem } from "./MealItem";
import { GRID_SIZE } from "../styles/constants";

export function MealList({ meals = [] }) {
  return (
    <Grid container spacing={2} paddingY={1}>
      {meals.map((item) => (
        <Grid key={item.idMeal} size={GRID_SIZE}>
          <MealItem {...item} />
        </Grid>
      ))}
    </Grid>
  );
}
