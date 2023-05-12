import React from "react";
import { Route } from "../../models/route/route.model";
import { coordinateTamplate as coord } from "../../tamplate/coordinate.tamplate";

// import { Container } from './styles';

const RouteSummary: React.FC<Route> = ({
  initialCoordinate,
  packageCoordinate,
  deliveryCoordinate,
}) => {
  return (
    <div>
      {coord(initialCoordinate)} 
      {coord(packageCoordinate)}
      {coord(deliveryCoordinate)}
    </div>
  );
};

export default RouteSummary;
