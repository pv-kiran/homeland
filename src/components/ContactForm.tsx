import TextField from "@mui/material/TextField";
import { Agency } from "./../types/property";

interface Props {
  agency: Agency;
  contactName: string;
}

function ContactForm({ agency, contactName }: Props) {
  return (
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
            src={agency?.logo?.url}
            alt="agency-log"
          />
          <div>
            <h3 style={{ fontSize: "1.4rem", fontWeight: "400" }}>
              {contactName}
            </h3>
            <h5 style={{ fontSize: "1.2rem", fontWeight: "200" }}>
              {agency?.name}
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
  );
}

export default ContactForm;
