import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { ICountryInfo, IWeatherInfo } from "../redux/types";

interface PropTypes {
  country: ICountryInfo;
  weather: IWeatherInfo;
}

const CurrentWeatherCard = (props: PropTypes) => {
  const classes = useStyles({
    country: props.country,
  });

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <div className={classes.media}>
          <Typography variant="body1">Last update</Typography>
          <Typography variant="body2">{props.weather.last_updated}</Typography>
          <div className={classes.tempMedia}>
            <img width="140px" src={props.weather.condition.icon} alt="icon" />
            <Typography variant="h3" className={classes.tempText}>
              {props.weather.temp_c}
              <div className={classes.tempUnit}>
                <span>°</span>
                <Typography variant="body1" className={classes.tempUnitLetter}>
                  C
                </Typography>
              </div>
            </Typography>
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

interface IStylesProps {
  country: ICountryInfo;
}

const useStyles = makeStyles<never, IStylesProps>({
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
  tempText: {
    display: "flex",
    marginLeft: "-24px",
  },
  tempUnit: {
    display: "flex",
    flexDirection: "column",
  },
  tempUnitLetter: {
    marginTop: "-30px",
    marginLeft: "2px",
    fontSize: "20px",
    color: "#777777",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "12px",
    paddingLeft: "12px",
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
