import React from "react";
import { useLoaderData } from "react-router-dom";
import Toys from "./Toys";

const AllToys = () => {
  const toys = useLoaderData();
  console.log(toys);
  return (
    <div>
      <h2>all toys</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {toys.map((toy) => (
          <Toys key={toy.toyId} toy={toy}></Toys>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
