import React from "react";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

interface PropTypes {
  temp: number;
}

const TemperatureText = (props: PropTypes) => {
  const classes = useStyles();

  return (
    <Typography variant="h4" className={classes.root}>
      {props.temp}
      <div className={classes.tempUnit}>
        <span>°</span>
        <Typography variant="body1" className={classes.tempUnitLetter}>
          C
        </Typography>
      </div>
    </Typography>
  );
};

export default TemperatureText;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginLeft: "-16px",

    [theme.breakpoints.up("sm")]: {
      marginLeft: "-20px",
    },
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
}));
