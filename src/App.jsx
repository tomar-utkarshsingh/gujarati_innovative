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
      </main>
    </>
  );
};

export default App;
