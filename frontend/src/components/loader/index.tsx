import { type FC } from "react";

const Loader: FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="size-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
