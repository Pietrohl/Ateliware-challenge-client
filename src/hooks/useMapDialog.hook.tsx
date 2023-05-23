import { createContext, useContext, useReducer } from "react";
import { Route } from "../models/route/route.model";

type DialogState = {
  display: boolean;
  route?: Route;
};

type DialogActions = {
  type: "DISPLAY_ROUTE" | "CLOSE_DIALOG";
  payload: {
    route?: Route;
  };
};

const initialState: DialogState = {
  display: false,
};

const reducer = (state: DialogState, action: DialogActions) => {
  switch (action.type) {
    case "DISPLAY_ROUTE":
      return {
        display: true,
        route: action.payload.route,
      };

      break;
    case "CLOSE_DIALOG":
      return {
        display: false,
      };

      break;
    default:
      return { ...state };
  }
};

const MapDialogContext = createContext<
  [DialogState, React.Dispatch<DialogActions>] | null
>(null);

const MapDialogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MapDialogContext.Provider value={[state, dispatch]}>
     {children}
    </MapDialogContext.Provider>
  );
};

const useMapDialog = () => {
  const value = useContext(MapDialogContext);

  if (!value) throw new Error("Error loadoing dialog context;");

  const [state, dispatch] = value;

  const displayRoute = (route: Route) => {
    dispatch({
      type: "DISPLAY_ROUTE",
      payload: { route },
    });
  };

  const closeDialog = () => {
    dispatch({ type: "CLOSE_DIALOG", payload: {} });
  };

  return { displayRoute, closeDialog, state };
};

export { MapDialogProvider, useMapDialog };
