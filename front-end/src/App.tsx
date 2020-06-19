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
import SignUp from "./SignUp";
import Upload from "./Upload";

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Upload></Upload>
    </div>
  );
};

export default App;
