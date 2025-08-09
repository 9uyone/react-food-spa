import Grid from "@mui/material/Grid";
import { CategoryItem } from "./CategoryItem";
import { GRID_SIZE } from "../styles/constants";

export function CategoryList({ catalog = [] }) {
  return (
    <Grid container spacing={2} paddingY={3}>
      {catalog.map((item) => (
        <Grid key={item.idCategory} size={GRID_SIZE}>
          <CategoryItem {...item} />
        </Grid>
      ))}
    </Grid>
  );
}
