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
import { DropzoneArea } from "material-ui-dropzone";
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

const Upload: React.FunctionComponent<PageProps> = ({
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
  const [newProfilePicture, setNewProfilePicture] = React.useState<any>(null);

  const handleImageChange = (file: any) => {
    setNewProfilePicture(file);
  };

  const [make, setMake] = React.useState("");
  const [model, setModel] = React.useState("");
  const [year, setYear] = React.useState("");
  const [info, setInfo] = React.useState("");

  const carImages = [
    "../../Assets/Images/1 - Lamborghini Gallardo 2010.jpg",
    "../../Assets/Images/2- Lamborghini Aventador J 2017.jpg",
    "../../Assets/Images/3- Lamborghini Aventador SV 2017.jpg",
    "../../Assets/Images/4- Marussia B2 2014.jpg",
    "../../Assets/Images/5- Ferrari 458 Italia 2009.jpg",
    "../../Assets/Images/6- Aston Martin DB9 2016.jpg",
  ];
  const carFiles = [
    "../../Assets/Files/Lamborghini_Gallardo_2010.usdz",
    "../../Assets/Files/Lamborghini_Aventador_J.usdz",
    "../../Assets/Files/Lamborghini_Aventador.usdz",
    "../../Assets/Files/Marussia_B2.usdz",
    "../../Assets/Files/Ferrari_458_Italia.usdz",
    "../../Assets/Files/Aston_Martin_DB9.usdz",
  ];

  return (
    <div
      style={{
        backgroundColor: "#000000",
        height: "100vh",
        width: "100vw",
        backgroundImage: "url(" + require("./carbon.png") + ")",
      }}
    >
      <div style={{ backgroundColor: "#00000090" }}>
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
              backgroundColor: "#59595950",
              padding: "35px",
              borderRadius: "20px",
            }}
          >
            <Grid container direction="column">
              <Grid item style={{ marginBottom: "25px" }}>
                <Typography variant="h4" color="textPrimary">
                  Upload Cars
                </Typography>
              </Grid>
              <Grid container direction="row" spacing={4}>
                <Grid item xs={12} md={6}>
                  {" "}
                  <DropzoneArea
                    acceptedFiles={["*"]}
                    filesLimit={1}
                    maxFileSize={2000000}
                    dropzoneText="Either drag and drop an image file here or click here to upload an image from your device."
                    showAlerts={false}
                    onDrop={(files: any[]) => {
                      handleImageChange(files[0]);
                    }}
                    onDelete={(files: any) => {
                      handleImageChange(null);
                    }}
                  ></DropzoneArea>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid direction="column">
                    <Grid item style={{ marginBottom: "15px" }}>
                      <TextField
                        id="outlined-"
                        label="Car Make"
                        variant="outlined"
                        fullWidth
                        onChange={(event) => {
                          setMake(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item style={{ marginBottom: "15px" }}>
                      <TextField
                        id="outlined-"
                        label="Car Model"
                        variant="outlined"
                        fullWidth
                        onChange={(event) => {
                          setModel(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item style={{ marginBottom: "15px" }}>
                      <TextField
                        id="outlined-"
                        label="Car Year"
                        variant="outlined"
                        fullWidth
                        onChange={(event) => {
                          setYear(event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item style={{ marginBottom: "15px" }}>
                      <TextField
                        id="outlined-"
                        label="Extra Info"
                        variant="outlined"
                        fullWidth
                        multiline
                        rowsMax={5}
                        onChange={(event) => {
                          setInfo(event.target.value);
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Box style={{ float: "right" }}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      let newCars = cars.slice();

                      newCars.push({
                        make: make,
                        model: model,
                        year: year,
                        info: info,
                        image: carImages[newCars.length],
                        file: carFiles[newCars.length],
                      });
                      setCars(newCars);
                      setPage(PAGES.MANAGE);
                      console.log(newCars);
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
    </div>
  );
};

export default Upload;
