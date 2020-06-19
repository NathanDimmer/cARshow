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

const App: React.FunctionComponent = () => {
  const [newProfilePicture, setNewProfilePicture] = React.useState<any>(null);

  const handleImageChange = (file: any) => {
    setNewProfilePicture(file);
  };

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
                      />
                    </Grid>
                    <Grid item style={{ marginBottom: "15px" }}>
                      <TextField
                        id="outlined-"
                        label="Car Model"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item style={{ marginBottom: "15px" }}>
                      <TextField
                        id="outlined-"
                        label="Car Year"
                        variant="outlined"
                        fullWidth
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
                      />
                    </Grid>
                  </Grid>
                </Grid>
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
    </div>
  );
};

export default App;
