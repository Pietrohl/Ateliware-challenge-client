import { createServiceRequest } from "../../axios";
import { NewRouteDTO, NewRouteResponse } from "./route.model";

// Abstraction of service request logic
// I can be used on a redux thunk, react contextAPI, hook or on a component

const routeServiceRequest = createServiceRequest<NewRouteResponse>();

export const newRouteRequest = (body: NewRouteDTO) => {
  return routeServiceRequest("/routes", {
    method: "POST",
    body: JSON.stringify({
      body,
    }),
  });
};
