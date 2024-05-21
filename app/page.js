import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Hopes from "./components/Hopes";
import NavBar from "./components/NavBar";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
    <NavBar />
    <Hero/>
    <Services />
    <Gallery />
    <Hopes />
    <Footer />
    </div>
  );
}
