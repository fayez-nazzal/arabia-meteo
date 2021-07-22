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
        <Typography variant="body1">Date</Typography>
        <Typography variant="body2">{props.date}</Typography>
        <div className={classes.tempMedia}>
          <img width="90px" src={props.weather.condition.icon} alt="icon" />
          <TemperatureText temp={props.weather.maxtemp_c} />
        </div>
        <Typography variant="h6">{props.weather.condition.text}</Typography>
      </CardContent>
    </Card>
  );
};

export default CurrentWeatherCard;

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  content: {
    display: "flex",
    flex: "1 1 auto",
    backgroundColor: "#f9f9f9",
    flexDirection: "column",
    alignItems: "center",
  },
  tempMedia: {
    display: "flex",
    alignItems: "center",
  },
});
