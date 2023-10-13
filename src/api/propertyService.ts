/* eslint-disable no-useless-catch */
import { axiosRapidAPIInstance } from "./axiosInstance";
import { Location, PropertyFilter } from "../types/search";
import { Property, SelectedProperty } from "../types/property";

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

// fetch available properties in a location
const getProperties = async ({
  locationExternalID,
  purpose,
  priceMax,
  roomsMin,
  page,
}: PropertyFilter): Promise<Property[]> => {
  // fetching the properties
  try {
    const { data } = await axiosRapidAPIInstance.get(
      `/properties/list?locationExternalIDs=${
        locationExternalID ? locationExternalID : 5002
      }${purpose ? `&purpose=${purpose}` : ""}${
        priceMax ? `&priceMax=${priceMax}` : ""
      }${roomsMin ? `&roomsMin=${roomsMin}` : ""}&hitsPerPage=9&page=${page}`
    );

    const properties = data?.hits.map((item) => {
      return {
        price: item?.price,
        title: item?.title,
        externalID: item?.externalID,
        area: item?.area,
        coverPhoto: item?.coverPhoto,
        rooms: item?.rooms,
        baths: item?.baths,
        location: item?.location,
      };
    });
    return properties;
  } catch (err) {
    throw err;
  }
};

// fetch details of a property
const getPropertyDetails = async (
  externalId: string
): Promise<SelectedProperty> => {
  const { data } = await axiosRapidAPIInstance.get(
    `properties/detail?externalID=${externalId}`
  );
  console.log(externalId);
  console.log(data);
  const {
    price,
    externalID,
    title,
    area,
    coverPhoto,
    baths,
    rooms,
    agency,
    amenities,
    category,
    contactName,
    createdAt,
    description,
    furnishingStatus,
    geography,
    location,
    rentFrequency,
    phoneNumber,
    photos,
  } = data;

  return {
    price,
    externalID,
    title,
    area,
    coverPhoto,
    baths,
    rooms,
    agency,
    amenities,
    category,
    contactName,
    createdAt,
    description,
    furnishingStatus,
    rentFrequency,
    geography,
    location,
    phoneNumber,
    photos,
  };
};

export { getLocations, getProperties, getPropertyDetails };
