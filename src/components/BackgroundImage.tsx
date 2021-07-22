import makeStyles from "@material-ui/core/styles/makeStyles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IAppState, ICountryInfo } from "../redux/types";

const BackgroundImage = () => {
  const [images, setImages] = useState<JSX.Element[]>([]);
  const classes = useStyles();
  const hoverCountry = useSelector<IAppState, ICountryInfo | null>(
    (state) => state.hoverCountry
  );

  useEffect(() => {
    if (hoverCountry) {
      setImages([
        ...images,
        <img
          className={classes.image}
          src={hoverCountry.image}
          alt={hoverCountry.name}
        />,
      ]);
    } else {
    }
  }, [hoverCountry]);

  return <>{images}</>;
};

export default BackgroundImage;

interface IStylesProps {}

const useStyles = makeStyles<never, IStylesProps>({
  image: {
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    animation: "$fadeIn 0.36s ease-in-out",
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
});