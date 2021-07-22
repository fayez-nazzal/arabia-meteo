import { useDispatch, useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

import { setHoverCountry, setCurrentCountry } from "../redux/actions";
import { ICountryInfo, IAppState } from "../redux/types";

interface PropTypes {
  country: ICountryInfo;
}

const CountryCard = (props: PropTypes) => {
  const hoverCountry = useSelector<IAppState, ICountryInfo | null>(
    (state) => state.hoverCountry
  );
  const currentCountry = useSelector<IAppState, ICountryInfo | null>(
    (state) => state.currentCountry
  );

  const classes = useStyles({
    hoverCountry,
    currentCountry,
    name: props.country.name,
  });
  const dispatch = useDispatch();

  const onMouseEnter = () => {
    dispatch(setHoverCountry(props.country));
  };

  const onClick = () => {
    dispatch(setCurrentCountry(props.country));
  };

  return (
    <Card
      className={classes.root}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h5">{props.country.name}</Typography>
        </CardContent>
        <CardMedia
          className={classes.cover}
          image={props.country.flag}
          title={props.country.name}
        />
      </div>
    </Card>
  );
};

export default CountryCard;

interface IStylesProps {
  hoverCountry: ICountryInfo | null;
  currentCountry: ICountryInfo | null;
  name: string;
}

const useStyles = makeStyles<never, IStylesProps>({
  root: {
    animation: "$backdropAnimation 2s ease-in",
    display: "flex",
    height: "100px",
    backgroundColor: (props) =>
      props.hoverCountry?.name === props.name
        ? "rgba(255, 255, 255, 0.6)"
        : "rgba(255, 255, 255, 0.25)",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur(3.5px)",
    WebkitBackdropFilter: "blur(3.5px)",
    borderRadius: "10px",
    boxSizing: "border-box",
    opacity: (props) => (props.currentCountry ? 0 : 1),
    border: (props) =>
      props.hoverCountry?.name === props.name
        ? "2px solid rgba(255, 255, 255, 0.9)"
        : "2px solid rgba(255, 255, 255, 0.28)",
    zIndex: 10,
    transition: "all 0.16s ease-in",
    pointerEvents: (props) => (props.currentCountry ? "none" : "all"),
    cursor: (props) => (props.currentCountry ? "normal" : "pointer"),
  },
  details: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  content: {
    flex: "1 0 auto",
    alignSelf: "center",
  },
  cover: {
    backgroundSize: "cover",
    backgroundPositionX: "center",
    border: "none",
    borderRadius: "8px",
    width: "80px",
    margin: "0.8rem",
  },
  "@keyframes backdropAnimation": {
    "0%": {
      backdropFilter: "none",
      WebkitBackdropFilter: "none",
      pointerEvents: "none",
    },
    "99%": {
      backdropFilter: "none",
      WebkitBackdropFilter: "none",
      pointerEvents: "none",
    },
    "100%": {
      backdropFilter: "blur(3.5px)",
      WebkitBackdropFilter: "blur(3.5px)",
    },
  },
});
