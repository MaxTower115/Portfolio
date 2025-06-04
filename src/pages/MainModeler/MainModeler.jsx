import "./MainModeler.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import ModelerCarousel from "../../components/3DArtist/Home/ModelerCarousel.jsx";
import ModelerPortfolio from "../../components/3DArtist/Portfolio/ModelerPortfolio.jsx";
import ModelerAbout from "../../components/3DArtist/About/ModelerAbout.jsx";

const MainModeler = () => {
  return (
    <>
      <ModelerCarousel />
      <ModelerPortfolio />
      <ModelerAbout />
      <Navbar />
    </>
  );
};

export default MainModeler;
