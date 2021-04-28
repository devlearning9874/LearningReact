import React from "react";
import Cars from "./Cars"

const PropsDemo = () => {
  const cars = [
    "Aston Martin",
    "Audi",
    " BMW ",
    "Jaguar",
    "Lamborghini",
    " Land Rover ",
    " Lexus",
    "Maserati",
  ];

  return <div>
      <hr />
      <h1>Cars List</h1>
       <Cars  cars={cars} />
  </div>;
};

export default PropsDemo