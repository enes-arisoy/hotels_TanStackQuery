import * as yup from "yup";

// validation rules for form fields
// defining necessary conditions for data from the form to be valid
export const PLACE_SCHEMA = yup.object().shape({
  name: yup
    .string()
    .required("Name field is required")
    .min(3, "Name field must be at least 3 characters")
    .max(40, "Name field must be at most 40 characters")
    .matches(/^[\p{L}\s]+$/u, {
      message: "Name field can only contain letters and spaces",
    }),
  location: yup
    .string()
    .required("Location field is required")
    .min(3, "Location field must be at least 3 characters")
    .max(40, "Location field must be at most 40 characters")
    .matches(/^[\p{L}\s]+$/u, {
      message: "Location field can only contain letters and spaces",
    }),
  address: yup
    .string()
    .required("Address field is required")
    .min(3, "Address field must be at least 3 characters")
    .max(40, "Address field must be at most 40 characters"),
  description: yup
    .string()
    .required("Description field is required")
    .min(10, "Description field must be at least 10 characters")
    .max(200, "Description field must be at most 200 characters"),
  amenities: yup
    .string()
    .required("Amenities field is required")
    .min(3, "Amenities field must be at least 3 characters")
    .max(80, "Amenities field must be at most 80 characters"),
  rating: yup
    .number()
    .required("Rating field is required")
    .min(1, "Rating field must be at least 1")
    .max(5, "Rating field must be at most 5"),
  price_per_night: yup
    .number()
    .required("Price field is required")
    .min(1, "Price field must be at least 1")
    .max(99999, "Price field must be at most 99999"),

  availability: yup.boolean().required("Availability field is required"),
});