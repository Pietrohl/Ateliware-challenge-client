import { useReducer } from "react";
import { validateCoordanate } from "../utils/validation";

export interface FormParameters {
  initialCoordinate: string;
  deliveryCoordinate: string;
  packageCoordinate: string;
}
interface FormState {
  values: FormParameters;
  errors: FormParameters;
}

type FormActions =
  | {
      type: "RESET_VALUE" | "VALIDATE_VALUES";
    }
  | {
      type: "UPDATE_VALUE";
      payload: {
        parameter: keyof FormParameters;
        value: string;
      };
    };

const initialFormState: FormState = {
  values: {
    initialCoordinate: "",
    deliveryCoordinate: "",
    packageCoordinate: "",
  },
  errors: {
    initialCoordinate: "",
    deliveryCoordinate: "",
    packageCoordinate: "",
  },
};

const validate = validateCoordanate("Please enter a valid coordinate");

const formReducer = (state: FormState, action: FormActions): FormState => {
  switch (action.type) {
    case "UPDATE_VALUE":
      return {
        values: {
          ...state.values,
          [action.payload.parameter]: action.payload.value,
        },
        errors: {
          ...state.errors,
          [action.payload.parameter]: validate(action.payload.value),
        },
      };
    case "RESET_VALUE":
      return initialFormState;

    case "VALIDATE_VALUES":
      return {
        ...state,
        errors: {
          initialCoordinate: validate(state.values.initialCoordinate),
          packageCoordinate: validate(state.values.packageCoordinate),
          deliveryCoordinate: validate(state.values.deliveryCoordinate),
        },
      };
    default:
      return state;
  }
};

const useNewRouteForm = () => useReducer(formReducer, initialFormState);

export { useNewRouteForm };

