import { Swiper, SwiperSlide } from "swiper/react";
import { brandListProps } from "../sliderProps";
const LogoSlider = () => {
  return (
    <Swiper {...brandListProps} className="brand-list owl-carousel">
      <SwiperSlide>
        <div className="brand-single-box">
          <div className="brand-thumb">
            <img src="assets/images/resource/allian.png" alt />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="brand-single-box">
          <div className="brand-thumb">
            <img src="assets/images/resource/figma.png" alt />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="brand-single-box">
          <div className="brand-thumb">
            <img src="assets/images/resource/google.png" alt />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="brand-single-box">
          <div className="brand-thumb">
            <img src="assets/images/resource/redit.png" alt />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="brand-single-box">
          <div className="brand-thumb">
            <img src="assets/images/resource/allian.png" alt />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="brand-single-box">
          <div className="brand-thumb">
            <img src="assets/images/resource/figma.png" alt />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="brand-single-box">
          <div className="brand-thumb">
            <img src="assets/images/resource/google.png" alt />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="brand-single-box">
          <div className="brand-thumb">
            <img src="assets/images/resource/redit.png" alt />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default LogoSlider;
