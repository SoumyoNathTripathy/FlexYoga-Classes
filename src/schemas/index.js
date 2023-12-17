import * as yup from "yup";



export const advancedSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
    preferredBatch: yup
    .string()
    .oneOf(["6-7AM", "7-8AM", "8-9AM", "5-6PM"], "Invalid Time")
    .required("Required"),
  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
  age: yup.number()
    .typeError('Age must be a number')
    .min(18, 'Age must be at least 18 years old')
    .max(65, 'Age must be at most 65 years old')
    .required('Age is required'),
  email: yup.string().email("Please enter a valid email").required("Required"),
});
