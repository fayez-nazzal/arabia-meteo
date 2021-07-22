import CountriesList from "./CountriesList";
import makeStyles from "@material-ui/core/styles/makeStyles";
import BackgroundImage from "./BackgroundImage";
import CountryModal from "./CountryModal";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BackgroundImage />
      <CountriesList />
      <CountryModal />
    </div>
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
