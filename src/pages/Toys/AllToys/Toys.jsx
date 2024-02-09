import React from "react";
import { Link } from "react-router-dom";

const Toys = ({ toy }) => {
  const { img, brand, name, price, toyId } = toy;
  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="toys" className="w-72 h-52 mt-4 " />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>Brand: {brand}</p>
          <p>Price: ${price}</p>

          <div className="card-actions justify-end">
            <button className="badge badge-outline">View Details</button>
            <Link to={`/addatoys/${toyId}`} className="badge badge-outline">
              Add to card
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toys;
