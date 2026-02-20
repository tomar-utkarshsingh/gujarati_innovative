import logo1 from "./assets/Images/logo_1.webp";
import logo2 from "./assets/Images/logo_2.webp";

const App = () => {
  return (
    <>
      <header className="header"></header>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero__logos">
              <div className="hero__logo-1">
                <img
                  className="img-fluid"
                  src={logo1}
                  alt=""
                  width={150}
                  height={149}
                />
              </div>
              <div className="hero__logo-2">
                <img
                  className="img-fluid"
                  src={logo2}
                  alt=""
                  width={261}
                  height={175}
                />
              </div>
            </div>
            <div className="hero__text">
              <h1 className="hero__title">Welcome To Our Campus</h1>
              <h2 className="hero__subtitle">
                A place where career meets guidance and weakness becomes
                strength
              </h2>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <h2 className="features__title">Features</h2>
            <h3 className="features__subtitle">What campus offers:</h3>
            <ul className="features__list">
              <li className="features__list-item"> 🟡 Scholarship Facility</li>
              <li className="features__list-item"> 🎓 Skilled Faculties</li>
              <li className="features__list-item"> 🛡️ Anti-Ragging Support</li>
            </ul>
          </div>
        </section>
        <section className="latest-post">
          <div className="container">
            <h2 className="latest-post__title">Latest Posts</h2>
            <div className="latest-post__all-posts">
              <div className="latest-post__post">
                <div className="latest-post__img">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAALVBMVEXz9Pa5vsq2u8j29/jN0dno6u7V2N++ws3w8fTf4efi5OnFydPY2+HJztbR1txPmUB/AAAC0klEQVR4nO3b55aqMBiFYUoioXn/l3ukKSVBJGH4ctb7/JxRVrYbCDVJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArPLQ7g60YnSjwmoqc3eouarOwmsrOT026TXKu4NNyosCioloissSFndn6+VlNgwn6EY4LrKUsCnm7TCaNuiudFqoiIT9Spo9Ak+Hj77GWsKUMSasAi+2lJMwIeE5JPxLtoRGa8+xiU5YqX5urBuf4UlO+Eyn+br2OHaWm9DU2eeoK2tOL1Vuwucs4Is+u1SxCctlwLQ4O0SpCfN6fXpw9thZakK9qjDN1MmlSk24Xkm/jdG9sxWaMG82CXc3ROXe2UpN+PgpYbffbRwtCk3421qqug+7WpSa0Pywp5lmTnuLUhNaZgvHt4yafgx7i1ITbq4sOoeoZm3bWhSbcDHyF8d0YNRiVba0KDdhMj/yTl2Twep3sLQoOOGrnmn4hePEf9mg/acQnDDJK1V013Trh3HMdesGbS1KTpj0FzG0cQ3O0qClReEJd9ka3LYYb0LzdARcRYw3oavB9YoabUJ3g6sWY0241+CyxUgSmtWFqP0GFy3GkVCnhZ7vPdqvAT8txpAw10WazYf4vcFZizEk1P3fPy0eabD7xnC+JT9h12D/j3o8djvWYH83ufu4/IT6PeKhxYMNdqdSUSScGny3eLTBaBLqxaAL/W0ejC3hvMEh4uF8kSTU+xmiT7hp8L9L6NVgBAk9G4wgoWeD4hN6Nyg+oXeD0hPmxw9dYk24vX9IQhLem21AQhKS8H6hE8q+TtPdVvM1hJKaMBwS/iUSnpILSji+FaTCvgk83oer707XmR70uuTdNSXh3bX384hXvH8Yeus+x2ye1gtGxjukSVJdllBGhUn3QKL/wdpWJmQd7em2CLoV9ltiq0XsZia6fITVCCoQAAAAAAAAAAAAAAAAAAAAAAAAAAAAuMU/B0kslFd7c1EAAAAASUVORK5CYII="
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
