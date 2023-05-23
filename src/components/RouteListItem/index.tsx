import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Slide } from "@mui/material";
import { Route } from "../../models/route/route.model";
import RouteDetails from "../RouteDetails/index";
import RouteSummary from "../RouteSummary/index";

const RouteListItem: React.FC<Route> = (route) => {
  return (
    <Slide direction="left" in={!!route.id} unmountOnExit>
      <Accordion elevation={1}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {RouteSummary(route)}
        </AccordionSummary>
        <AccordionDetails>{RouteDetails(route)}</AccordionDetails>
      </Accordion>
    </Slide>
  );
};

export default RouteListItem;
