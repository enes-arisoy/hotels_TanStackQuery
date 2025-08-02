import type { FC } from "react";

import "../../frontend/src/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/detail/index";
import Home from "./pages/home/index";
import Create from "./pages/create/index";
import Header from './components/header/index';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-1 container my-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/places/:id" element={<Detail />} />
            <Route path="/admin/create" element={<Create />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
