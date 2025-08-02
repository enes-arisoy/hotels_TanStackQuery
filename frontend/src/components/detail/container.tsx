import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface Props {
  children: ReactNode | string;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="flex mb-5">
        <Link
          to="/"
          className="border border-zinc-200 p-2 rounded-md transition hover:bg-zinc-200"
        >
          <ArrowLeft />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Container;
