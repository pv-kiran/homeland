/* eslint-disable no-useless-catch */
import { axiosRapidAPIInstance } from "./axiosInstance";
import { Location, PropertyFilter } from "../types/search";
import { Property, SelectedProperty } from "../types/property";
import { PropertyItem } from "../types/propertyItem";

// call to fetch availble locations
const getLocations = async (): Promise<Location[]> => {
  try {
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
  } catch (err) {
    throw err;
  }
};

// fetch available properties in a location
const getProperties = async ({
  locationExternalID,
  purpose,
  priceMax,
  roomsMax,
  page,
}: PropertyFilter): Promise<Property[]> => {
  // fetching the properties
  try {
    const { data } = await axiosRapidAPIInstance.get(
      `/properties/list?locationExternalIDs=${
        locationExternalID ? locationExternalID : 5002
      }${purpose ? `&purpose=${purpose}` : ""}${
        priceMax ? `&priceMax=${priceMax}` : ""
      }${
        roomsMax ? `&roomsMax=${roomsMax}` : ""
      }&hitsPerPage=9&page=${page}&roomsMin=${roomsMax}&priceMin=${
        priceMax <= 14000 ? priceMax - 2000 : priceMax - 1000000
      }`
    );

    const properties = data?.hits.map((item: PropertyItem) => {
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
  try {
    const { data } = await axiosRapidAPIInstance.get(
      `properties/detail?externalID=${externalId}`
    );
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
      purpose,
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
      purpose,
      rentFrequency,
      geography,
      location,
      phoneNumber,
      photos,
    };
  } catch (err) {
    throw err;
  }
};

export { getLocations, getProperties, getPropertyDetails };
