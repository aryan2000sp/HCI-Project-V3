import { ReactComponent as Hamburger } from "../../icons/hambuger.svg";
import { ReactComponent as Close } from "../../icons/close.svg";
import { ReactComponent as Salad } from "../../icons/salad_bowl_big.svg";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="header-navbar">
          {/* This is the main title of the navbar */}
          <section className="header-title">
            <div className="salad-icon-container">
              <Salad className="salad-icon" />
            </div>
            <h2>Food Tracker</h2>
          </section>

          {/* This is the hamburger menu */}
          <section className="header-hamburger-menu">
            {isMenuOpen ? (
              <Close onClick={() => setIsMenuOpen(!isMenuOpen)} />
            ) : (
              <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)} />
            )}
            {/* <Hamburger /> */}
          </section>

          {/* This is the menu for large screen sizes */}
          <section className="header-menu">
            <ul>
              <li>
                <h3>Home</h3>
              </li>
              <li>
                <h3>Add Food</h3>
              </li>
              <li>
                <h3>Food Diary</h3>
              </li>
              <li>
                <h3>Summary</h3>
              </li>
              <li>
                <h3>Setting</h3>
              </li>
              <li>
                <h3>Simulate</h3>
              </li>
            </ul>
          </section>

          <MobileMenu isOpen={isMenuOpen} />
        </nav>
      </header>
    </>
  );
};

export default Header;
