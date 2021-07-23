import { createTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const customBreakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 800,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
});

const theme = createTheme({
  breakpoints: {
    values: {
      ...customBreakpoints.values,
    },
  },
});

export default theme;
