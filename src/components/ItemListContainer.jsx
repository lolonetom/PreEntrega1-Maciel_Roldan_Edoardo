import { Grid, ListItem } from "@mui/material";
import React from "react";

export default function ItemListContainer({ greeting }) {
  //! Aca traemos la prop
  // const gretting = "Bienvenido a tú tienda"; //! Esta linea esta mal, el "greeting" lo traemos de la props, en los parametros de la funcion
  return (
    <>
      <div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h1>CONTENEDOR</h1>
          <h1>{greeting}</h1>
          {
            //* Aca la usamos!
          }
        </div>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam sunt voluptatibus numquam vel
                dolor ratione, harum doloribus nostrum exercitationem mollitia sed blanditiis veritatis est deserunt.
                Minima iure fugit nostrum!
              </ListItem>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam sunt voluptatibus numquam vel
                dolor ratione, harum doloribus nostrum exercitationem mollitia sed blanditiis veritatis est deserunt.
                Minima iure fugit nostrum!
              </ListItem>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam sunt voluptatibus numquam vel
                dolor ratione, harum doloribus nostrum exercitationem mollitia sed blanditiis veritatis est deserunt.
                Minima iure fugit nostrum!
              </ListItem>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam sunt voluptatibus numquam vel
                dolor ratione, harum doloribus nostrum exercitationem mollitia sed blanditiis veritatis est deserunt.
                Minima iure fugit nostrum!
              </ListItem>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam sunt voluptatibus numquam vel
                dolor ratione, harum doloribus nostrum exercitationem mollitia sed blanditiis veritatis est deserunt.
                Minima iure fugit nostrum!
              </ListItem>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam sunt voluptatibus numquam vel
                dolor ratione, harum doloribus nostrum exercitationem mollitia sed blanditiis veritatis est deserunt.
                Minima iure fugit nostrum!
              </ListItem>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam sunt voluptatibus numquam vel
                dolor ratione, harum doloribus nostrum exercitationem mollitia sed blanditiis veritatis est deserunt.
                Minima iure fugit nostrum!
              </ListItem>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam sunt voluptatibus numquam vel
                dolor ratione, harum doloribus nostrum exercitationem mollitia sed blanditiis veritatis est deserunt.
                Minima iure fugit nostrum!
              </ListItem>
            </Grid>
            <Grid item xs={4}>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam sunt voluptatibus numquam vel
                dolor ratione, harum doloribus nostrum exercitationem mollitia sed blanditiis veritatis est deserunt.
                Minima iure fugit nostrum!
              </ListItem>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
