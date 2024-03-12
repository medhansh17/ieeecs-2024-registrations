import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { getAuth } from "firebase/auth";
import firebaseConfig from "../firebase.config";
import { initializeApp } from "firebase/app";
import Landing from "./routes/landing/landing.component";
import Error from "./routes/error/error.component";
import Domains from "./routes/domains/domains.component";
import Welcome from "./routes/welcome/welcome.component";

const App = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="error" element={<Error />} />
        <Route
          path="domains"
          element={auth.currentUser ? <Domains /> : <Welcome />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
