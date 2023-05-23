import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { Page } from "./App.styles";
import Form from "./components/Form";
import { RouteMapDialog } from "./components/RouteMapDialog/index";
import RoutesList from "./components/RoutesList";
import { MapDialogProvider } from "./hooks/useMapDialog.hook";
function App() {
  return (
    <>
      <CssBaseline />
      <MapDialogProvider>
        <RouteMapDialog />
        <Page>
          <Form />
          <RoutesList />
        </Page>
      </MapDialogProvider>
    </>
  );
}

export default App;
