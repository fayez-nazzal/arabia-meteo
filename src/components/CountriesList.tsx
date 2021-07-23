import { useSelector } from "react-redux";
import { ICountryInfo, IAppState } from "../redux/types";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CountryCard from "./CountryCard";

function CountriesList() {
  const classes = useStyles();
  const countries = useSelector<IAppState, ICountryInfo[]>(
    (state) => state.countries
  );

  return (
    <Grid container spacing={3} className={classes.root}>
      {countries.map((country) => (
        <Grid item xs={4} md={3} key={country.name} className={classes.root}>
          <CountryCard country={country} key={country.name} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CountriesList;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1.4rem",
    boxSizing: "border-box",
    overflowY: "auto",
  },
}));
