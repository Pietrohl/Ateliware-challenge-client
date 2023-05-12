import { Coordinate } from "../coordinate/coordinate";

export type Route = {
  id: number;
  initialCoordinate: Coordinate;
  packageCoordinate: Coordinate;
  deliveryCoordinate: Coordinate;
  path: Coordinate[];
};

export type NewRouteDTO = Omit<Route, "path">;

export type NewRouteResponse = {
  newRoute: Route;
};
