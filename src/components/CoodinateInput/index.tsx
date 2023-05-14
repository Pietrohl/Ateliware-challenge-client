import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import Input, { OutlinedInputProps } from "@mui/material/OutlinedInput";
import React from "react";

export type CoordinateInputProps = OutlinedInputProps & {
  label: string;
  errorMessage: string;
};

const CoordinateInput: React.FC<CoordinateInputProps> = ({
  errorMessage,
  label,
  ...props
}) => {
  return (
    <FormControl error={!!errorMessage}>
      <InputLabel>{label}</InputLabel>
      <Input {...props} label={label} />
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
};

export default CoordinateInput;
