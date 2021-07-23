import { useLayoutEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useDispatch, useSelector } from "react-redux";
import {
  IAppState,
  ICountryInfo,
  ICountryWeather,
  ICountryWeatherForecast,
} from "../redux/types";
import {
  setCurrentCountry,
  getCountryWeather,
  getCountryWeatherForecast,
} from "../redux/actions";
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastWeatherCard from "./ForecastWeatherCard";
import clsx from "clsx";

const CountryModal = () => {
  const dispatch = useDispatch();
  const currentCountry = useSelector<IAppState, ICountryInfo | null>(
    (state) => state.currentCountry
  );
  const countryWeather = useSelector<IAppState, ICountryWeather | null>(
    (state) => state.countryWeather
  );
  const [open, setOpen] = useState(false);
  const countryWeatherForecast = useSelector<
    IAppState,
    ICountryWeatherForecast | null
  >((state) => state.countryWeatherForecast);
  const classes = useStyles();

  useLayoutEffect(() => {
    if (currentCountry) {
      dispatch(getCountryWeather());
      dispatch(getCountryWeatherForecast());
      setOpen(true);
    } else {
      handleClose();
    }
  }, [currentCountry]);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      dispatch(setCurrentCountry(null));
    }, 350);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Typography variant="h3">
            <div className={classes.flexCenter}>
              {currentCountry && currentCountry.name} -
              <span className={classes.inlineText}>
                {currentCountry && currentCountry.capital}
              </span>
            </div>
          </Typography>
          <hr className={classes.hr} />
          <Typography variant="h5" className={classes.mt}>
            Current weather
          </Typography>
          {countryWeather !== null && (
            <CurrentWeatherCard
              weather={countryWeather!.current}
              className={classes.currentCard}
            />
          )}
          <Typography variant="h5" className={clsx(classes.mt, classes.mb)}>
            3 Day Forecast
          </Typography>
          <div className={classes.forecastCards}>
            {currentCountry !== null &&
              countryWeatherForecast !== null &&
              countryWeatherForecast.forecast.forecastday.map((day) => (
                <ForecastWeatherCard
                  className={classes.forecastItem}
                  date={day.date}
                  key={`forecast-${currentCountry!.name}-${day.date}`}
                  weather={day.day}
                />
              ))}
          </div>
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
    color: "white !important",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    animation: "$backdropAnimation 2s ease-in",
    backgroundColor: "rgba(232, 232, 232, 0.4)",
    backdropFilter: "blur(2.5px)",
    WebkitBackdropFilter: "blur(2.5px)",
    boxSizing: "border-box",
    outline: "none !important",
    zIndex: 10,
    transition: "all 0.16s ease-in",
    height: "100vh",
    width: "100vw",
    [theme.breakpoints.up("sm")]: {
      height: "auto",
      width: "auto",
      padding: "1.5em",
      border: "3px solid rgba(232, 232, 232, 0.38)",
      borderRadius: "10px",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    },
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  weatherHeader: {
    margin: "0.5rem",
  },
  currentCard: {
    margin: "1rem",
  },
  forecastCards: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  forecastItem: {
    width: "280px",
    margin: "0.5rem",
    flex: 1,
    [theme.breakpoints.up("sm")]: {
      margin: "1rem",
      width: "230px",
    },
  },
  inlineText: {
    fontSize: "22px",
    marginLeft: "8px",
    transform: "translateY(3px)",
  },
  hr: {
    marginLeft: "0",
    marginRight: "0",
    border: 0,
    height: 1,
    width: "100%",
    background: "#fff",
    backgroundImage:
      "linear-gradient(to right, rgba(232, 232, 232,0.1), rgb(232, 232, 232), rgba(232, 232, 232,0.1))",
  },
  mt: {
    marginTop: "0.2rem",
  },
  mb: {
    marginBottom: "0.5rem",
  },
}));
