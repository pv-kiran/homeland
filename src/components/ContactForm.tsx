import TextField from "@mui/material/TextField";
import { Agency } from "./../types/property";
import { useNavigate } from "react-router-dom";

interface Props {
  agency: Agency;
  contactName: string;
}

function ContactForm({ agency, contactName }: Props) {
  const navigate = useNavigate();
  return (
    <div className="property--information-contact">
      <form
        className="contact--form"
        onSubmit={() => {
          navigate("/submission/success");
        }}>
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
          required
        />
        <TextField
          sx={{ width: "100%", marginBottom: "1.5rem" }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          required
        />
        <TextField
          sx={{ width: "100%", marginBottom: "1.5rem" }}
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          required
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
          required
          placeholder="I am interested in this property"></textarea>
        <button className="btn--signup btn--submit" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
