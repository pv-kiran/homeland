import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Price, Room, Purpose } from "../types/search";
import { useRental } from "../context/RentalContext";

interface Props {
  title: string;
  name: string;
  searchInput: Price[] | Room[] | Purpose[];
  value: number | string;
}

function Selector({ searchInput, title, name, value }: Props) {
  const { handleFilterPorperties } = useRental();

  return (
    <Box>
      <FormControl fullWidth variant="filled">
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          name={name}
          value={`${value}`}
          onChange={(e: SelectChangeEvent) => {
            handleFilterPorperties(e);
          }}>
          {searchInput.map((input, index) => {
            return (
              <MenuItem key={index} value={input.value}>
                {input.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Selector;
