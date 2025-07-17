import "./App.css";
import Search from "./components/Search/Search";
import FixedAlignment from "./components/FixedAlignment/FixedAlignment";
import BannerContent from "./components/Banner/BannerContent/BannerContent";
import CarouselComponentTwo from "./components/Banner/CarouselComponentTwo/CarouselComponentTwo";
import BannerCarousel from "./components/Banner/BannerCarousel/BannerCarousel";
import Card from "./components/Card/card.jsx";
import Carsedf from "./Carsedf/Carsedf.jsx";
import { FaQ } from "react-icons/fa6";
import Faq from "../src/FAQ/Faq.jsx";
function App() {
  return (
    <>
      <Carsedf />
      <br />
      <Faq />
    </>
  );
}

export default App;
