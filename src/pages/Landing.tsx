import Hero from "../components/Hero";
import LoadMore from "../components/LoadMore";
import RentalProperty from "../components/RentalProperty";
import SearchBar from "../components/SearchBar";
import RentalContext from "../context/RentalContext";

function Landing() {
  return (
    <>
      <Hero></Hero>
      <RentalContext>
        <SearchBar></SearchBar>
        <RentalProperty></RentalProperty>
        <LoadMore></LoadMore>
      </RentalContext>
    </>
  );
}

export default Landing;
