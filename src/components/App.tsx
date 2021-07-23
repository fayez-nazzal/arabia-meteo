import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import makeStyles from "@material-ui/core/styles/makeStyles";

import theme from "./Theme";
import CountriesList from "./CountriesList";
import CountryModal from "./CountryModal";
import { getCountries } from "../redux/actions";
import BackgroundImage from "./BackgroundImage";

function App() {
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());

    // eslint-disable-next-line
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <BackgroundImage />
        <CountriesList />
        <CountryModal />
      </div>
    </ThemeProvider>
  );
}

export default App;

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    maxHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: "$slideDown 1.76s ease-in-out",
    zIndex: 5,
  },
  "@keyframes slideDown": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "40%": {
      opacity: 0.3,
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
});
