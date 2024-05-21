

const Footer = () => {
  return (
    <div className="p-5 bg-[#37b8b8] text-white flex justify-between items-center max-md:flex-col max-md:gap-5">
    <h3 className="text-2xl">مدارس واحة الغد</h3>
    <div className="">
        <div className="flex gap-3 items-center"><i className="fa-solid fa-location-dot"></i>حي العارض <div className="">رقم التواصل : 0554007700</div></div>
        <div className="flex gap-3 items-center mt-3"><i className="fa-solid fa-location-dot"></i>حي الملقا <div className="">رقم التواصل : 0558866025</div></div>
        <div className="mt-5 text-lg">أهم الروابط :</div>
        <div className="flex items-center gap-3 mt-5">
        <a href="https://x.com/wahat_alghad?s=11&t=USVW-DcYb65dze-TShvbBA" className="text-[#37b8b8] bg-white border border-[#37b8b8] px-5 py-3 rounded-md flex items-center gap-1" target="_blank"><i className="fa-brands fa-twitter"></i></a>
        <a href="https://api.whatsapp.com/message/QZORRO2IPRYPD1?autoload=1&app_absent=0" className="text-[#37b8b8] bg-white border border-[#37b8b8] px-5 py-3 rounded-md flex items-center gap-1" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
        <a href="https://www.instagram.com/wahat_alghad?igsh=ZW1mY3l6ZnZnMHQ4" className="text-[#37b8b8] bg-white border border-[#37b8b8] px-5 py-3 rounded-md flex items-center gap-1" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        </div>
    </div>
  </div>
  );
};

export default Footer;
