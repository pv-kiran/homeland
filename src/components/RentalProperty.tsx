// import { useRental } from "../context/RentalContext";

import { useRental } from "../context/RentalContext";
import PropertyItem from "./PropertyItem";

function RentalProperty() {
  // const propeties = JSON.parse(JSON.stringify(data));
  // console.log(propeties);
  const { properties, isError } = useRental();

  if (isError) {
    return (
      <div
        style={{ textAlign: "center", fontSize: "2.5rem", margin: "1rem 0" }}>
        No data avialable at the moment.. Try after sometimes ..!!
      </div>
    );
  }

  return (
    <>
      <div className="property--card-container">
        {properties.map((item, index: number) => {
          return <PropertyItem key={index} {...item}></PropertyItem>;
        })}
      </div>
    </>
  );
}

export default RentalProperty;
