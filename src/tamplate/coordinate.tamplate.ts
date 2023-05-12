import { Coordinate } from "../models/coordinate/coordinate";

export const coordinateTamplate = ({ xAxis, yAxis }: Coordinate): string =>
  `${xAxis}${yAxis}`;
