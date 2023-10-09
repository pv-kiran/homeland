import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { getProperties } from "../api/propertyService";
import { Property } from "../types/property";
import { PropertyFilter } from "../types/search";
import { SelectChangeEvent } from "@mui/material/Select";

// type for the context
type RentalContext = {
  properties: Property[];
  handleFilterPorperties: (e: SelectChangeEvent) => void;
  handleLocationCahnge: (locationExternalID: number) => void;
  applyFilter: () => void;
  filterBy: PropertyFilter;
  loading: boolean;
  loadMore: () => void;
};

// type for the props of the context
type Props = {
  children: ReactNode;
};

// context creation
const rentalContext = createContext({} as RentalContext);

// custom hook for accessing the rental context
export const useRental = () => {
  return useContext(rentalContext);
};

function RentalContext({ children }: Props) {
  // state for rental properties
  const [properties, setProperties] = useState<Property[]>([]);
  // state for filteration handling
  const [filterBy, setFilterBy] = useState<PropertyFilter>({
    locationExternalID: 5002,
    roomsMin: 1,
    priceMax: 8000,
    purpose: "for-rent",
    page: 1,
  });

  // state for loading while fetching data
  const [loading, setLoading] = useState<boolean>(false);

  // fething the properties
  const fetchProperties = async (
    filterParams: PropertyFilter
  ): Promise<void> => {
    setLoading(true);
    const properties = await getProperties(filterParams);
    setProperties(properties);
    setLoading(false);
  };

  // handling pagination
  const fetchMoreProperties = async (
    filterParams: PropertyFilter
  ): Promise<void> => {
    setLoading(true);
    const properties = await getProperties(filterParams);
    setProperties((prev) => {
      return [...prev, ...properties];
    });
    setLoading(false);
  };

  // handling of filtering porperties - price , rooms and purpose
  const handleFilterPorperties = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFilterBy((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // handling of location change - for filteration
  const handleLocationCahnge = (locationExternalID: number) => {
    // change only if the location is selected (not cleared)
    if (!isNaN(locationExternalID)) {
      setFilterBy((prev) => {
        return { ...prev, locationExternalID: locationExternalID };
      });
    }
  };

  // applying the filteration on properties
  const applyFilter = () => {
    fetchProperties(filterBy);
  };

  // applying pagination
  const loadMore = () => {
    setFilterBy((prev) => {
      return { ...prev, page: prev.page + 1 };
    });
    fetchMoreProperties(filterBy);
  };

  // fetching properties on initial rendering of pages
  useEffect(() => {
    setLoading(true);
    fetchProperties(filterBy);
    setLoading(false);
  }, []);

  return (
    <rentalContext.Provider
      value={{
        properties,
        handleFilterPorperties,
        handleLocationCahnge,
        applyFilter,
        filterBy,
        loading,
        loadMore,
      }}>
      {children}
    </rentalContext.Provider>
  );
}

export default RentalContext;
