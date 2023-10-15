import "./App.css";

import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Details from "./pages/Details";
import Submission from "./pages/Submission";
function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/property/:id" element={<Details></Details>}></Route>
        <Route
          path="/submission/success"
          element={<Submission></Submission>}></Route>
      </Routes>
    </>
  );
}

export default App;
