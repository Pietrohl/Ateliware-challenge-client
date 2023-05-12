import Button from "@mui/material/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import CoordinateInput from "./CoordinateInput";

const Form = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent) => {};

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <CoordinateInput
          name="Initial Coordinate"
          type="text"
          onChange={handleChange}
          value={message}
        />
        <CoordinateInput
          name="Package Coordinate"
          type="text"
          onChange={handleChange}
          value={message}
        />
        <CoordinateInput
          name="Delivery Coordinate"
          type="text"
          onChange={handleChange}
          value={message}
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
