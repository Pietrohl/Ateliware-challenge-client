import React from "react";
import { Route } from "../../models/route/route.model";
import { coordinateTamplate as coord } from "../../tamplate/coordinate.tamplate";

// import { Container } from './styles';

const RouteSummary: React.FC<Route> = ({
  initialCoordinate,
  packageCoordinate,
  deliveryCoordinate,
  time,
}) => {
  return (
    <div>
      From <strong>{coord(initialCoordinate)}</strong>, picking-up to{" "}
      <strong>{coord(packageCoordinate)}</strong> and delivery to{" "}
      <strong>{coord(deliveryCoordinate)}</strong> in{" "}
      <strong>{Math.floor(time / 1000).toFixed(0)} seconds.</strong>
    </div>
  );
};

export default RouteSummary;
