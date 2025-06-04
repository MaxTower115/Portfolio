import "./ModelerPortfolio.css";
import { Link } from "react-router-dom";
import Test1 from "../../../assets/Modeler-Main-Swiper1.webp";
import Test2 from "../../../assets/Mauser.webp";
import Test3 from "../../../assets/Modeler-Main-Swiper2.webp";
import Test4 from "../../../assets/Modeler-Main-Swiper3.webp";
import Test5 from "../../../assets/Shield.webp";
import Test6 from "../../../assets/Standard.webp";
import Test7 from "../../../assets/Tank.webp";
import Test8 from "../../../assets/Car.webp";

const ModelerPortfolio = () => {
  const portfolioItems = [
    { id: 1, image: Test1 },
    { id: 2, image: Test2 },
    { id: 3, image: Test3 },
    { id: 4, image: Test4 },
    { id: 5, image: Test5 },
    { id: 6, image: Test6 },
    { id: 7, image: Test7 },
    { id: 8, image: Test8 },
  ];

  return (
    <>
      <div className="mp-wrp">
        {portfolioItems.map((item, index) => (
          <Link to={`/3d-artist/works/${item.id}`}>
            <div className="grid-item" key={index}>
              <div className="grid-item-active"></div>
              <img src={item.image} alt="" className="portfolio-image" />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ModelerPortfolio;
