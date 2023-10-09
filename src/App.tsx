import "./App.css";
import Hero from "./components/Hero";
import LoadMore from "./components/LoadMore";
import Navigation from "./components/Navigation";
import RentalProperty from "./components/RentalProperty";
import SearchBar from "./components/SearchBar";
import RentalContext from "./context/RentalContext";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Hero></Hero>
      <RentalContext>
        <SearchBar></SearchBar>
        <RentalProperty></RentalProperty>
        <LoadMore></LoadMore>
      </RentalContext>
    </>
  );
}

export default App;
