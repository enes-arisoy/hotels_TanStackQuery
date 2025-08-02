import { type FC } from "react";
import type { Place } from "../../types";
import Rating from "../card/rating";

interface Props {
  place: Place;
}
const Info: FC<Props> = ({ place }) => {
  return (
    <>
      <div className="flex my-6 items-center justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">{place.name}</h1>
          <p className="text-zinc-600">{place.description}</p>
        </div>

        <div className="text-nowrap">
          <Rating rating={place.rating} expand />
        </div>
      </div>

      <div>
        <div className="border-b border-zinc-300 pb-2 flex gap-6 text-zinc-500">
          <span className="text-blue-500 cursor-pointer">General</span>
          <span className="cursor-pointer">Rooms</span>
          <span className="cursor-pointer">Features</span>
          <span className="cursor-pointer">Rules</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 mt-5">
          <div>
            <h1 className="text-xl font-semibold mb-2">Amenities</h1>

            <div className="grid grid-cols-2 gap-5">
              {place.amenities.map((feature) => (
                <span
                  key={feature}
                  className="border border-gray-300 rounded-md p-2 line-clamp-1"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <iframe
            width="450"
            height="250"
            src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyAkbGS-d71NrPUBCmsDbzlkAvfOTzjbp1M&q=${place.location}`}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Info;
