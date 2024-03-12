import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./routes/landing/landing.component";
import Error from "./routes/error/error.component";
import Domains from "./routes/domains/domains.component";
import Welcome from "./routes/welcome/welcome.component";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="error" element={<Error />} />
        <Route path="domains" element={<Domains />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
