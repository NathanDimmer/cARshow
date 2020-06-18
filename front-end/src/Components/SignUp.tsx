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
} from "@material-ui/core";
import Item from "./Item";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Container
        style={{
          backgroundImage: "url(" + require("./background.png") + ")",
        }}
      >
        <Grid container direction="column">
          <Grid
            container
            direction="row"
            justify="center"
            style={{ marginBottom: "10px" }}
          ></Grid>
          <Grid item>
            <Typography variant="h4">Dealership Sign Up</Typography>
          </Grid>
          <Grid item>
            <TextField
              required
              id="outlined-required"
              label="Dealership Name"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="outlined-required"
              label="Address"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="outlined-required"
              label="Phone number"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="outlined-required"
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="outlined-required"
              label="Phone number"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Box style={{ float: "left" }}></Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
