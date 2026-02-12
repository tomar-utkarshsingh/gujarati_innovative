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
              <li className="features__list-item">Scholarship Facility</li>
              <li className="features__list-item">Skilled Faculties</li>
              <li className="features__list-item">Anti-Ragging Support</li>
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
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <div className="latest-post__info">
                  <h4 className="latest-post__label">Lorem Ipsum</h4>
                  <span className="latest-post__date">8 Jan 2026</span>
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
