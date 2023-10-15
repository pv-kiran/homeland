import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav--container">
        <nav className="nav">
          <h1
            className="logo"
            onClick={() => {
              navigate("/");
            }}>
            HomeLand
          </h1>
          <AccountCircleIcon
            sx={{
              fontSize: "3.5rem",
              color: "rgb(46, 46, 105)",
            }}></AccountCircleIcon>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
