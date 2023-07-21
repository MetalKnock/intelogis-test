const API_BASE = `http://router.project-osrm.org`;

const API_VERSION = 'v1';

enum ApiService {
  route = 'route',
  nearest = 'nearest',
  table = 'table',
  match = 'match',
  trip = 'trip',
  tile = 'tile',
}

enum ApiProfile {
  car = 'car',
  bike = 'foot',
  foot = 'foot',
  driving = 'driving',
}

export { API_BASE, API_VERSION, ApiService, ApiProfile };
