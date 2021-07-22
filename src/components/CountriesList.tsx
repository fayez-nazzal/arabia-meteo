import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../redux/actions";
import { ICountryInfo, IAppState } from "../redux/types";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CountryCard from "./CountryCard";

function CountriesList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const countries = useSelector<IAppState, ICountryInfo[]>(
    (state) => state.countries
  );

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <Grid container spacing={0} className={classes.root}>
      {countries.map((country) => (
        <Grid item xs={3} key={country.name} className={classes.root}>
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
  },
}));
