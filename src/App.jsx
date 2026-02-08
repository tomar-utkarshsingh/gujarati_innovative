import logo from "./assets/Images/logo_1.webp";
import heroBanner1 from "./assets/Images/hero_banner/hero_banner-1.webp";
import heroBanner2 from "./assets/Images/hero_banner/hero_banner-2.webp";
import heroBanner3 from "./assets/Images/hero_banner/hero_banner-3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const App = () => {
  const pagination = {
    clickable: true,
    dynamicBullets: true,
  };

  return (
    <>
      <header className="header"></header>
      <main>
        <section className="hero">
          <div className="hero__slider">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={pagination}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="hero__banner-1">
                  <img src={heroBanner1} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero__banner-2">
                  <img src={heroBanner2} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero__banner-3">
                  <img src={heroBanner3} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="container">
            <div className="hero__text">
              <div className="hero__logo">
                <img src={logo} alt="" />
              </div>
              <h1 className="hero__title">
                Shri Jayantilal Hirachand Sanghvi Gujarati Innovative College of{" "}
                <br />
                Commerce & Science
              </h1>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
