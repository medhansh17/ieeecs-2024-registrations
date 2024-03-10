import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./routes/landing/landing.component";
import Error from "./routes/error/error.component";
import Domains from "./routes/domains/domains.component";

const App = () => {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit&display=swap"
          rel="stylesheet"
        />
      </head>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="error" element={<Error />} />
        <Route path="domains" element={<Domains />} />
      </Routes>
    </>
  );
};

export default App;
