import Image from "next/image";
import hobes_image from '../images/DSC09565.jpg'


const Hopes = () => {
  return (<div className="px-5 py-20 hopes opacity-0 duration-500 translate-y-10" id="hopes">
    <div className="w-10/12 mx-auto max-md:w-full flex items-center gap-5 max-lg:flex-col-reverse">
        <div className="w-1/2 max-lg:w-full">
            <h3 className="text-3xl text-[#37b8b8] mb-5 max-md:text-2xl">نهتم بالعمل على استراتيجية استقطاب الكفاءات</h3>
            <p>التي تثمر بالثقة والمبادرات الإيجابية بعد خلق بيئة تحفز التفكير الإبداعي لدى المعلمين والمعلمات من أجل مصلحة أبناء وبنات مدارس واحة الغد</p>
        </div>
        <div className="w-1/2 max-lg:w-full">
        <Image src={hobes_image} alt="hobes_image" />
        </div>
    </div>
  </div>);
};

export default Hopes;
