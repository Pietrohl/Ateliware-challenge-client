import Dialog from "@mui/material/Dialog";
import { useMapDialog } from "../../hooks/useMapDialog.hook";
import { RouteMap } from "../RouteMap/index";

export const RouteMapDialog = () => {
  const { closeDialog, state } = useMapDialog();

  if(!state.route) return <></>

  return (
    <Dialog  open={state.display} onClose={closeDialog}>
      <RouteMap {...state.route} />
    </Dialog>
  );
};
