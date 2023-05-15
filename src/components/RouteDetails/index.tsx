import Direct from "@mui/icons-material/East";
import Typography from "@mui/material/Typography";
import React from "react";
import { Route } from "../../models/route/route.model";
import { coordinateTamplate as coord } from "../../tamplate/coordinate.tamplate";

const RouteDetails: React.FC<Route> = ({ path, time }) => {
  const step = (from: string, to: string, key: number) => (
    <span style={{ display: "inline-flex" }} {...{ key }}>
      {from}&nbsp;
      <Direct fontSize="small" />
      &nbsp;{to},&nbsp;
    </span>
  );

  return (
    <Typography>
      The set delivery will have the route{" "}
      {path.map((coordinate, i, arr) =>
        i + 1 < arr.length ? step(coord(coordinate), coord(arr[i + 1]), i) : ""
      )}{" "}
      and will take {Math.floor(time).toFixed(0)} seconds to be delivered as
      fast as possible.
    </Typography>
  );
};

export default RouteDetails;
