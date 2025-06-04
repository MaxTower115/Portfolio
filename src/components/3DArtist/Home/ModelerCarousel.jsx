import "./ModelerCarousel.css";
import HomeSwiper1 from "../../../assets/Modeler-Main-Swiper1.webp";
import HomeSwiper2 from "../../../assets/Modeler-Main-Swiper2.webp";
import HomeSwiper3 from "../../../assets/Modeler-Main-Swiper3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ModelerCarousel = () => {
  const swiperImages = [HomeSwiper1, HomeSwiper2, HomeSwiper3];
  return (
    <>
      <div className="swiper">
        <Swiper
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {swiperImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ModelerCarousel;
