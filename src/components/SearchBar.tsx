import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";

// input array for the select element
import Selector from "./Selector";
import {
  priceRentInput,
  priceSaleInput,
  purposeInput,
  roomInput,
} from "../constant/searchInput";
import { getLocations } from "../api/propertyService";
import { useEffect, useState } from "react";
import { Location } from "../types/search";
import { useRental } from "../context/RentalContext";

function SearchBar() {
  // state for location
  const [location, setLocation] = useState<Location[]>([]);

  // for setting the filteration properties
  const { handleLocationCahnge, applyFilter, loading, filterBy } = useRental();

  // fetching the available locations
  const fetchLocations = async (): Promise<void> => {
    const location = await getLocations();
    setLocation(location);
  };

  useEffect(() => {
    fetchLocations();
  }, []);
  return (
    <section className="search--section">
      <Autocomplete
        id="combo-box-demo"
        options={location}
        onChange={(_e, newValue) => {
          handleLocationCahnge(Number(newValue?.externalID));
        }}
        renderInput={(params) => (
          <TextField {...params} label="Location" variant="filled" />
        )}
      />
      <Selector
        title={"Purpose"}
        name={"purpose"}
        searchInput={purposeInput}
        value={filterBy?.purpose}></Selector>
      <Selector
        title={"Price"}
        name={"priceMax"}
        searchInput={
          filterBy?.purpose === "for-rent" ? priceRentInput : priceSaleInput
        }
        value={filterBy.priceMax}></Selector>
      <Selector
        title={"Number of Rooms"}
        name={"roomsMax"}
        searchInput={roomInput}
        value={filterBy?.roomsMax}></Selector>
      <button
        className="btn--search"
        onClick={() => applyFilter()}
        disabled={loading}>
        {loading ? (
          <CircularProgress
            style={{ width: "2rem", height: "2rem", color: "#fff" }}
          />
        ) : (
          <SearchIcon sx={{ fontSize: "1.75rem" }} />
        )}
      </button>
    </section>
  );
}

export default SearchBar;
