import { useEffect, useState, type FC } from "react";
import type { PlaceResponse, Place } from "../../types";
import api from "../../service/api";

const ListState: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Place[]>([]);

  useEffect(() => {
    setLoading(true);

    api
      .get<PlaceResponse>("/places")
      .then((res) => setData(res.data.places))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Classic State Yöntemi</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data.length > 0 && (
        <ul>
          {data.map((place) => (
            <li key={place.id}>{place.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListState;
