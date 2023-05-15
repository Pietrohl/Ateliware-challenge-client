import Typography from "@mui/material/Typography";
import React from "react";
import { useRoutesStore } from "../../models/route/route.store";
import RouteListItem from "../RouteListItem";
import { Container } from "./styles";

const RoutesList: React.FC = () => {
  const routes = useRoutesStore((state) => state.routes);
  return (
    <Container>
      {routes.map((route, i) => (
        <RouteListItem key={i} {...route} />
      ))}
      <Typography variant="h6" component="h2" gutterBottom>
        Last calculated deliveries:
      </Typography>
    </Container>
  );
};

export default RoutesList;
