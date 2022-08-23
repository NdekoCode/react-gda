import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./assets/css/App.css";
import "./assets/css/index.css";
// import GdaExos from "./pages/GdaExos";
import { Pomodoro } from "./pages/Pomodoro";
import GdaExos from "./pages/GdaExos";
import Error from "./pages/Error";
import { Services } from "./pages/Services";
import { ServicesDev } from "./components/ServicesDev";
import { ServicesMark } from "./components/ServicesMark";
function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/blog" element={<GdaExos />} />
          <Route path="/*" element={<Error />} />
          <Route path="/services" element={<Services />}>
            <Route path="/services/development" element={<ServicesDev />} />
            <Route path="/services/marketing" element={<ServicesMark />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default App;
