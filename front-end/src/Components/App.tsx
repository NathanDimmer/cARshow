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
} from "@material-ui/core";
import Item from "./Item";

const App: React.FunctionComponent = () => {
  const [item, setItem] = React.useState<string>("Item 1");

  const handleItemChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setItem(event.target.value as string);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">cAR Show</Typography>
        </Toolbar>
      </AppBar>
      <Box
        style={{ height: "80vh", marginLeft: "2.5%", marginRight: "2.5%" }}
      ></Box>

      <div
        style={{
          position: "absolute",
          bottom: "2",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Grid container justify="center" style={{ width: "100%" }}>
          <Grid item>
            <Typography
              variant="h4"
              style={{ marginLeft: "10px", marginRight: "1rem" }}
            >
              Car:
            </Typography>
          </Grid>
          <Grid item>
            <FormControl>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleItemChange}
                fullWidth
                value={item}
              >
                <MenuItem value={"Item1"}>Sample item</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default App;
