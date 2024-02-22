import React from "react";
import "./App.scss";
import CardComponent from "./components/cardComponent/CardComponent";
import TitleComponent from "./components/titleComponent/TitleComponent";

const App: React.FC = () => {
  return (
    <>
      <TitleComponent />

      <div className="flex justify-end md:justify-center p-4 space-x-2">
        <input
          type="search"
          placeholder="Search..."
          className="p-2 border rounded"
        />
        <button className="p-2 border rounded bg-blue-500 text-white">
          Filter
        </button>
      </div>
      <CardComponent />
    </>
  );
};

export default App;
