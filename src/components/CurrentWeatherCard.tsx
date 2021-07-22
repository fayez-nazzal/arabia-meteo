import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { IWeatherInfo } from "../redux/types";
import clsx from "clsx";
import TemperatureText from "./TemperatureText";

interface PropTypes {
  weather: IWeatherInfo;
  className: string | null;
}

const CurrentWeatherCard = (props: PropTypes) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, props.className)}>
      <CardContent className={classes.content}>
        <div className={classes.media}>
          <Typography variant="body1">Last update</Typography>
          <Typography variant="body2">{props.weather.last_updated}</Typography>
          <div className={classes.tempMedia}>
            <img width="140px" src={props.weather.condition.icon} alt="icon" />
            <TemperatureText temp={props.weather.temp_c} />
          </div>
          <Typography variant="h5">{props.weather.condition.text}</Typography>
        </div>
        <div className={classes.info}>
          <div className={classes.infoLine}>
            <Typography variant="h6">Feels Like</Typography>
            <Typography variant="body1" className={classes.infoLineValue}>
              {props.weather.feelslike_c}°C
            </Typography>
          </div>
          <hr className={classes.hr} />
          <div className={classes.infoLine}>
            <Typography variant="h6">Wind Direction</Typography>
            <Typography variant="body1" className={classes.infoLineValue}>
              {props.weather.wind_dir}
            </Typography>
          </div>
          <hr className={classes.hr} />
          <div className={classes.infoLine}>
            <Typography variant="h6">Wind Speed</Typography>
            <Typography variant="body1" className={classes.infoLineValue}>
              {props.weather.wind_kph} KPH
            </Typography>
          </div>
          <hr className={classes.hr} />
          <div className={classes.infoLine}>
            <Typography variant="h6">Humidity</Typography>
            <Typography variant="body1" className={classes.infoLineValue}>
              {props.weather.humidity}
            </Typography>
          </div>
        </div>
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
  },
  media: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  tempMedia: {
    display: "flex",
    alignItems: "center",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "28px",
    paddingLeft: "28px",
    borderLeft: "1px solid #777777",
  },
  infoLine: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoLineValue: {
    marginLeft: "140px",
  },
  hr: {
    marginLeft: "0",
    marginRight: "0",
    border: 0,
    height: "1px",
    background: "#777",
    backgroundImage: "linear-gradient(to right, #bbb, #777, #bbb)",
  },
});
