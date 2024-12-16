import { Link } from "react-router-dom";
import { useIsMobile } from "../../hooks/useMobile";
import styles from "./style.module.css";
import logo from "../../images/logo.png";
import { MobileMenu } from "../MobileMenu";
import { DesktopMenu } from "../DesktopMenu";

export const Header = () => {
  const isMobile = useIsMobile();
  return (
    <header>
      <div className={styles.container}>
        <Link to="/urban_homework_18" className={styles.logo}>
          <img src={logo} alt="logo" />
          <span>Jelly Belly</span>
        </Link>
        {isMobile ? <MobileMenu /> : <DesktopMenu />}
      </div>
    </header>
  );
};
