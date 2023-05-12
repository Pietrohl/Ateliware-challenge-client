import Button from "@mui/material/Button";
import { ChangeEvent, FormEvent } from "react";
import CoordinateInput from "../CoodinateInput";
import { FormCard, InputForm } from "./styles";

const Form = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
   event.preventDefault()
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
  };

  return (
    <>
      <FormCard elevation={3}>
        <InputForm onSubmit={handleSubmit}>
          <CoordinateInput
            name="Initial Coordinate"
            type="text"
            onChange={handleChange}
          />
          <CoordinateInput
            name="Package Coordinate"
            type="text"
            onChange={handleChange}
          />
          <CoordinateInput
            name="Delivery Coordinate"
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
