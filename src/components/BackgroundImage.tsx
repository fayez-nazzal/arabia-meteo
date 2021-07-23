import { useEffect, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { v4 as uuid } from "uuid";
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
          key={uuid()}
          alt={hoverCountry.name}
        />,
      ]);
    }

    // eslint-disable-next-line
  }, [hoverCountry]);

  useEffect(() => {
    if (images.length > 10) {
      const imagesClone = [...images];
      imagesClone.splice(0, 1);
      setImages([...imagesClone]);
      console.log(imagesClone.length);
    }
  }, [images]);

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
    width: "100vw",
    height: "100vh",
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
