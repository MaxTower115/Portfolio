import { Link } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      <h1>MAX TOWER</h1>
      <div className="navigation">
        <Link to="/web-dev">Web Developer</Link>
        <Link to="/3d-artist">3D ARTIST</Link>
      </div>
    </>
  );
};

export default MainPage;
