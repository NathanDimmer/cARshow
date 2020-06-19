import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Box,
  Grid,
  Container,
  Divider,
} from "@material-ui/core";
import Item from "./Item";

const App: React.FunctionComponent = () => {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        height: "100vh",
        width: "100vw",
        backgroundImage: "url(" + require("./background.jpg") + ")",
        backgroundSize: "100%",
      }}
    >
      <Grid
        container
        justify="center"
        alignItems="center"
        alignContent="center"
        style={{ height: "100vh" }}
      >
        <Grid
          item
          style={{
            backgroundColor: "#59595960",
            padding: "35px",
            borderRadius: "20px",
          }}
        >
          <Grid container direction="column">
            <Grid item style={{ marginBottom: "25px" }}>
              <Typography variant="h4" color="textPrimary">
                Dealership Sign Up
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "15px" }}>
              <TextField
                required
                id="outlined-required"
                label="Dealership Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item style={{ marginBottom: "15px" }}>
              <TextField
                required
                id="outlined-required"
                label="Address"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item style={{ marginBottom: "15px" }}>
              <TextField
                required
                id="outlined-required"
                label="Phone number"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item style={{ marginBottom: "15px" }}>
              <TextField
                required
                id="outlined-required"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item style={{ marginBottom: "15px" }}>
              <TextField
                required
                id="outlined-required"
                label="Phone number"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item>
              <Box style={{ float: "right" }}>
                <Button variant="contained">Continue</Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
