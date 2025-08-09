import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { StyledCard } from "./ui/StyledCard";

export function CategoryItem({
  strCategory: category,
  strCategoryThumb: thumb,
  strCategoryDescription: desc,
}) {
  return (
    <StyledCard>
      <CardMedia
        sx={{ height: 140, justifyContent: "center" }}
        image={thumb}
        title={category}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant='h6' component='div'>
          {category}
        </Typography>
        <Typography variant='body2' sx={{ color: "text.secondary" }}>
          {desc.slice(0, 120) + "..."}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='outlined'
          size='small'
          component={Link}
          to={`/category/${category}`}
          sx={{ py: 0.8, flexGrow: 1 }}
        >
          Learn more
        </Button>
      </CardActions>
    </StyledCard>
  );
}
