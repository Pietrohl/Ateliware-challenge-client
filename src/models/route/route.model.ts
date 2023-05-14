import { Coordinate } from "../coordinate/coordinate.model";

export type Route = {
  id: number;
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
