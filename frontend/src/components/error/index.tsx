import { type FC } from "react";

interface Props {
  info: string;
  refetch: () => void;
}

const Error: FC<Props> = ({ info, refetch }) => {
  return (
    <div className="mt-10">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-2xl font-bold">Oops! Something went wrong.. </h1>
        <p className="text-red-500">{info}</p>
        <button
          onClick={refetch}
          className="rounded bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Error;
