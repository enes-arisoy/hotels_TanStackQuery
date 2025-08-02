interface Place {
  id: number;
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string[];
  rating: number;
  price_per_night: number;
  availability: boolean;
  image_url: string;
}

interface CreatePlace {
  name: string;
  location: string;
  address: string;
  description: string;
  amenities: string;
  rating: string;
  price_per_night: string;
  availability: boolean;
}

interface PlacesResponse {
  message: string;
  results: number;
  places: Place[];
}

interface PlaceResponse {
  message: string;
  place: Place;
}

interface FilterParams {
  location?: string;
  title?: string;
  sort?: string;
}

export type { Place, PlacesResponse, PlaceResponse, FilterParams, CreatePlace };
