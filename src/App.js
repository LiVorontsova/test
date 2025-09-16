import logo from "./icons/logo.svg";
import { ReactComponent as CartIcon } from "./icons/cart.svg";
import { useState } from "react";
import rocket from "./images/rocket.png";
import universe_2 from "./images/universe_2.webp";
import universe_3 from "./images/universe_3.webp";
import universe_4 from "./images/universe_4.webp";
import universe_5 from "./images/universe_5.webp";
import "./App.scss";

const Card = ({ size = "", title, subtitle, imageURL }) => {
  const sizeMod = size ? `card--${size}` : "";
  return (
    <div
      className={`card ${sizeMod}`}
      style={{
        "--card-bg": `url(${imageURL})`,
      }}
    >
      <div className="card__inner">
        <div className="card__title text text--bold">{title}</div>
        <div className="card__subtitle text text--bold">{subtitle}</div>
        <button className="button button--outline button--lg text text--700" aria-label="learn">
          Learn more
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((value) => !value);

  return (
    <div className="App" id="home">
      <header className={`header ${isOpen ? "header--menu-open" : ""}`}>
        <img src={logo} className="header__logo" alt="logo" />

        <button className="header__toggle" onClick={toggle} aria-label="hamburger">
          <span className="header__toggle-bar"></span>
          <span className="header__toggle-bar"></span>
          <span className="header__toggle-bar"></span>
        </button>
        <button className="header__close" onClick={close} aria-label="close"></button>
        <div className="header__panel" role="dialog">
          <nav className="header__nav">
            <ul className="header__menu">
              <li className="header__item">
                <a
                  href="#home"
                  className="header__link text text--700"
                  onClick={close}
                >
                  Home
                </a>
              </li>
              <li className="header__item">
                <a
                  href="#products"
                  className="header__link text text--700"
                  onClick={close}
                >
                  Products
                </a>
              </li>
              <li className="header__item">
                <a
                  href="#cart"
                  className="header__link header__link--icon"
                  onClick={close}
                >
                  <CartIcon className="header__cart cart" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="main">
        <h1 className="main__title text text--bold">
          Discover the vast expanses of
          <span className=" text text--pink"> space</span>
        </h1>
        <p className="main__subtitle text text--bold">
          Where the possibilities are
          <span className=" text text--yellow"> endless!</span>
        </p>
        <button className="main__button  button button--primary button--lg text text--700" aria-label="learn more">
          Learn more
        </button>
      </section>

      <section className="offers">
        <h2 className="offers__title">Offers</h2>
        <div className="offers__wrapper">
          <Card
            size="large"
            title="Move the borders of reality!"
            subtitle="Go on a space adventure - it's possible with us!"
            imageURL={universe_2}
          />
          <Card
            size="small"
            title={
              <>
                <div>Space is not</div>
                <div>just stars and</div>
                <div>planets</div>
              </>
            }
            subtitle="Go on a space adventure"
            imageURL={universe_3}
          />
          <Card
            size="small"
            title={
              <>
                <div>For those</div>
                <div>who dream</div>
                <div>of stars</div>
              </>
            }
            subtitle="Our offer: make your dream come true"
            imageURL={universe_4}
          />
          <Card
            size="large"
            title="Fulfill your fantastic dreams"
            subtitle="Space has never been so close"
            imageURL={universe_5}
          />
        </div>
        <h2 className="offers__title">Embark on a space journey</h2>

        <details className="offers__readmore">
          <summary className="offers__summary">
            <p className="offers__description text text--muted">
              Travelling into space is one of the most exciting and
              unforgettable adventures that can change your life forever. And if
              you have ever dreamed of exploring stars, planets and galaxies,
              then our company is ready to help you realize this dream. We offer
              a unique experience that will allow you to go on a space journey
              and see all the secrets of the universe. We guarantee that every
              moment in space will be filled with incredible impressions,
              excitement and new discoveries. Our team of professionals takes
              care of your safety and comfort so that you can fully enjoy your
              adventure in space. We offer various options for space excursions.
            </p>
            <span className="offers__button">
              <span className="offers__btn-text offers__btn-text--more">
                Read more
              </span>
              <span className="offers__btn-text offers__btn-text--less">
                Read less
              </span>
            </span>
          </summary>
        </details>
      </section>

      <footer className="footer">
        <div className="footer__content text text--center">
          <img src={rocket} className="footer__rocket" alt="rocket" />
          <div className="footer__title text text--bold">
            Exciting space adventure!
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
