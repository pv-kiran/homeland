import { Box, Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

interface Props {
  title: string;
  infoValue: string;
  infoDescription?: string;
  Icon: SvgIconComponent;
}

function PropertyDetailsInfo({
  Icon,
  title,
  infoValue,
  infoDescription,
}: Props) {
  return (
    <Box
      sx={{
        width: { lg: "50%", md: "50%", sm: "100%" },
        backgroundColor: "#f5f5f2",
        padding: "1rem 1rem",
      }}>
      <Typography
        sx={{
          fontSize: "1.7rem",
          display: "flex",
          alignItems: "center",
          marginBottom: ".5rem",
          fontWeight: "600",
          color: "#303832",
          fontFamily: "inherit",
        }}>
        <Icon
          fontSize="large"
          sx={{
            marginRight: "1rem",
            color: "rgb(46, 46, 105)",
          }}></Icon>
        {title}
      </Typography>
      <Typography sx={{ fontSize: "1.6rem", color: "gray" }}>
        {`${infoValue}  ${infoDescription ? infoDescription : ""}`}
      </Typography>
    </Box>
  );
}

export default PropertyDetailsInfo;
