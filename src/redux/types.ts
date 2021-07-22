export interface IAppState {
  countries: ICountryInfo[];
  currentCountry: ICountryInfo | null;
  hoverCountry: ICountryInfo | null;
  currentCountryWeather: ICountryWeather | null;
  currentCountryWeatherForecast: ICountryWeatherForecast | null;
  countriesError: string | null;
  countryWeather: ICountryWeather | null;
  countryWeatherForecast: ICountryWeatherForecast | null;
}

export enum EActionTypes {
  SET_HOVER_COUNTRY = "SET_HOVER_COUNTRY",
  SET_CURRENT_COUNTRY = "SET_CURRENT_COUNTRY",
  GET_COUNTRIES = "GET_COUNTRIES",
  GET_COUNTRIES_SUCCESS = "GET_COUNTRIES_SUCCESS",
  GET_COUNTRIES_FAILURE = "GET_COUNTRIES_FAILURE",
  GET_COUNTRY_WEATHER = "GET_COUNTRY_WEATHER",
  GET_COUNTRY_WEATHER_SUCCESS = "GET_COUNTRY_WEATHER_SUCCESS",
  GET_COUNTRY_WEATHER_FAILURE = "GET_COUNTRY_WEATHER_FAILURE",
  GET_COUNTRY_WEATHER_FORECAST = "GET_COUNTRY_WEATHER_FORECAST",
  GET_COUNTRY_WEATHER_FORECAST_SUCCESS = "GET_COUNTRY_WEATHER_FORECAST_SUCCESS",
  GET_COUNTRY_WEATHER_FORECAST_FAILURE = "GET_COUNTRY_WEATHER_FORECAST_FAILURE",
}

export interface IWeatherCondition {
  text: string;
  icon: string;
}

export interface IWeatherInfo {
  last_updated: string;
  temp_c: number;
  temp_f: number;
  feelslike_c: number;
  feelslike_f: number;
  is_day: boolean;
  condition: IWeatherCondition;
  wind_dir: string;
  humidity: number;
  wind_kph: number;
}

export interface IWeatherForecastInfo {
  date: string;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    condition: IWeatherCondition;
  };
}

export interface ICountryInfo {
  name: string;
  capital: string;
  timezones: string[];
  flag: string;
  image: string;
}

export interface ISimpleCountryInfo {
  name: string;
  country: string;
}

export interface ICountryWeather {
  location: ISimpleCountryInfo;
  current: IWeatherInfo;
}

export interface ICountryWeatherForecast {
  location: ISimpleCountryInfo;
  forecast: IWeatherForecastInfo[];
}

export interface IAction {
  type: EActionTypes;
  payload?: any;
}

export interface ISetCurrentCountryAction extends IAction {
  type: EActionTypes.SET_CURRENT_COUNTRY;
  payload: ICountryInfo | null;
}

export interface ISetHoverCountryAction extends IAction {
  type: EActionTypes.SET_HOVER_COUNTRY;
  payload: ICountryInfo | null;
}

export interface IGetCountriesAction extends IAction {
  type: EActionTypes.GET_COUNTRIES;
}

export interface IGetCountriesSuccessAction extends IAction {
  type: EActionTypes.GET_COUNTRIES_SUCCESS;
  payload: ICountryInfo[];
}

export interface IGetCountriesFailureAction extends IAction {
  type: EActionTypes.GET_COUNTRIES_FAILURE;
  payload: string;
}

export interface IGetCountryWeatherAction extends IAction {
  type: EActionTypes.GET_COUNTRY_WEATHER;
}

export interface IGetCountryWeatherSuccessAction extends IAction {
  type: EActionTypes.GET_COUNTRY_WEATHER_SUCCESS;
  payload: ICountryWeather;
}

export interface IGetCountryWeatherFailureAction extends IAction {
  type: EActionTypes.GET_COUNTRY_WEATHER_FAILURE;
  payload: string;
}

export interface IGetCountryWeatherForecastAction extends IAction {
  type: EActionTypes.GET_COUNTRY_WEATHER_FORECAST;
}

export interface IGetCountryWeatherForecastSuccessAction extends IAction {
  type: EActionTypes.GET_COUNTRY_WEATHER_FORECAST_SUCCESS;
  payload: ICountryWeatherForecast;
}

export interface IGetCountryWeatherForecastFailureAction extends IAction {
  type: EActionTypes.GET_COUNTRY_WEATHER_FORECAST_FAILURE;
  payload: string;
}
