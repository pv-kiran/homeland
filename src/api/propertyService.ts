import { axiosRapidAPIInstance } from "./axiosInstance";
import { Location } from "../types/search";

// call to fetch availble locations
const getLocations = async (): Promise<Location[]> => {
  const { data } = await axiosRapidAPIInstance.get(
    `/auto-complete?query=${"uae"}`
  );
  const location = data?.hits.map(
    (item: { name: string; externalID: number }) => {
      return {
        label: item?.name,
        externalID: item?.externalID,
      };
    }
  );
  return location;
};

export { getLocations };
