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
                Shri Jayantilal Hirachand Sanghvi Gujarati Innovative College of
                <br />
                Commerce & Science
              </h1>
            </div>
          </div>
        </section>
        <section className="campus-intro">
          <div className="container">
            <h2 className="campus-intro__title">Welcome To Our Campus</h2>
            <h3 className="campus-intro__subtitle">
              A place where career meets guidance and weakness becomes strength
            </h3>
            <p className="campus-intro__desc">
              Shri Jayantilal Hirachand Sanghvi Gujarati Innovative College Of
              Commerce and Science is a new branch of Shri Gujarati Samaj, a
              highly dedicated and renowned social organization of the city.
              Gujarati Samaj Education Society established S.J.H.S.I.C.C.S
              College in 2006, which is an important identity belonging to the
              Gujarati Samaj Indore. SJHS Gujarati Innovative College Of
              Commerce and Science is located in the prime location of Indore,
              near Bombay hospital with large campus.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
