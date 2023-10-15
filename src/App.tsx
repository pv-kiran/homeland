import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Details from "./pages/Details";
import Submission from "./pages/Submission";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/property/:id" element={<Details />} />
        <Route path="/submission/success" element={<Submission />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
