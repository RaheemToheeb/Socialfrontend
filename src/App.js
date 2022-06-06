import { BrowserRouter, Router, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Homescreen from "./Component/Home/Homescreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Homescreen />
    </BrowserRouter>
  );
}

export default App;
