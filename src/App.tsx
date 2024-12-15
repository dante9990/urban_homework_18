import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./route";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
