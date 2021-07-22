import {
  EActionTypes,
  ICountryInfo,
  ICountryWeather,
  ICountryWeatherForecast,
  ISetCurrentCountryAction,
  ISetHoverCountryAction,
  IGetCountriesAction,
  IGetCountriesSuccessAction,
  IGetCountriesFailureAction,
  IGetCountryWeatherAction,
  IGetCountryWeatherSuccessAction,
  IGetCountryWeatherFailureAction,
  IGetCountryWeatherForecastAction,
  IGetCountryWeatherForecastSuccessAction,
  IGetCountryWeatherForecastFailureAction,
} from "./types";

export function setCurrentCountry(
  country: ICountryInfo | null
): ISetCurrentCountryAction {
  return {
    type: EActionTypes.SET_CURRENT_COUNTRY,
    payload: country,
  };
}

export function setHoverCountry(
  country: ICountryInfo | null
): ISetHoverCountryAction {
  return {
    type: EActionTypes.SET_HOVER_COUNTRY,
    payload: country,
  };
}

export function getCountries(): IGetCountriesAction {
  return {
    type: EActionTypes.GET_COUNTRIES,
  };
}

export function getCoutnriesSuccess(
  countries: ICountryInfo[]
): IGetCountriesSuccessAction {
  return {
    type: EActionTypes.GET_COUNTRIES_SUCCESS,
    payload: countries,
  };
}

export function getCountriesFailure(
  message: string
): IGetCountriesFailureAction {
  return {
    type: EActionTypes.GET_COUNTRIES_FAILURE,
    payload: message,
  };
}

export function getCountryWeatherForecast(): IGetCountryWeatherAction {
  return {
    type: EActionTypes.GET_COUNTRY_WEATHER,
  };
}

export function getCountryWeatherSuccess(
  countryWeather: ICountryWeather
): IGetCountryWeatherSuccessAction {
  return {
    type: EActionTypes.GET_COUNTRY_WEATHER_SUCCESS,
    payload: countryWeather,
  };
}

export function getCountryWeatherFailure(
  message: string
): IGetCountryWeatherFailureAction {
  return {
    type: EActionTypes.GET_COUNTRY_WEATHER_FAILURE,
    payload: message,
  };
}

export function getCountryWeather(): IGetCountryWeatherAction {
  return {
    type: EActionTypes.GET_COUNTRY_WEATHER,
  };
}

export function getCountryWeatherForecastSuccess(
  countryWeather: ICountryWeatherForecast
): IGetCountryWeatherForecastSuccessAction {
  return {
    type: EActionTypes.GET_COUNTRY_WEATHER_FORECAST_SUCCESS,
    payload: countryWeather,
  };
}

export function getCountryWeatherForecastFailure(
  message: string
): IGetCountryWeatherForecastFailureAction {
  return {
    type: EActionTypes.GET_COUNTRY_WEATHER_FORECAST_FAILURE,
    payload: message,
  };
}
