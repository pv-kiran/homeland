import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import RentalProperty from "../components/RentalProperty";
import SearchBar from "../components/SearchBar";
import RentalContext from "../context/RentalContext";

function Landing() {
  return (
    <>
      <Navigation />
      <Hero></Hero>
      <RentalContext>
        <SearchBar></SearchBar>
        <RentalProperty></RentalProperty>
      </RentalContext>
    </>
  );
}

export default Landing;
