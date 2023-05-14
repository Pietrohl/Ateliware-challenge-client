import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { Page } from "./App.styles";
import Form from "./components/Form";
import RoutesList from "./components/RoutesList";
function App() {
  return (
    <>
      <CssBaseline />
      <Page>
        <Form />
        <RoutesList />
      </Page>
    </>
  );
}

export default App;
