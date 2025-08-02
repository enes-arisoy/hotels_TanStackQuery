export const SORT_OPTIONS = [
  {
    label: "Low Price to High",
    value: "price-asc",
  },
  {
    label: "High Price to Low",
    value: "price-desc",
  },
  {
    label: "High Rating to Low",
    value: "rating-desc",
  },
  {
    label: "Low Rating to High",
    value: "rating-asc",
  },
];

export const INITIAL_VALUES = {
  name: "",
  location: "",
  address: "",
  description: "",
  amenities: "",
  rating: 0,
  price_per_night: 0,
  availability: false,
};

export const INPUT_FIELDS = [
  {
    label: "Name",
    name: "name",
    placeholder: "Seaside Villa",
  },
  {
    label: "Location",
    name: "location",
    placeholder: "Ankara",
  },
  {
    label: "Address",
    name: "address",
    placeholder: "123 Main St, Anytown",
  },
  {
    label: "Description",
    name: "description",
    placeholder: "A good villa",
  },
  {
    label: "Amenities",
    name: "amenities",
    placeholder: "Wi-Fi, TV, Klima",
  },
  {
    label: "Rating",
    name: "rating",
    placeholder: "4.5",
  },
  {
    label: "Price",
    name: "price_per_night",
    placeholder: "100",
  },
  {
    label: "Availability",
    name: "availability",
    type: "checkbox",
  },
];
