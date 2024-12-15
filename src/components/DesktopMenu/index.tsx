import { Link } from "react-router-dom";

export const DesktopMenu = () => {
  return (
    <nav>
      <Link to="/urban_homework_18/beans">Beans</Link>
      <Link to="/urban_homework_18/facts">Facts</Link>
      <Link to="/urban_homework_18/recipes">Recipes</Link>
      <Link to="/urban_homework_18/combinations">Combinations</Link>
      <Link to="/urban_homework_18/history">History</Link>
    </nav>
  );
};