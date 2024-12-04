import React from "react";
import Image1 from "../images/images1.svg";
import Image2 from "../images/images2.svg";
import Image3 from "../images/images3.svg";
import Image4 from "../images/images4.svg";
import Image5 from "../images/images5.svg";

const ImagesBanner = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex justify-center space-x-12 mt-4 text-xs">
        <div className="flex flex-col items-center">
          <img src={Image1} alt="Pemberitahuan" className="w-12" />
          <span className="mt-2 text-center text-red-500">Pemberitahuan</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={Image2} alt="Transportasi" className="w-12 opacity-50" />
          <span className="mt-2 text-center text-gray-500">Transportasi</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={Image3} alt="Dokumen" className="w-12 opacity-50" />
          <span className="mt-2 text-center text-gray-500">Dokumen</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={Image4} alt="Komoditi" className="w-12 opacity-50" />
          <span className="mt-2 text-center text-gray-500">Komoditi</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={Image5} alt="Layanan" className="w-12 opacity-50" />
          <span className="mt-2 text-center text-gray-500">Layanan</span>
        </div>
      </div>
    </div>
  );
};

export default ImagesBanner;
