import { IAction, IAppState } from "./types";

const initialState: IAppState = {
  countries: [],
  currentCountry: null,
  hoverCountry: null,
  currentCountryWeather: null,
  currentCountryWeatherForecast: null,
  countriesError: null,
  countryWeather: null,
  countryWeatherForecast: null,
};

export function appReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case "SET_CURRENT_COUNTRY":
      return { ...state, currentCountry: action.payload };
    case "SET_HOVER_COUNTRY":
      return { ...state, hoverCountry: action.payload };
    case "GET_COUNTRIES_SUCCESS":
      return { ...state, countries: action.payload };
    case "GET_COUNTRY_WEATHER_SUCCESS":
      return { ...state, countryWeather: action.payload };
    case "GET_COUNTRY_WEATHER_FORECAST_SUCCESS":
      return { ...state, countryWeatherForecast: action.payload };
    case "GET_COUNTRIES_FAILURE":
      return { ...state, errorMessage: action.payload };
    case "GET_COUNTRY_WEATHER_FAILURE":
      return { ...state, errorMessage: action.payload };
    case "GET_COUNTRY_WEATHER_FORECAST_FAILURE":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
