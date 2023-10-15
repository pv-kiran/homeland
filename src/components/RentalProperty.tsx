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
      {/* Displays the available list of rental properties */}
      <div className="property--card-container">
        {properties.map((item, index: number) => {
          return <PropertyItem key={index} {...item}></PropertyItem>;
        })}
      </div>
      {/*  showing the loader / progress spinner while fteching the data  */}
      {loading ? (
        <CircularProgress
          color="primary"
          sx={{
            height: "2rem",
            width: "2rem",
            margin: "auto",
            display: "block",
            marginBottom: "1rem",
          }}
          size=""></CircularProgress>
      ) : (
        // Showing the loadmore button once fetching is done
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
