import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./routes/landing/landing.component";
import Error from "./routes/error/error.component";
import Domains from "./routes/domains/domains.component";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="error" element={<Error />} />
        <Route path="domains" element={<Domains />} />
      </Routes>
    </>
  );
};

export default App;
