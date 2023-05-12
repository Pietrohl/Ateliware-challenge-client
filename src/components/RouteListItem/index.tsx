import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import React from "react";
import { Route } from "../../models/route/route.model";
import RouteDetails from "../RouteDetails";
import RouteSummary from "../RouteSummary";

const RouteListItem: React.FC<Route> = (route) => {
  return (
    <Accordion>
      <AccordionSummary id={route.id?.toString() ?? "1"}>
        {RouteSummary(route)}
      </AccordionSummary>
      <AccordionDetails>{RouteDetails(route)}</AccordionDetails>
    </Accordion>
  );
};

export default RouteListItem;
