import { create } from "zustand";
import { NewRouteDTO, Route } from "./route.model";
import { newRouteRequest, routeListRequest } from "./route.service";

// Choosing zustand for small footprint

type RoutesState = {
  routes: Route[];
  calculateNewRoute: (newRoute: NewRouteDTO) => Promise<void>;
  fetchRoutes: () => void;
};

export const useRoutesStore = create<RoutesState>((set) => ({
  routes: [],
  calculateNewRoute: async (coordinates: NewRouteDTO) => {
    const { newRoute } = await newRouteRequest(coordinates);
    

    set((state) => ({ routes: [...state.routes, newRoute] }));
  },
  fetchRoutes: async () => {
    set({ routes: await routeListRequest() });
  },
}));

// Initializing store

routeListRequest().then((routes) => useRoutesStore.setState({ routes }));
