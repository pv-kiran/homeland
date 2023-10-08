import "./App.css";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Hero></Hero>
      <SearchBar></SearchBar>
    </>
  );
}

export default App;
