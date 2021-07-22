import { call, put, select, takeLatest } from "redux-saga/effects";
import {
  getCoutnriesSuccess,
  getCountriesFailure,
  getCountryWeatherSuccess,
  getCountryWeatherFailure,
  getCountryWeatherForecastSuccess,
  getCountryWeatherForecastFailure,
} from "./actions";
import {
  EActionTypes,
  IAppState,
  ICountryInfo,
  ICountryWeather,
  ICountryWeatherForecast,
} from "./types";

export const countriesURL = "http://localhost:4000/api/countries";
export const countryWeatherURL = (countryName: string) =>
  `https://api.weatherapi.com/v1/current.json?key=a9d0564f306040bf89c71006211507&q=${countryName}&aqi=no`;
export const countryWeatherForecastURL = (countryName: string) =>
  `https://api.weatherapi.com/v1/forecast.json?key=a9d0564f306040bf89c71006211507&q=${countryName}&days=3&aqi=no&alerts=no`;

export async function api<T>(url: string): Promise<T> {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export function* fetchCountriesSaga() {
  try {
    const countries: ICountryInfo[] = yield call(api, countriesURL);
    yield put(getCoutnriesSuccess(countries));
  } catch (error) {
    yield put(getCountriesFailure("Fetching countries failed"));
  }
}

const currentCountrySelector = (state: IAppState) =>
  state.currentCountry as ICountryInfo;

export function* fetchCountryWeatherSaga() {
  try {
    const country: ReturnType<typeof currentCountrySelector> = yield select(
      currentCountrySelector
    );
    const weather: ICountryWeather = yield call(
      api,
      countryWeatherURL(country.capital)
    );
    yield put(getCountryWeatherSuccess(weather));
  } catch (error) {
    yield put(getCountryWeatherFailure("Fetching country weather failed"));
  }
}

export function* fetchCountryWeatherForecastSaga() {
  try {
    const country: ReturnType<typeof currentCountrySelector> = yield select(
      currentCountrySelector
    );

    const weatherForecast: ICountryWeatherForecast = yield call(
      api,
      countryWeatherForecastURL(
        country.name === "Yemen"
          ? `${country.name} ${country.capital}`
          : country.capital
      )
    );
    yield put(getCountryWeatherForecastSuccess(weatherForecast));
  } catch (error) {
    yield put(
      getCountryWeatherForecastFailure("Fetching country weather failed")
    );
  }
}

export function* rootSaga() {
  yield takeLatest(EActionTypes.GET_COUNTRIES, fetchCountriesSaga);
  yield takeLatest(EActionTypes.GET_COUNTRY_WEATHER, fetchCountryWeatherSaga);
  yield takeLatest(
    EActionTypes.GET_COUNTRY_WEATHER_FORECAST,
    fetchCountryWeatherForecastSaga
  );
}
