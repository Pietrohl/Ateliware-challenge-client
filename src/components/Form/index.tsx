import Button from "@mui/material/Button";
import { ChangeEvent, FormEvent } from "react";
import { useRoutesStore } from "../../models/route/route.store";
import CoordinateInput from "../CoodinateInput";
import { FormCard, InputForm } from "./styles";

const Form = () => {
  console.log("render");

  const calculateNewRoute = useRoutesStore((state) => state.calculateNewRoute);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    
    for (const [key, value] of data.entries()) {
      console.log(key, value);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <FormCard elevation={3}>
        <InputForm onSubmit={handleSubmit}>
          <CoordinateInput
            label="Initial Coordinate"
            type="text"
            onChange={handleChange}
            id="initial"
            name="initial"
          />
          <CoordinateInput
            name="package"
            label="Package Coordinate"
            type="text"
            onChange={handleChange}
          />
          <CoordinateInput
            name="delivery"
            label="Delivery Coordinate"
            type="text"
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
