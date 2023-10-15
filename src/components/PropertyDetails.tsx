import { useParams } from "react-router-dom";
import { getPropertyDetails } from "../api/propertyService";
import { useEffect, useState } from "react";

import { Stack, Chip } from "@mui/material";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CropRotateIcon from "@mui/icons-material/CropRotate";
import HomeIcon from "@mui/icons-material/Home";
import ChairIcon from "@mui/icons-material/Chair";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import PhoneIcon from "@mui/icons-material/Phone";
import CircularProgress from "@mui/material/CircularProgress";

import PropertyDetailsInfo from "./PropertyDetailsInfo";

import { SelectedProperty } from "../types/property";

import NotFound from "./NotFound";
import ImageSlider from "./ImageSlider";
import ContactForm from "./ContactForm";
import MapView from "./MapView";

function PropertyDetails() {
  const { id } = useParams();

  // state for loading
  const [loading, setLoading] = useState<boolean>(false);
  // state for error handling
  const [error, setError] = useState<boolean>(false);

  // state for setting up the selected property details
  const [property, setProperty] = useState<SelectedProperty>(
    {} as SelectedProperty
  );

  const fullAddress: string = property?.location
    ?.map((item) => item?.name)
    .reverse()
    .join(", ");

  const address: string = property?.location
    ?.slice(3, 5)
    .map((item) => item.name)
    .reverse()
    .join(",");

  const fetchDetails = async (id: string): Promise<void> => {
    try {
      setLoading(true);
      const property = await getPropertyDetails(id);
      setProperty(property);
      // on reloading the page after error
      setError(false);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails(id as string);
  }, []);

  if (error) {
    return <NotFound />;
  }
  return (
    <>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <CircularProgress></CircularProgress>
        </div>
      ) : (
        <main className="details">
          <section className="details--container">
            <ImageSlider photos={property?.photos} />
            <div className="details--info">
              <Stack
                direction={{
                  xl: "row",
                  lg: "row",
                  md: "row",
                  sm: "row",
                  xs: "column",
                }}
                marginBottom={1.25}>
                <PropertyDetailsInfo
                  Icon={AddHomeWorkIcon}
                  title={"Configuration"}
                  infoValue={`${property?.rooms} Bedroom, `}
                  infoDescription={`${property?.baths} Bathroom`}
                />
                <PropertyDetailsInfo
                  Icon={CurrencyExchangeIcon}
                  title={`${
                    property.purpose === "for-rent" ? "Rent" : "Price"
                  }`}
                  infoValue={`$ ${property?.price}`}
                  infoDescription={`${
                    property.purpose === "for-rent"
                      ? property.rentFrequency
                      : ""
                  }`}
                />
              </Stack>
              <Stack
                direction={{
                  xl: "row",
                  lg: "row",
                  md: "row",
                  sm: "row",
                  xs: "column",
                }}
                marginBottom={1.25}>
                <PropertyDetailsInfo
                  Icon={CropRotateIcon}
                  title={"Area"}
                  infoValue={`Plot area ${parseInt(String(property?.area))}`}
                  infoDescription={`Sq Ft`}
                />
                <PropertyDetailsInfo
                  Icon={HomeIcon}
                  title={"Address"}
                  infoValue={`${address}`}
                />
              </Stack>
              <Stack
                direction={{
                  xl: "row",
                  lg: "row",
                  md: "row",
                  sm: "row",
                  xs: "column",
                }}
                marginBottom={1.25}>
                <PropertyDetailsInfo
                  Icon={ChairIcon}
                  title={"Furnishing"}
                  infoValue={
                    property?.furnishingStatus ? "Furnished" : "Unfurnished"
                  }
                />
                <PropertyDetailsInfo
                  Icon={EventAvailableIcon}
                  title={"Available For"}
                  infoValue={"Family, Bachelors"}
                />
              </Stack>
              <Stack
                direction={{
                  xl: "row",
                  lg: "row",
                  md: "row",
                  sm: "row",
                  xs: "column",
                }}
                marginBottom={1.25}>
                <PropertyDetailsInfo
                  Icon={RecentActorsIcon}
                  title={"Posted By"}
                  infoValue={`${property?.contactName}, `}
                  infoDescription={property?.agency?.name}
                />
                <PropertyDetailsInfo
                  Icon={PhoneIcon}
                  title={"Phone Number"}
                  infoValue={`${property?.phoneNumber?.mobile}, `}
                  infoDescription={`${property?.phoneNumber?.whatsapp}`}
                />
              </Stack>
            </div>
          </section>
          <section className="property--description">
            <h1 className="property--description-title">{property?.title}</h1>
            <span style={{ fontSize: "1.8rem", color: "gray" }}>
              Address :{" "}
            </span>
            <span style={{ fontSize: "1.5rem", fontWeight: 300 }}>
              {fullAddress}
            </span>
            <p className="property--description-info">
              {property?.description}
            </p>
          </section>
          <section className="property--feature">
            <h1 className="property--description-title">
              Why should you consider this property?
            </h1>
            {property?.amenities?.map((item) => {
              return item?.amenities?.map((item) => {
                return (
                  <Chip
                    key={item?.externalID}
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: 400,
                      backgroundColor: "rgb(86, 188, 154)",
                      marginRight: ".5rem",
                      marginBottom: ".5rem",
                      color: "#fff",
                    }}
                    label={item?.text}
                  />
                );
              });
            })}
          </section>
          <section>
            <h1 className="property--description-title">
              Location and Contact info
            </h1>
            <div className="property--information">
              <div className="property---information-map">
                {property?.geography && (
                  <MapView
                    geography={property?.geography}
                    fullAddress={fullAddress}
                  />
                )}
              </div>
              <ContactForm
                agency={property?.agency}
                contactName={property.contactName}
              />
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export default PropertyDetails;
