import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Slide from "@mui/material/Slide";
import React from "react";
import { Route } from "../../models/route/route.model";
import RouteDetails from "../RouteDetails";
import RouteSummary from "../RouteSummary";



const RouteListItem: React.FC<Route> = (route) => {
  return (
    <Slide direction="left" in={!!route.id}  unmountOnExit>
      <Accordion elevation={1}>
        <AccordionSummary
          id={route.id.toString()}
          expandIcon={<ExpandMoreIcon />}
        >
          {RouteSummary(route)}
        </AccordionSummary>
        <AccordionDetails>{RouteDetails(route)}</AccordionDetails>
      </Accordion>
    </Slide>
  );
};

export default RouteListItem;
