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
import { PAGES } from "./App";

interface PageProps {
  dealerName: string;
  dealerAddress: string;
  dealerPhone: string;
  cars: Array<object>;
  page: PAGES;
  setDealerName: Function;
  setDealerAddress: Function;
  setDealerPhone: Function;
  setCars: Function;
  setPage: Function;
}

const SignUp: React.FunctionComponent<PageProps> = ({
  dealerName,
  dealerAddress,
  dealerPhone,
  cars,
  page,
  setDealerName,
  setDealerAddress,
  setDealerPhone,
  setCars,
  setPage,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        height: "100vh",
        width: "100vw",
        backgroundImage: "url(" + require("./background.jpg") + ")",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
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
                id="outlined-"
                label="Dealership Name"
                variant="outlined"
                fullWidth
                onChange={(event) => {
                  setDealerName(event.target.value);
                }}
              />
            </Grid>
            <Grid item style={{ marginBottom: "15px" }}>
              <TextField
                id="outlined-"
                label="Address"
                variant="outlined"
                fullWidth
                onChange={(event) => {
                  setDealerAddress(event.target.value);
                }}
              />
            </Grid>
            <Grid item style={{ marginBottom: "15px" }}>
              <TextField
                id="outlined-"
                label="Phone number"
                variant="outlined"
                fullWidth
                onChange={(event) => {
                  setDealerPhone(event.target.value);
                }}
              />
            </Grid>
            <Grid item style={{ marginBottom: "15px" }}>
              <TextField
                id="outlined-"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item style={{ marginBottom: "15px" }}>
              <TextField
                id="outlined-"
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
              />
            </Grid>
            <Grid item>
              <Box style={{ float: "right" }}>
                <Button
                  variant="contained"
                  onClick={() => {
                    setPage(PAGES.UPLOAD);
                  }}
                >
                  Continue
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
