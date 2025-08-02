import type { FC } from "react";
import type { Place } from "../../types";
import { Link } from "react-router-dom";
import Status from "./status";
import Rating from './rating';
 

interface Props {
  item: Place;
}

const Card: FC<Props> = ({ item }) => {
  return (
    <Link
      to={`/places/${item.id}`}
      className="border border-zinc-300 rounded-md p-4 gap-4 grid grid-cols-3 min-h-[300px] hover:shadow-md"
    >
      {/* Resim */}
      <div>
        <img
          src={item.image_url}
          alt={item.name}
          className="size-full object-cover rounded-lg"
        />
      </div>

      {/* İçerik */}
      <div className="col-span-2 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-lg">{item.name}</h1>
            <Status availability={item.availability}/>
            
          </div>

          <p>{item.location}</p>

          <div className="flex gap-4 mb-2">
            {item.amenities.slice(0, 2).map((i, key) => (
              <span className="border py-1 px-2 rounded-md border-zinc-200 text-nowrap line-clamp-1">
                {i}
              </span>
            ))}
          </div>

          <Rating rating={item.rating} expand/>
        </div>

        {/* Fiyat */}
        <div className="flex flex-col items-end">
          <span className="text-2xl font-bold">${item.price_per_night}</span>
          <span className="text-xs text-gray-400">
            Taxes and fees included.
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;