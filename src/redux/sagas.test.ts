import { put, takeLatest, call, select } from "redux-saga/effects";
import { EActionTypes } from "./types";
import {
  rootSaga,
  api,
  countriesURL,
  countryWeatherURL,
  countryWeatherForecastURL,
  fetchCountriesSaga,
  fetchCountryWeatherSaga,
  fetchCountryWeatherForecastSaga,
} from "./sagas";

it("main watcher saga wait for actions then calls correct worker saga", () => {
  const generator = rootSaga();

  expect(generator.next().value).toEqual(
    takeLatest(EActionTypes.GET_COUNTRIES, fetchCountriesSaga)
  );

  expect(generator.next().value).toEqual(
    takeLatest(EActionTypes.GET_COUNTRY_WEATHER, fetchCountryWeatherSaga)
  );

  expect(generator.next().value).toEqual(
    takeLatest(
      EActionTypes.GET_COUNTRY_WEATHER_FORECAST,
      fetchCountryWeatherForecastSaga
    )
  );
});

it("correct call and action ~ countries", () => {
  const generator = fetchCountriesSaga();

  const resp = generator.next().value;

  expect(resp).toEqual(call(api, countriesURL));
  expect(generator.next().value).toEqual(
    put({ type: EActionTypes.GET_COUNTRIES_SUCCESS })
  );
});

it("correct call and action ~ country weather", () => {
  const generator = fetchCountryWeatherSaga();

  generator.next(); // for select
  const resp = generator.next().value;
  expect(resp).toEqual(call(api, countryWeatherURL("Palestine")));
  expect(generator.next().value).toEqual(
    put({ type: EActionTypes.GET_COUNTRY_WEATHER_SUCCESS })
  );
});

it("correct call and action ~ country weather forecast", () => {
  const generator = fetchCountryWeatherForecastSaga();

  generator.next(); // for select
  const resp = generator.next();

  expect(resp).toEqual(call(api, countryWeatherForecastURL("Kuwait")));
  expect(generator.next().value).toEqual(
    put({ type: EActionTypes.GET_COUNTRY_WEATHER_FORECAST_SUCCESS })
  );
});
