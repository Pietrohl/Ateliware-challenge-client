import { Coordinate } from "../models/coordinate/coordinate.model";

export const coordinateTamplate = ({ xAxis, yAxis }: Coordinate): string =>
  `${xAxis}${yAxis}`;
