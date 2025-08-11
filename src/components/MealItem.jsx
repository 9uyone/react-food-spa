import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { StyledCard } from "./ui/StyledCard";

export function MealItem({ idMeal: id, strMeal: meal, strMealThumb: thumb }) {
  return (
    <StyledCard>
      <CardMedia
        sx={{
          height: 240,
        }}
        image={
          thumb
            ? thumb
            : "https://placehold.jp/00a085/ffffff/320x240.jpg?text=No%20image"
        }
        title={meal}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant='h6' component='div'>
          {meal}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='outlined'
          size='small'
          component={Link}
          to={`/meal/${id}`}
          sx={{ py: 0.8, flexGrow: 1 }}
        >
          Recipe
        </Button>
      </CardActions>
    </StyledCard>
  );
}
