import "./ModelerAbout.css";
import Tape from "../../../assets/tape.webp";
import AboutMeCard from "../../../assets/About-Card.webp";

const ModelerAbout = () => {
  return (
    <>
      <div className="about-wrp">
        <h2 className="about-title">ABOUT ME</h2>
        <div className="about-card-wrp">
          <img className="about-tape" src={Tape} alt="" />
          <h2 id="about-biography">Biography</h2>
          <img className="about-me-card" src={AboutMeCard} alt="" />
          <div className="about-card-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit auctor
              feugiat
            </p>
            <p>
              a curae aenean facilisi ridiculus potenti platea id aliquam,
              penatibus ante vehicula tristique consequat per tortor fermentum
            </p>
            <p>
              Pharetra erat conubia aptent eget montes tellus aliquam nunc
              feugiat molestie vestibulum
            </p>
            <p>
              utrum proin natoque duis mus ridiculus consequat eros dui
              suspendisse, primis platea
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelerAbout;
