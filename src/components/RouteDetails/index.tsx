import Direct from "@mui/icons-material/East";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
import { useMapDialog } from "../../hooks/useMapDialog.hook";
import { Route } from "../../models/route/route.model";
import { coordinateTamplate as coord } from "../../tamplate/coordinate.tamplate";

const RouteDetails: React.FC<Route> = (route) => {
  const { displayRoute } = useMapDialog();

  const step = (from: string, to: string, key: number) => (
    <span style={{ display: "inline-flex" }} {...{ key }}>
      {from}&nbsp;
      <Direct fontSize="small" />
      &nbsp;{to},&nbsp;
    </span>
  );

  return (
    <>
      <Typography>
        The set delivery will have the route{" "}
        {route.path.map((coordinate, i, arr) =>
          i + 1 < arr.length
            ? step(coord(coordinate), coord(arr[i + 1]), i)
            : ""
        )}{" "}
        and will take {Math.floor(route.time).toFixed(0)} seconds to be
        delivered as fast as possible.
      </Typography>
      <IconButton aria-label="explore map" onClick={() => displayRoute(route)}>
        <TravelExploreIcon />
      </IconButton>
    </>
  );
};

export default RouteDetails;
