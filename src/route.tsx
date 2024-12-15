import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Loader } from "./components/Loader";
import { Home } from "./pages/Home";
import { BeansPage } from "./pages/Beans";
import { BeanPage } from "./pages/BeanPage";
import { FactsPage } from "./pages/Facts";
import { RecipesPage } from "./pages/Recipes";
import { HistoryPage } from "./pages/History";
import { CombinationsPage } from "./pages/Combinations";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: Loader,
    children: [
      { index: true, element: <Home /> },
      { path: "beans", element: <BeansPage /> },
      { path: "bean/:id", element: <BeanPage /> },
      { path: "facts", element: <FactsPage /> },
      { path: "recipes", element: <RecipesPage /> },
      { path: "history", element: <HistoryPage /> },
      { path: "combinations", element: <CombinationsPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
