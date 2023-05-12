import FormControl from "@mui/material/FormControl";
import Input, { InputProps } from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import React from "react";

export type CoordinateInputProps = InputProps & {
  label: string;
};

const CoordinateInput: React.FC<CoordinateInputProps> = (props) => {
  return (
    <FormControl variant="standard">
      <InputLabel htmlFor="component-simple">{props.label}</InputLabel>
      <Input {...props} />
    </FormControl>
  );
};

export default CoordinateInput;
