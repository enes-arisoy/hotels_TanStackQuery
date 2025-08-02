import type { FC } from "react";
import { useDeletePlace, usePlaces } from "../../service";
import type { Place } from "../../types";

const { data, isLoading, error, refetch } = usePlaces();
const { mutate, isPending, } = useDeletePlace();

const ListQuery: FC = () => {
  return (
    <div>
      <h1>Query State</h1>
      {isLoading && <p>Loading...</p>}
      {error && (
        <div>
          <p>Error: {error.message}</p>
          <button onClick={() => refetch()}>ReTry</button>
        </div>
      )}
      <ul>
        {data?.map((place) => (
          <li key={place.id}>
            {place.name}
            <button
              disabled={isPending}
              onClick={() => {
                mutate(place.id);
              }}
            >
              {isPending ? "Deleting" : "Delete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListQuery;
