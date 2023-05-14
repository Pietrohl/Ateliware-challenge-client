export type ValidationFn<T> = (value: T) => string;

export const validateCoordanate = (
  message = "Please Enter a valid coordinate"
): ValidationFn<string> => {
  return (coordinate: string) => {
    coordinate.toUpperCase();
    return /^[A-H][1-8]$/g.test(coordinate) ? "" : message;
  };
};
