import React from "react";
import { Route } from "../../models/route/route.model";
import { coordinateTamplate as coord } from "../../tamplate/coordinate.tamplate";

// import { Container } from './styles';

const RouteDetails: React.FC<Route> = ({ path }) => {
  return <div>{path.map((coordinate) => coord(coordinate))}</div>;
};

export default RouteDetails;
