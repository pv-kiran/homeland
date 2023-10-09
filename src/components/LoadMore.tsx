import { useRental } from "../context/RentalContext";
import CircularProgress from "@mui/material/CircularProgress";

function LoadMore() {
  const { loading, loadMore } = useRental();

  return (
    <>
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
        <button className="btn--load" onClick={() => loadMore()}>
          Load More
        </button>
      )}
    </>
  );
}

export default LoadMore;
