import React, { Fragment } from "react";
import Manage from "./Manage";
import Showroom from "./Showroom";
import SignUp from "./SignUp";
import Upload from "./Upload";
import NotificationBar, { NotificationMessage } from "./Misc/Notifications";
import { updateCars } from "./Scripts/firebaseUpdateCars";
import { getCars } from "./Scripts/firebaseGetCars";

export enum PAGES {
  "SIGNUP",
  "UPLOAD",
  "MANAGE",
  "SHOWROOM",
}

const App: React.FunctionComponent = () => {
  const [dealerName, setDealerName] = React.useState("");
  const [dealerAddress, setDealerAddress] = React.useState("");
  const [dealerEmail, setDealerEmail] = React.useState("");
  const [dealerPhone, setDealerPhone] = React.useState("");

  const [cars, setCars] = React.useState([]);

  const [page, setPage] = React.useState(PAGES.SIGNUP);

  const [notification, setNotification] = React.useState<NotificationMessage>({
    type: "info",
    message: "",
    open: false,
  });

  const [loaded, setLoaded] = React.useState<boolean>(false);

  const updateAndSetCars = (cars: any) => {
    updateCars(dealerName, cars)
      .then((value) => {
        if (value) {
          setCars(cars);
          setNotification({
            type: "success",
            message: "Car Listings Updated Successfully.",
            open: true,
          });
        } else {
          setNotification({
            type: "error",
            message: "Unable to update car listings. Please try again later.",
            open: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setNotification({
          type: "error",
          message: "Unable to update car listings. Please try again later.",
          open: true,
        });
      });
  };

  if (!loaded && window.location.href.indexOf("?dealership=") > 0) {
    setLoaded(true);
    getCars(
      window.location.href.substring(
        window.location.href.indexOf("?dealership=") + "?dealership=".length,
        window.location.href.length
      )
    )
      .then((data) => {
        if (data) {
          setCars(data.cars);
          setDealerName(data.name);
          setDealerAddress(data.address);
          setDealerEmail(data.email);
          setDealerPhone(data.phone);
          setPage(PAGES.SHOWROOM);
        } else {
          setNotification({
            type: "warning",
            message: "Unable to get car listings. Please try again later.",
            open: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setNotification({
          type: "warning",
          message: "Unable to get car listings. Please try again later.",
          open: true,
        });
      });
  }

  return (
    <Fragment>
      {page === PAGES.SIGNUP && (
        <SignUp
          dealerName={dealerName}
          dealerAddress={dealerAddress}
          dealerEmail={dealerEmail}
          dealerPhone={dealerPhone}
          setDealerName={setDealerName}
          setDealerAddress={setDealerAddress}
          setDealerEmail={setDealerEmail}
          setDealerPhone={setDealerPhone}
          setPage={setPage}
          setNotification={setNotification}
        />
      )}
      {page === PAGES.UPLOAD && (
        <Upload
          cars={cars}
          setCars={updateAndSetCars}
          setPage={setPage}
          setNotification={setNotification}
        />
      )}
      {page === PAGES.MANAGE && (
        <Manage dealerName={dealerName} cars={cars} setPage={setPage} />
      )}

      {page === PAGES.SHOWROOM && (
        <Showroom
          dealerName={dealerName}
          dealerAddress={dealerAddress}
          dealerEmail={dealerEmail}
          dealerPhone={dealerPhone}
          cars={cars}
        ></Showroom>
      )}
      <NotificationBar
        notification={notification}
        setNotification={setNotification}
      />
    </Fragment>
  );
};

export default App;
