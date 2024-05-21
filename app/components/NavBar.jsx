import Image from "next/image";
import logo from '../images/603b824c-17b4-4a7f-827c-38688f22575b.png'


const NavBar = () => {
  return (
  <div className="p-5 absolute top-0 left-0 w-full z-20">
    <div className="w-10/12 mx-auto flex items-center justify-between max-md:flex-col max-md:w-full max-md:gap-2">
        <a href="#" className="w-20">
            <Image src={logo} alt="logo" />
        </a>
        <ul className="flex items-center gap-5 text-white">
            <li><a href="">الرئيسية</a></li>
            <li><a href="">خدماتنا</a></li>
            <li><a href="">أعمالنا</a></li>
            <li><a href="">اهتمماتنا</a></li>
        </ul>
    </div>
  </div>
  );
};

export default NavBar;
