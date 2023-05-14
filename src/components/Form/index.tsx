import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ChangeEvent, FormEvent } from "react";
import {
  useNewRouteForm,
  type FormParameters,
} from "../../hooks/useNewRouteForm";
import { NewRouteDTO } from "../../models/route/route.model";
import { useRoutesStore } from "../../models/route/route.store";
import CoordinateInput from "../CoodinateInput";
import { FormCard, InputForm } from "./styles";

const Form = () => {
  const [formState, dispatch] = useNewRouteForm();
  const calculateNewRoute = useRoutesStore((state) => state.calculateNewRoute);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { values, errors } = formState;

    if (Object.values(errors).join("") || Object.values(values).includes(""))
      return dispatch({ type: "VALIDATE_VALUES" });

    const body: NewRouteDTO = {
      initialCoordinate: {
        xAxis: values.initialCoordinate[0],
        yAxis: Number(values.initialCoordinate[1]),
      },
      packageCoordinate: {
        xAxis: values.packageCoordinate[0],
        yAxis: Number(values.packageCoordinate[1]),
      },
      deliveryCoordinate: {
        xAxis: values.deliveryCoordinate[0],
        yAxis: Number(values.deliveryCoordinate[1]),
      },
    };

    calculateNewRoute(body).then(() => dispatch({ type: "RESET_VALUE" }));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value, name } = event.target;
    dispatch({
      type: "UPDATE_VALUE",
      payload: {
        value,
        parameter: name as keyof FormParameters,
      },
    });
  };

  return (
    <>
      <FormCard elevation={3}>
        <Typography variant="h3" component="h1" gutterBottom>
          Amazonia
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Input the coordinates:
        </Typography>
        <InputForm onSubmit={handleSubmit}>
          <CoordinateInput
            label="Initial Coordinate"
            type="text"
            onChange={handleChange}
            id="initial"
            value={formState.values.initialCoordinate}
            errorMessage={formState.errors.initialCoordinate}
            name="initialCoordinate"
          />
          <CoordinateInput
            name="packageCoordinate"
            label="Package Coordinate"
            type="text"
            value={formState.values.packageCoordinate}
            errorMessage={formState.errors.packageCoordinate}
            onChange={handleChange}
          />
          <CoordinateInput
            name="deliveryCoordinate"
            label="Delivery Coordinate"
            type="text"
            value={formState.values.deliveryCoordinate}
            errorMessage={formState.errors.deliveryCoordinate}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Calculate fastest route!
          </Button>
        </InputForm>
      </FormCard>
    </>
  );
};
export default Form;
