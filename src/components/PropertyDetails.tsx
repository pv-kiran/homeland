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

import TextField from "@mui/material/TextField";
// import Swiper core and required modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import PropertyDetailsInfo from "./PropertyDetailsInfo";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { SelectedProperty } from "../types/property";

function PropertyDetails() {
  const { id } = useParams();
  console.log(id);

  const [property, setProperty] = useState<SelectedProperty>(
    {} as SelectedProperty
  );

  // console.log(property.id);

  const fullAddress: string = property?.location
    ?.map((item) => item?.name)
    .reverse()
    .join(", ");

  const address: string = property?.location
    ?.slice(3, 5)
    .map((item) => item.name)
    .reverse()
    .join(",");

  // const test = property.amenities.map((item) => {
  //   return item.amenities.map((item) => item.text);
  // });
  // console.log(test);

  const fetchDetails = async (id: string): Promise<void> => {
    console.log(id);
    const property = await getPropertyDetails(id);
    setProperty(property);
  };

  useEffect(() => {
    fetchDetails(id as string);
  }, []);
  return (
    <>
      <main className="details">
        <section className="details--container">
          <div className="details--photos">
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              style={{
                borderRadius: ".5rem",
              }}
              navigation>
              {property?.photos?.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img
                      className="details--img"
                      src={item.url}
                      alt="no images"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
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
                title={"Rent"}
                infoValue={`$ ${property?.price}`}
                infoDescription={`${property?.rentFrequency}`}
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
          <span style={{ fontSize: "1.8rem", color: "gray" }}>Address : </span>
          <span style={{ fontSize: "1.5rem", fontWeight: 300 }}>
            {fullAddress}
          </span>
          <p className="property--description-info">{property?.description}</p>
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
                <MapContainer
                  center={[property?.geography?.lat, property?.geography?.lng]}
                  zoom={3}
                  scrollWheelZoom={false}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker
                    position={[
                      property?.geography?.lat,
                      property?.geography?.lng,
                    ]}>
                    <Popup>{fullAddress}</Popup>
                  </Marker>
                </MapContainer>
              )}
            </div>
            <div className="property--information-contact">
              <form className="contact--form">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: "2rem",
                  }}>
                  <img
                    style={{
                      width: "5rem",
                      objectFit: "cover",
                      marginRight: "2rem",
                    }}
                    src={property?.agency?.logo?.url}
                    alt="agency-log"
                  />
                  <div>
                    <h3 style={{ fontSize: "1.4rem", fontWeight: "400" }}>
                      {property?.contactName}
                    </h3>
                    <h5 style={{ fontSize: "1.2rem", fontWeight: "200" }}>
                      {property?.agency?.name}
                    </h5>
                  </div>
                </div>
                <TextField
                  sx={{ width: "100%", marginBottom: "1.5rem" }}
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
                <TextField
                  sx={{ width: "100%", marginBottom: "1.5rem" }}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  sx={{ width: "100%", marginBottom: "1.5rem" }}
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                />
                <textarea
                  style={{
                    width: "100%",
                    padding: "1.3rem",
                    marginBottom: "1.5rem",
                    border: "1px dotted gray",
                    borderRadius: ".5rem",
                  }}
                  rows={6}
                  placeholder="I am interested in this property"></textarea>
                <button className="btn--signup btn--submit">Send</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default PropertyDetails;
