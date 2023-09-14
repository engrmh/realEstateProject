import Home from "@/components/modules/Home";
import React from "react";
import db from "@/data/db.json";

function Homes() {
  return (
    <>
      <div className="homes">
        {db.homes.slice(0, 6).map((item, index) => (
          <Home key={index} {...item} />
        ))}
      </div>
    </>
  );
}

export default Homes;
