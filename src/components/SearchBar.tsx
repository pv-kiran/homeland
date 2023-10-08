import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import SearchIcon from "@mui/icons-material/Search";

// input array for the select element
import Selector from "./Selector";
import { priceInput, purposeInput, roomInput } from "../constant/searchInput";
// import { getLocations } from "../api/rentalService";
import { useEffect, useState } from "react";
// import { Location } from "../types/search";

function SearchBar() {
  const [location, setLocation] = useState<Location[]>([]);
  // const fetchLocations = async (): Promise<void> => {
  //   const location = await getLocations();
  //   console.log(location);
  //   setLocation(location);
  // };
  // useEffect(() => {
  //   fetchLocations();
  // }, []);
  return (
    <section className="search--section">
      <Autocomplete
        id="combo-box-demo"
        options={location}
        renderInput={(params) => (
          <TextField {...params} label="Location" variant="filled" />
        )}
      />
      <Selector title={"Purpose"} searchInput={purposeInput}></Selector>
      <Selector title={"Price"} searchInput={priceInput}></Selector>
      <Selector title={"Room"} searchInput={roomInput}></Selector>
      <button className="btn--search">
        <SearchIcon sx={{ fontSize: "1.75rem" }} />
      </button>
    </section>
  );
}

export default SearchBar;
