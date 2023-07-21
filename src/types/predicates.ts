import { RouteData } from './route';

function isRouteData(object: unknown): object is RouteData {
  return (
    typeof object === 'object' &&
    object !== null &&
    'code' in object &&
    'routes' in object &&
    'waypoints' in object
  );
}

export { isRouteData };
