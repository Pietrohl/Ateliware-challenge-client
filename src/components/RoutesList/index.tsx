import React from "react";
import { useRoutesStore } from "../../models/route/route.store";
import RouteListItem from "../RouteListItem";

// import { Container } from './styles';

const RoutesList: React.FC = () => {
  const routes = useRoutesStore((state) => state.routes).map((route) => (
    <RouteListItem {...route} />
  ));

  return <div>{routes}</div>;
};

export default RoutesList;
