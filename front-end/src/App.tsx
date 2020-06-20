import React, { Fragment } from "react";
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
import Manage from "./Manage";

export enum PAGES {
  "SIGNUP",
  "UPLOAD",
  "MANAGE",
}

const App: React.FunctionComponent = () => {
  const [dealerName, setDealerName] = React.useState("");
  const [dealerAddress, setDealerAddress] = React.useState("");
  const [dealerPhone, setDealerPhone] = React.useState("");

  const [cars, setCars] = React.useState([]);

  const [page, setPage] = React.useState(PAGES.MANAGE);

  return (
    <Fragment>
      {page === PAGES.SIGNUP && (
        <SignUp
          dealerName={dealerName}
          dealerAddress={dealerAddress}
          dealerPhone={dealerPhone}
          cars={cars}
          page={page}
          setDealerName={setDealerName}
          setDealerAddress={setDealerAddress}
          setDealerPhone={setDealerPhone}
          setCars={setCars}
          setPage={setPage}
        ></SignUp>
      )}
      {page === PAGES.UPLOAD && (
        <Upload
          dealerName={dealerName}
          dealerAddress={dealerAddress}
          dealerPhone={dealerPhone}
          cars={cars}
          page={page}
          setDealerName={setDealerName}
          setDealerAddress={setDealerAddress}
          setDealerPhone={setDealerPhone}
          setCars={setCars}
          setPage={setPage}
        ></Upload>
      )}
      {page === PAGES.MANAGE && (
        <Manage
          dealerName={dealerName}
          dealerAddress={dealerAddress}
          dealerPhone={dealerPhone}
          cars={cars}
          page={page}
          setDealerName={setDealerName}
          setDealerAddress={setDealerAddress}
          setDealerPhone={setDealerPhone}
          setCars={setCars}
          setPage={setPage}
        ></Manage>
      )}
    </Fragment>
  );
};

export default App;
