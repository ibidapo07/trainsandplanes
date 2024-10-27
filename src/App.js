//import logo from "./logo.svg";
import "./App.css";
import Page from "./content";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
]);
function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default App;
