import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../api";
import { Preloader } from "../components/layout/Preloader";

import {
  Button,
  Container,
  Typography,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import { BackButton } from "../components/BackButton";

export function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      <BackButton />

      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <Container>
          <Typography variant='h4' gutterBottom>
            {recipe.strMeal}
          </Typography>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            style={{
              display: "block",
              maxWidth: "100%",
              maxHeight: 450,
              marginBottom: "16px",
            }}
          />
          <Typography variant='body1'>
            Category: <i>{recipe.strCategory}</i>
          </Typography>

          {recipe.strArea && (
            <Typography variant='body1' sx={{ mt: 0.5 }}>
              Area: <i>{recipe.strArea}</i>
            </Typography>
          )}

          <Typography color='textSecondary' sx={{ mt: 1.5 }}>
            {recipe.strInstructions}
          </Typography>

          <TableContainer component={Paper} sx={{ mt: 2.5 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>Ingredient</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Measure</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(recipe).map((key) => {
                  if (key.includes("Ingredient") && recipe[key]) {
                    return (
                      <TableRow key={key}>
                        <TableCell>{recipe[key]}</TableCell>
                        <TableCell>
                          {recipe[`strMeasure${key.slice(13)}`]}
                        </TableCell>
                      </TableRow>
                    );
                  }
                })}
              </TableBody>
            </Table>
          </TableContainer>

          {recipe.strYoutube && (
            <>
              <Typography variant='h6' sx={{ margin: "1.5rem 0 0.5rem" }}>
                Video recipe
              </Typography>
              <iframe
                width='480'
                height='320'
                style={{ maxWidth: "100%", border: 0 }}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.substr(
                  -11
                )}`}
                allowFullScreen
                title='Video recipe'
              ></iframe>
            </>
          )}
        </Container>
      )}
    </>
  );
}
