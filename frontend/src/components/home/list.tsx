import { type FC } from "react";
import { usePlaces } from "../../service";
import Loader from "./../loader/index";
import Error from "./../error/index";
import Card from "./../card/index";
import { useSearchParams } from "react-router-dom";
import type { FilterParams } from "../../types";

const List: FC = () => {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  const { data, isLoading, error, refetch } = usePlaces(params as FilterParams);

  if (isLoading)
    return (
      <div className="flex items-center justify-center mt-10">
        <Loader />
      </div>
    );

  if (error) return <Error info={error.message} refetch={refetch} />;

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl mb-5">Nearby Locations</h1>

      <div className="grid gap-5 mt-5">
        {!data || data?.length == 0 ? (
          <div>
            <p>No locations matching your criteria were found.</p>
          </div>
        ) : (
          data.map((item) => (
            <div>
              <Card item={item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default List;
