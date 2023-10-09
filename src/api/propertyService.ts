import { axiosRapidAPIInstance } from "./axiosInstance";
import { Location, PropertyFilter } from "../types/search";
import { Property } from "../types/property";

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

// call to fetch available properties in a location
const getProperties = async ({
  locationExternalID,
  purpose,
  priceMax,
  roomsMin,
  page,
}: PropertyFilter): Promise<Property[]> => {
  // fetching the properties
  const { data } = await axiosRapidAPIInstance.get(
    `/properties/list?locationExternalIDs=${
      locationExternalID ? locationExternalID : 5002
    }${purpose ? `&purpose=${purpose}` : ""}${
      priceMax ? `&priceMax=${priceMax}` : ""
    }${roomsMin ? `&roomsMin=${roomsMin}` : ""}&hitsPerPage=9&page=${page}`
  );

  console.log(locationExternalID, purpose, priceMax, roomsMin, page);
  const property = data?.hits.map((item) => {
    return {
      price: item?.price,
      title: item?.title,
      area: item?.area,
      phoneNumber: item?.phoneNumber,
      contactName: item?.contactName,
      amenities: item?.amenities,
      location: item?.location,
      coverPhoto: item?.coverPhoto,
      rooms: item?.rooms,
      baths: item?.baths,
    };
  });
  return property;
};

export { getLocations, getProperties };

// location -  locationExternalID (required) , purpose - (purpose) -  , price (priceMax) , room (roomsMax)

// await instance.get(
//   `patient/doctors/all?skip=${skip}&limit=${limit}${
//     speciality ? `&specialities=${[speciality]}` : ""
//   }${doctorName ? `&doctorName=${doctorName}` : ""}`
// );
