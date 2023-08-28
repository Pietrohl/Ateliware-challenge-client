import { Coordinate } from "../models/coordinate/coordinate.model";

export const coordinateTamplate = ({ x: xAxis, y: yAxis }: Coordinate): string =>
  `${xAxis}${yAxis}`;
