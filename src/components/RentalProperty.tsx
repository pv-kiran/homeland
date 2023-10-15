// import { useRental } from "../context/RentalContext";

import { useRental } from "../context/RentalContext";
import NotFound from "./NotFound";
import PropertyItem from "./PropertyItem";
import CircularProgress from "@mui/material/CircularProgress";

function RentalProperty() {
  const { properties, isError, loadMore, loading } = useRental();

  if (isError) {
    return <NotFound />;
  }

  return (
    <>
      <div className="property--card-container">
        {properties.map((item, index: number) => {
          return <PropertyItem key={index} {...item}></PropertyItem>;
        })}
      </div>
      {loading ? (
        <CircularProgress
          color="primary"
          sx={{
            height: "2.5rem",
            width: "2.5rem",
            margin: "auto",
            display: "block",
            marginBottom: "1rem",
          }}
          size=""></CircularProgress>
      ) : (
        properties.length >= 9 && (
          <button className="btn--load" onClick={() => loadMore()}>
            Load More
          </button>
        )
      )}
    </>
  );
}

export default RentalProperty;
