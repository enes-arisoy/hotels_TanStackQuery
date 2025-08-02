import type { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="border-b border-zinc-300 shadow-sm">
      <div className="container flex justify-between">
        <div className="flex gap-10 items-center">
          <h1 className="font-bold text-xl md:text-2xl">Tripster</h1>

          <nav className="flex gap-4 items-center">
            <Link to="/">Hotels</Link>
            <Link to="/" className="max-md:hidden">Popular</Link>
            <Link to="/admin/create">Create</Link>
          </nav>
        </div>

        <div className="flex gap-2 items-center">
          <button className="border border-blue-500 px-4 py-2 rounded-full max-md:hidden">Sign Up</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
