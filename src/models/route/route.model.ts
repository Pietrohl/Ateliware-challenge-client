import { Coordinate } from "../coordinate/coordinate";

export type Route = {
  initialCoordinate: Coordinate;
  packageCoordinate: Coordinate;
  deliveryCoordinate: Coordinate;
  path: Coordinate[];
};

export type NewRouteDTO = Omit<Route, "path">;

export type NewRouteResponse = {
  newRoute: Route;
};
