import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import { PAGES } from "./App";
import { NotificationMessage } from "./Misc/Notifications";
import { createDealership } from "./Scripts/firebaseCreateDealership";

interface SignUpProps {
  dealerName: string;
  dealerAddress: string;
  dealerEmail: string;
  dealerPhone: string;
  setDealerName: Function;
  setDealerAddress: Function;
  setDealerEmail: Function;
  setDealerPhone: Function;
  setPage: Function;
  setNotification: (notification: NotificationMessage) => void;
}

const SignUp: React.FunctionComponent<SignUpProps> = ({
  dealerName,
  dealerAddress,
  dealerEmail,
  dealerPhone,
  setDealerName,
  setDealerAddress,
  setDealerEmail,
  setDealerPhone,
  setPage,
  setNotification,
}) => {
  const [password, setPassword] = React.useState<string>("");
  const [password2, setPassword2] = React.useState<string>("");

  const handleCreateAccount = () => {
    if (password === password2) {
      createDealership(
        dealerName,
        dealerAddress,
        dealerEmail,
        dealerPhone,
        password
      ).then((result) => {
        if (result) {
          setNotification({
            type: "success",
            message: "New Dealership Account Created Successfully.",
            open: true,
          });
          setPage(PAGES.UPLOAD);
        } else {
          setNotification({
            type: "error",
            message: "Unable to create account. Please try again later.",
            open: true,
          });
        }
      });
    } else {
      setNotification({
        type: "error",
        message: "Unable to create account. Passwords do not match.",
        open: true,
      });
    }
  };

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
                onChange={(event) => {
                  setDealerEmail(event.target.value);
                }}
              />
            </Grid>
            <Grid item style={{ marginBottom: "15px" }}>
              <TextField
                id="outlined-"
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </Grid>
            <Grid item style={{ marginBottom: "15px" }}>
              <TextField
                id="outlined-"
                label="Confirm Password"
                variant="outlined"
                fullWidth
                type="password"
                onChange={(event) => {
                  setPassword2(event.target.value);
                }}
              />
            </Grid>
            <Grid item>
              <Box style={{ float: "right" }}>
                <Button variant="contained" onClick={handleCreateAccount}>
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
