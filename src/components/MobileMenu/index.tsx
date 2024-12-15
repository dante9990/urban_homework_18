import { BurgerMenu } from "../BurgerMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className={styles.wrapper}>
          <nav>
            <Link to="/urban_homework_18/beans" onClick={handleLinkClick}>
              Beans
            </Link>
            <Link to="/urban_homework_18/facts" onClick={handleLinkClick}>
              Facts
            </Link>
            <Link to="/urban_homework_18/recipes" onClick={handleLinkClick}>
              Recipes
            </Link>
            <Link to="/urban_homework_18/combinations" onClick={handleLinkClick}>
              Combinations
            </Link>
            <Link to="/urban_homework_18/history" onClick={handleLinkClick}>
              History
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
