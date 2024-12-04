// ActionButtons.js
import React from "react";

const ActionButtons = ({ handleCheckCompletion, handleSave, handleReset, setActiveTab }) => {
  return (
    <div>
      <div className="space-x-4 items-center flex justify-center">
        <button className="bg-yellow-400 text-black p-2 rounded-md font-semibold text-sm" onClick={handleCheckCompletion}>
          Kelengkapan Data
        </button>
        <button className="bg-blue-500 text-white p-2 rounded-md font semi-bold text-sm" onClick={handleSave}>
          Simpan
        </button>
        <button className="bg-red-500 text-white p-2 rounded-md font semi-bold text-sm" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="space-x-4 items-center flex justify-center mt-8">
        <button
          className="border rounded-md p-1 px-4 text-sm bg-white mt-4"
          onClick={() => setActiveTab("utama")}
        >
          Sebelumnya
        </button>
        <button
          className="border rounded-md p-1 px-4 text-sm bg-white mt-4 opacity-50 cursor-not-allowed"
          disabled
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
