import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/BreadCrumb";
import DataUtama from "../components/DataUtama";
import DataEntitas from "../components/DataEntitas";
import DataPungutan from "../components/DataPungutan";
import ImagesBanner from "../components/ImagesBanner"; 
import Footer from "../components/Footer";

const Page1 = () => {
  const [activeTab, setActiveTab] = useState("utama");

  return (
    <div className="bg-gray-300 ">
      <Navbar />
      <Breadcrumb />


      <div className="bg-white ml-4 mr-4 mt-4 p-4">

        <ImagesBanner />

        <div className="p-4">
          <div className="flex justify-between items-center">
       
            <div>
              <p className="text-lg font-bold text-gray-800">
                Data Pemberitahuan
              </p>
           
              <div className="w-10 h-1 bg-blue-600 mt-1 mb-2"></div>
            </div>

            <p className="text-sm text-gray-600">
              No Pengajuan: 20120B388FAE20240402000001 | KSWP: VALID | Jenis
              API: 02
            </p>
          </div>

          <nav className="flex  space-x-4">
            <button
              onClick={() => setActiveTab("utama")}
              className={`px-4 py-2  ${
                activeTab === "utama"
                  ? "bg-gray-50 text-gray-600 border-t border-gray-100 border-l border-r rounded-t-lg"
                  : "bg-white text-gray-300"
              }`}
            >
              Data Utama
            </button>
            <button
              onClick={() => setActiveTab("entitas")}
              className={`px-4 py-2 rounded ${
                activeTab === "entitas"
                  ? "bg-gray-50 text-gray-600 border-t border-gray-100 border-l border-r rounded-t-lg"
                  : "bg-white text-gray-300"
              }`}
            >
              Data Entitas
            </button>
            <button
              onClick={() => setActiveTab("pungutan")}
              className={`px-4 py-2 rounded ${
                activeTab === "pungutan"
                  ? "bg-gray-50 text-gray-600 border-t border-gray-100 border-l border-r rounded-t-lg"
                  : "bg-white text-gray-300"
              }`}
            >
              Data Pungutan
            </button>
          </nav>


          <div>
            {activeTab === "utama" && <DataUtama setActiveTab={setActiveTab} />}
            {activeTab === "entitas" && (
              <DataEntitas setActiveTab={setActiveTab} />
            )}
            {activeTab === "pungutan" && (
              <DataPungutan setActiveTab={setActiveTab} />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page1;
