import {
  AppBar,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { Fragment } from "react";

interface ShowroomProps {
  dealerName: string;
  dealerAddress: string;
  dealerEmail: string;
  dealerPhone: string;
  cars: any;
}

const Showroom: React.FunctionComponent<ShowroomProps> = ({
  dealerName,
  dealerAddress,
  dealerEmail,
  dealerPhone,
  cars,
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

  const [makes, setMakes] = React.useState<any>([]);
  const [models, setModels] = React.useState<any>([]);
  const [years, setYears] = React.useState<any>([]);

  const [makeValue, setMakeValue] = React.useState<string | null>(null);
  const [modelValue, setModelValue] = React.useState<string | null>(null);
  const [yearValue, setYearValue] = React.useState<string | null>(null);

  return (
    <Fragment>
      <AppBar
        position="sticky"
        style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
      >
        <Toolbar>
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
              if (!makes.includes(value.make)) {
                makes.push(value.make);
              }
              if (!models.includes(value.model)) {
                models.push(value.model);
              }
              if (!years.includes(value.year)) {
                years.push(value.year);
              }
            }
          )}
          <Typography variant="h5" style={{ marginRight: "auto" }}>
            {dealerName}
          </Typography>
          <Autocomplete
            value={makeValue}
            onChange={(event, newValue: string | null) => {
              setMakeValue(newValue);
            }}
            id="combo-box-demo"
            options={makes}
            getOptionLabel={(option) => option as string}
            renderInput={(params) => (
              <TextField {...params} label="Make" variant="outlined" />
            )}
          />
          <Autocomplete
            value={modelValue}
            onChange={(event, newValue: string | null) => {
              setModelValue(newValue);
            }}
            id="combo-box-demo"
            options={models}
            getOptionLabel={(option) => option as string}
            renderInput={(params) => (
              <TextField {...params} label="Model" variant="outlined" />
            )}
          />
          <Autocomplete
            value={yearValue}
            onChange={(event, newValue: string | null) => {
              setYearValue(newValue);
            }}
            id="combo-box-demo"
            options={years}
            getOptionLabel={(option) => option as string}
            renderInput={(params) => (
              <TextField {...params} label="Year" variant="outlined" />
            )}
          />
          <Typography variant="h6" style={{ marginLeft: "auto" }}>
            {dealerAddress + ", " + dealerEmail + ", " + dealerPhone}
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
                  console.log(makeValue);
                  if (
                    (value.make === makeValue || makeValue === null) &&
                    (value.model === modelValue || modelValue === null) &&
                    (value.year === yearValue || yearValue === null)
                  ) {
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

export default Showroom;
