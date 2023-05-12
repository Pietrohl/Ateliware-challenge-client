import Button from "@mui/material/Button";
import { ChangeEvent, FormEvent } from "react";
import CoordinateInput from "./CoordinateInput";

const Form = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {};

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <br />
        <Button variant="contained" type="submit">
          Calculate fastest route!
        </Button>
      </form>
    </>
  );
};
export default Form;
