import DroneIcon from "@mui/icons-material/DeliveryDining";
import PackageIcon from "@mui/icons-material/LocalPostOffice";
import DeliveryIcon from "@mui/icons-material/PersonPinCircle";
import React from "react";
import { Route } from "../../models/route/route.model";
import {
  Board,
  BoardSquare,
  Container,
  Line,
  LineSVG,
  ShimmerLine
} from "./styles";

const RouteMap: React.FC<Route> = (route) => {
  const index = "ABCDEFGH";

  if (!route.initialCoordinate) return "";

  const { path, deliveryCoordinate, initialCoordinate, packageCoordinate } =
    route;

  const packageCoordIndex =
    index.indexOf(packageCoordinate.xAxis) + (packageCoordinate.yAxis - 1) * 8;

  const deliveryCoodIndex =
    index.indexOf(deliveryCoordinate.xAxis) +
    (deliveryCoordinate.yAxis - 1) * 8;

  const droneCoordIndex =
    index.indexOf(initialCoordinate.xAxis) + (initialCoordinate.yAxis - 1) * 8;

  const square = (number: number) => {
    return (
      <BoardSquare
        key={number}
        id={(Math.floor(number / 8) + number) % 2 === 0 ? "even" : "odd"}
      >
        {packageCoordIndex === number && <PackageIcon />}
        {deliveryCoodIndex === number && <DeliveryIcon />}
        {droneCoordIndex === number && <DroneIcon />}
      </BoardSquare>
    );
  };

  const divPositions = path.map(({ xAxis, yAxis }) => ({
    x: index.indexOf(xAxis) * 50 * (7 / 8) + 25,
    y: (yAxis - 1) * 50 * (7 / 8) + 25,
  }));

  const pathData = divPositions
    .map((divIndex) => `${divIndex.x},${divIndex.y}`)
    .join(" ");

  return (
    <Container>
      <Board>
        {Array(64)
          .fill({})
          .map((_, i) => square(i))}
        <LineSVG>
          <Line points={pathData} />
          <ShimmerLine points={pathData} />
        </LineSVG>
      </Board>
    </Container>
  );
};

export { RouteMap };
