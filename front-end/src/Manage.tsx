import {
  AppBar,
  Dialog,
  DialogContent,
  DialogTitle,
  Fab,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { Fragment } from "react";
import { PAGES } from "./App";

interface ManageProps {
  dealerName: string;
  cars: any;
  setPage: Function;
}

const Manage: React.FunctionComponent<ManageProps> = ({
  dealerName,
  cars,
  setPage,
}) => {
  const [newProfilePicture, setNewProfilePicture] = React.useState<any>(null);

  const handleImageChange = (file: any) => {
    setNewProfilePicture(file);
  };

  console.log(dealerName);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [currentCar, setCurrentCar] = React.useState({
    make: "",
    model: "",
    year: "",
    image: "",
    file: "",
    info: "",
  });

  return (
    <Fragment>
      <AppBar
        position="sticky"
        style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
      >
        <Toolbar>
          <Typography variant="h5" style={{ marginRight: "auto" }}>
            {dealerName}
          </Typography>
          <Typography
            variant="h6"
            onClick={() => {
              window.location.href = `${
                window.location.href
              }?dealership=${encodeURI(dealerName.replace(/ /g, ""))}`;
            }}
          >
            {"https://carshowroomar.web.app?dealership=" +
              encodeURI(dealerName.replace(/ /g, ""))}
          </Typography>
        </Toolbar>
      </AppBar>
      <div
        style={{
          backgroundColor: "#000000",
          minHeight: "100vh",
          width: "100%",
          overflowX: "hidden",
          backgroundImage: "url(" + require("./carbon.png") + ")",
        }}
      >
        <div
          style={{
            backgroundColor: "#00000090",
            minHeight: "100vh",
            width: "100%",
            overflowX: "hidden",
          }}
        >
          <Fab
            aria-label="add"
            style={{
              backgroundColor: "#59595970",
              margin: 0,
              top: "auto",
              right: 40,
              bottom: 40,
              left: "auto",
              position: "fixed",
            }}
            color="secondary"
            size="large"
            onClick={() => {
              setPage(PAGES.UPLOAD);
            }}
          >
            <AddIcon />
          </Fab>
          <div style={{ width: "90%", marginLeft: "5%" }}>
            <Grid container direction="row" spacing={4}>
              {/* <Grid item xs={12} sm={6} md={4} style={{ marginTop: "20px" }}>
                <div
                  style={{
                    backgroundColor: "#59595950",
                    paddingBottom: "15px",
                    borderRadius: "20px",
                  }}
                >
                  <img
                    src="../../Assets/Images/1 - Lamborghini Gallardo 2010.jpg"
                    width="100%"
                    style={{ borderRadius: "20px" }}
                  ></img>
                  <Typography
                    variant="h6"
                    style={{ paddingLeft: "10px" }}
                    color="textPrimary"
                  >
                    Car
                  </Typography>
                </div>
              </Grid> */}
              {cars.map(
                (
                  value: {
                    make: string;
                    model: string;
                    year: string;
                    image: string;
                    file: string;
                    info: string;
                  },
                  index: any
                ) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      style={{ marginTop: "20px" }}
                    >
                      <div
                        style={{
                          backgroundColor: "#59595950",
                          paddingBottom: "15px",
                          borderRadius: "20px",
                        }}
                        onClick={() => {
                          setCurrentCar(value);
                          handleClickOpen();
                        }}
                      >
                        <img
                          src={value.image}
                          width="100%"
                          style={{ borderRadius: "20px" }}
                        ></img>
                        <Typography
                          variant="h6"
                          style={{ paddingLeft: "10px" }}
                          color="textPrimary"
                        >
                          {value.make + " " + value.model + ", " + value.year}
                        </Typography>
                      </div>
                    </Grid>
                  );
                }
              )}
            </Grid>
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle id="alert-dialog-title">
          {currentCar.make + " " + currentCar.model + ", " + currentCar.year}
        </DialogTitle>
        <DialogContent>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12} md={6}>
              <a href={currentCar.file} rel="ar">
                <img
                  src={currentCar.image}
                  style={{ width: "100%", borderRadius: "20px" }}
                ></img>
              </a>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5">
                {currentCar.make +
                  " " +
                  currentCar.model +
                  ", " +
                  currentCar.year}
              </Typography>
              <Typography variant="body1">{currentCar.info}</Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default Manage;
