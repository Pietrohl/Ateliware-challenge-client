import FormControl from "@mui/material/FormControl";
import Input, { InputProps } from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import React from "react";

const CoordinateInput: React.FC<InputProps> = (props) => {
  return (
    <FormControl variant="standard">
      <InputLabel htmlFor="component-simple">{props.name}</InputLabel>
      <Input {...props} />
    </FormControl>
  );
};

export default CoordinateInput;
