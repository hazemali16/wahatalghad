import Image from "next/image";
import hero_image from '../images/DSC09556.jpg'


const Hero = () => {
  return (<div className="relative h-screen hero flex justify-center items-center text-white hero" id="hero">
    <div className="z-10 w-1/2 max-lg:w-full max-lg:px-5 overflow-hidden">
    <h1 className="text-center text-6xl mb-10 text-[#37b8b8] max-lg:text-4xl hero-title">مدارس واحة الغد</h1>
    <p className="text-2xl text-center max-lg:text-xl hero-p">نواكب تنوع وسائل التعليم المشجع لتحقيق التفوق التعليمي والتربوي الذي يسهم في تميز قدرات الأجيال القادمة</p>
    <div className="flex gap-2 mt-10 justify-center items-center max-md:flex-col hero-btns">
        <a href="https://api.whatsapp.com/message/QZORRO2IPRYPD1?autoload=1&app_absent=0" target="_blank" className="bg-[#37b8b8] px-5 py-3 rounded-md flex items-center gap-1">تواصل معنا الان <i className="fa-brands fa-whatsapp"></i></a>
        <a href="tel:+966558556699" className="text-[#37b8b8] bg-white border border-[#37b8b8] px-5 py-3 rounded-md flex items-center gap-1">0558556699 <i className="fa-solid fa-phone"></i></a>
    </div>
    </div>
  </div>);
};

export default Hero;
