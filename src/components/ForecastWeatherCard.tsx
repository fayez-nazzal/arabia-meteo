import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";

import { IWeatherDayInfo } from "../redux/types";
import TemperatureText from "./TemperatureText";

interface PropTypes {
  weather: IWeatherDayInfo;
  date: string;
  className: string | null;
}

const CurrentWeatherCard = (props: PropTypes) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, props.className)}>
      <CardContent className={classes.content}>
        <Typography variant="body2" className={classes.dateText}>
          {props.date}
        </Typography>
        <div className={classes.tempMedia}>
          <img
            className={classes.weatherIcon}
            src={props.weather.condition.icon}
            alt="icon"
          />
          <TemperatureText temp={props.weather.maxtemp_c} />
        </div>
        <Typography variant="h6" className={classes.showSm}>
          {props.weather.condition.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CurrentWeatherCard;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    display: "flex",
    flex: "1 1 auto",
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    padding: "0 1rem",
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      padding: "1rem",
      flexDirection: "column",
    },
  },
  tempMedia: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  showSm: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  weatherIcon: {
    width: "56px",
    [theme.breakpoints.up("sm")]: {
      width: "90px",
    },
  },
  dateText: {
    flex: 1,
    [theme.breakpoints.up("sm")]: {
      flex: "none",
    },
  },
}));
