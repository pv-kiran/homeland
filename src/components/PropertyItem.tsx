import Chip from "@mui/material/Chip";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import CropRotateIcon from "@mui/icons-material/CropRotate";
import { Stack } from "@mui/material";
import BathroomIcon from "@mui/icons-material/Bathroom";
import { Property } from "../types/property";
import { useNavigate } from "react-router-dom";

function PropertyItem({
  externalID,
  coverPhoto,
  location,
  price,
  title,
  rooms,
  baths,
  area,
}: Property) {
  // fro navifation purpose
  const navigate = useNavigate();

  return (
    <>
      <div
        className="property--card"
        onClick={() => {
          navigate(`/property/${externalID}`);
        }}>
        <img className="property--img" src={coverPhoto.url} alt="" />
        <div className="property--info">
          <Chip
            label={location[2]?.name}
            sx={{
              fontSize: "1.2rem",
              backgroundColor: "#79c98d",
              color: "white",
              marginRight: ".5rem",
              marginBottom: ".5rem",
            }}
          />
          <Chip
            sx={{
              fontSize: "1.2rem",
              backgroundColor: "rgb(104, 104, 176)",
              color: "white",
              marginBottom: ".5rem",
            }}
            label={`$ ${price}`}
          />
        </div>
        <h2 className="property--title">{title}</h2>
        <Stack direction="row" spacing={3}>
          <span className="property--info">
            <BedroomParentIcon
              fontSize="large"
              sx={{
                marginRight: ".5rem",
                color: "#6a6075",
              }}></BedroomParentIcon>
            {rooms}
          </span>
          <span className="property--info">
            <BathroomIcon
              fontSize="large"
              sx={{
                marginRight: ".5rem",
                color: "#6a6075",
              }}></BathroomIcon>
            {baths}
          </span>
          <span className="property--info">
            <CropRotateIcon
              fontSize="large"
              sx={{
                marginRight: ".5rem",
                color: "#6a6075",
              }}></CropRotateIcon>
            {`${parseInt(area)} sq ft`}
          </span>
        </Stack>
      </div>
    </>
  );
}

export default PropertyItem;
