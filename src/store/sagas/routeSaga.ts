import { PayloadAction } from '@reduxjs/toolkit';
import { LatLngLiteral } from 'leaflet';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchRoutesReject,
  fetchRoutesRequest,
  fetchRoutesSuccess,
} from '../reducers/routeReducer';
import { getFastestRoute } from '@/api/routeApi';
import { isRouteData } from '@/types/predicates';
import { Request } from '@/types/request';

function* handleSetSelectedRoute(action: PayloadAction<Request>) {
  try {
    const { firstPoint, secondPoint, thirdPoint } = action.payload;

    const coordinates: LatLngLiteral[] = [
      { lat: firstPoint.lat, lng: firstPoint.lng },
      { lat: secondPoint.lat, lng: secondPoint.lng },
      { lat: thirdPoint.lat, lng: thirdPoint.lng },
    ];

    const data: unknown = yield call(getFastestRoute, coordinates, [
      'overview=full',
      'geometries=geojson',
    ]);

    if (!isRouteData(data)) {
      throw new Error('Invalid route data');
    }

    yield put(fetchRoutesSuccess(data.routes));
  } catch (error) {
    if (error instanceof Error) {
      const { message } = error;
      yield put(fetchRoutesReject(message));
    }
  }
}

function* watchSetSelectedRoute() {
  yield takeLatest(fetchRoutesRequest.type, handleSetSelectedRoute);
}

function* routeSaga() {
  yield watchSetSelectedRoute();
}

export { routeSaga };
