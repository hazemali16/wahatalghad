'use client'
import { useEffect } from "react";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Hopes from "./components/Hopes";
import NavBar from "./components/NavBar";
import Services from "./components/Services";

export default function Home() {
  useEffect(() => {
    let services = document.querySelector(".services")
    let gallery = document.querySelector(".gallery")
    let hopes = document.querySelector(".hopes")

    window.onscroll = () => {
      if (window.scrollY >= services.offsetTop - 600) {
        for (let index = 0; index < services.children[0].children.length; index++) {
          services.children[0].children[index].classList.remove("opacity-0")
          services.children[0].children[index].classList.remove("translate-y-10")
        }
      }
      if (window.scrollY >= gallery.offsetTop - 600) {
        gallery.classList.remove("opacity-0")
        gallery.classList.remove("translate-y-10")
        for (let index = 0; index < gallery.children[2].children.length; index++) {
          gallery.children[2].children[index].classList.remove("opacity-0")
          gallery.children[2].children[index].classList.remove("translate-y-10")
        }
      }
      if (window.scrollY >= hopes.offsetTop - 600) {
        hopes.classList.remove("opacity-0")
        hopes.classList.remove("translate-y-10")
      }
    }
    
  }, [])
  return (
    <div>
    //<NavBar />
    //<Hero/>
    //<Services />
    //<Gallery />
    //<Hopes />
    //<Footer />
    </div>
  );
}
