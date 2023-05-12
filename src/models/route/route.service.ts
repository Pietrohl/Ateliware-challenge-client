import { createServiceRequest } from "../../axios";
import { NewRouteDTO, NewRouteResponse, Route } from "./route.model";

// Abstraction of service request logic
// I can be used on a redux thunk, react contextAPI, hook or on a component

const routeServiceRequest = createServiceRequest();

export const newRouteRequest = (body: NewRouteDTO) => {
  return routeServiceRequest<NewRouteResponse>("/routes", {
    method: "POST",
    body: JSON.stringify({
      body,
    }),
  });
};

export const routeListRequest = async () => {
  return routeServiceRequest<Route[]>("/routes", { method: "GET" });
};
