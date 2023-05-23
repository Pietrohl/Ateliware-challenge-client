import { Coordinate } from "../coordinate/coordinate.model";

export type Route = {
  initialCoordinate: Coordinate;
  packageCoordinate: Coordinate;
  deliveryCoordinate: Coordinate;
  path: Coordinate[];
  time: number;
};

export type NewRouteDTO = Omit<Route, "path" | "id" | "time">;

export type NewRouteResponse = {
  newRoute: Route;
};
