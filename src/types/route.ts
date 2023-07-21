interface Leg {
  steps: unknown[];
  summary: string;
  weight: number;
  duration: number;
  distance: number;
}

type Coordinate = [number, number];

interface Geometry {
  coordinates: Coordinate[];
  type: string;
}

interface Route {
  geometry: Geometry;
  legs: Leg[];
  weight_name: string;
  weight: number;
  duration: number;
  distance: number;
}

interface Waypoint {
  hint: string;
  dispatch: number;
  name: string;
  location: [number, number];
}

interface RouteData {
  code: string;
  routes: Route[];
  waypoints: Waypoint[];
}

export type { RouteData, Route, Coordinate };
