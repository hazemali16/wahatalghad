

const Services = () => {
  return (<div className="py-20 px-5 services" id="services">
    <div className="w-10/12 mx-auto max-md:w-full grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5">
        <div className="shadow-lg p-5 flex flex-col items-center gap-5 rounded-lg h-40 duration-500 opacity-0 translate-y-10">
            <div className="">
            <i className="fa-solid fa-bus fa-2x text-[#37b8b8]"></i>
            </div>
            <p className="text-xl">تنمية الطفل من أولوياتنا</p>
        </div>
        <div className="shadow-lg p-5 flex flex-col items-center gap-5 rounded-lg h-40 duration-500 delay-300 opacity-0 translate-y-10">
            <div className="">
            <i className="fa-regular fa-futbol fa-2x text-[#37b8b8]"></i>
            </div>
            <p className="text-xl">نحرص على التعليم الإبداعي</p>
        </div>
        <div className="shadow-lg p-5 flex flex-col items-center gap-5 rounded-lg h-40 duration-500 delay-700 opacity-0 translate-y-10">
            <div className="">
            <i className="fa-solid fa-house fa-2x text-[#37b8b8]"></i>
            </div>
            <p className="text-xl">نراعي خيالهم لتحقيق احلامهم</p>
        </div>
        <div className="shadow-lg p-5 flex flex-col items-center gap-5 rounded-lg h-40 duration-500 delay-[1.2s] opacity-0 translate-y-10">
            <div className="">
            <i className="fa-solid fa-chalkboard-user fa-2x text-[#37b8b8]"></i>
            </div>
            <p className="text-xl">نحرص على توفير بيئة محببة للأطفال</p>
        </div>
    </div>
  </div>);
};

export default Services;
