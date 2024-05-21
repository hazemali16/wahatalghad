import Image from "next/image";
import gallery1 from '../images/DSC09588.jpg'
import gallery2 from '../images/DSC09558.jpg'
import gallery3 from '../images/DSC09556.jpg'
import gallery4 from '../images/DSC09562.jpg'
import gallery5 from '../images/DSC09560.jpg'
import gallery6 from '../images/DSC09596.jpg'


const Gallery = () => {
  return (<div className="px-5 py-20">
    <h2 className="text-3xl text-center mb-3 max-md:text-2xl">نعمل على اكتشاف الموهبة في المراحل المبكرة</h2>
    <p className="text-center text-xl text-gray-400 max-md:text-lg">وتشجيع أساليب ومناهج التعليم المبتكرة لإيجاد المهارات ونقاط القوة التي تميز كل طالب/ة وبناء شخصية قادة الغد.</p>
    <div className="w-10/12 mx-auto max-md:w-full grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 mt-20">
        <div className="relative">
            <Image src={gallery1} alt="gallery1" />
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000090]"></div>
        </div>
        <div className="relative">
            <Image src={gallery2} alt="gallery2" />
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000090]"></div>
        </div>
        <div className="relative">
            <Image src={gallery3} alt="gallery3" />
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000090]"></div>
        </div>
        <div className="relative">
            <Image src={gallery4} alt="gallery4" />
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000090]"></div>
        </div>
        <div className="relative">
            <Image src={gallery5} alt="gallery5" />
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000090]"></div>
        </div>
        <div className="relative">
            <Image src={gallery6} alt="gallery6" />
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000090]"></div>
        </div>
    </div>
  </div>);
};

export default Gallery;
