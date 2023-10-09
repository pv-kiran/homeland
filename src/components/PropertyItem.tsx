import Chip from "@mui/material/Chip";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import CropRotateIcon from "@mui/icons-material/CropRotate";
// import CropSquareIcon from "@mui/icons-material/CropSquare";
import { Stack } from "@mui/material";
import BathroomIcon from "@mui/icons-material/Bathroom";
function PropertyItem(props) {
  return (
    <>
      <div className="property--card">
        <img className="property--img" src={props.coverPhoto.url} alt="" />
        <div className="property--info">
          <Chip
            label={props.location[2]?.name}
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
            label={`$ ${props.price}`}
          />
        </div>
        <h2 className="property--title">{props.title}</h2>
        <Stack direction="row" spacing={3}>
          <span className="property--info">
            <BedroomParentIcon
              fontSize="large"
              sx={{
                marginRight: ".5rem",
                color: "#6a6075",
              }}></BedroomParentIcon>
            {props?.rooms}
          </span>
          <span className="property--info">
            <BathroomIcon
              fontSize="large"
              sx={{
                marginRight: ".5rem",
                color: "#6a6075",
              }}></BathroomIcon>
            {props?.baths}
          </span>
          <span className="property--info">
            <CropRotateIcon
              fontSize="large"
              sx={{
                marginRight: ".5rem",
                color: "#6a6075",
              }}></CropRotateIcon>
            {`${parseInt(props?.area)} sq ft`}
          </span>
        </Stack>
      </div>
    </>
  );
}

export default PropertyItem;
