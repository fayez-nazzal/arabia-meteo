import React, { useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useDispatch, useSelector } from "react-redux";
import { IAppState, ICountryInfo, ICountryWeather } from "../redux/types";
import { setCurrentCountry, getCountryWeather } from "../redux/actions";
import CurrentWeatherCard from "./CurrentWeatherCard";

const CountryModal = () => {
  const dispatch = useDispatch();
  const currentCountry = useSelector<IAppState, ICountryInfo | null>(
    (state) => state.currentCountry
  );
  const countryWeather = useSelector<IAppState, ICountryWeather | null>(
    (state) => state.countryWeather
  );
  const classes = useStyles();

  useLayoutEffect(() => {
    if (currentCountry) {
      dispatch(getCountryWeather());
    }
  }, [currentCountry]);

  const handleClose = () => {
    dispatch(setCurrentCountry(null));
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={currentCountry !== null}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={currentCountry !== null && countryWeather !== null}>
        <div className={classes.paper}>
          <Typography variant="h2">
            {currentCountry && currentCountry.name}
          </Typography>
          <Typography variant="h5">
            {currentCountry && currentCountry.capital}
          </Typography>
          {currentCountry !== null && countryWeather !== null && (
            <CurrentWeatherCard
              weather={countryWeather!.current}
              country={currentCountry!}
            />
          )}
        </div>
      </Fade>
    </Modal>
  );
};

export default CountryModal;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    animation: "$backdropAnimation 2s ease-in",
    padding: "1.5em",
    height: "60vh",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur(3.5px)",
    WebkitBackdropFilter: "blur(3.5px)",
    borderRadius: "10px",
    boxSizing: "border-box",
    border: "3px solid rgba(255, 255, 255, 0.38)",
    outline: "none !important",
    zIndex: 10,
    transition: "all 0.16s ease-in",
  },
  weatherHeader: {
    margin: "0.5rem",
  },
}));
