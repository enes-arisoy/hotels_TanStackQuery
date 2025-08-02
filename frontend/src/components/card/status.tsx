import React, { type FC } from "react";

interface Props {
  availability: boolean;
}

const Status: FC<Props> = ({availability}) => {
  return <div>
    {availability ? <span className="bg-green-600 rounded-full px-3 py-1 text-sm text-white">Vacancy</span> : <span className="bg-red-500 text-sm text-white rounded-full px-3 py-1">Occupied</span> }
  </div>;
};

export default Status;
