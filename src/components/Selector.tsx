import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Price, Room, Purpose } from "../types/search";
interface Props {
  title: string;
  searchInput: Price[] | Room[] | Purpose[];
}

function Selector({ searchInput, title }: Props) {
  return (
    <Box>
      <FormControl fullWidth variant="filled">
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age">
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
