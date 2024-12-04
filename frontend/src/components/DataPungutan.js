import React, { useState, useEffect } from "react";
import { fetchDataPungutan, saveDataPungutan } from "../api/apiService";
import Swal from 'sweetalert2';

const DataPungutan = ({ setActiveTab }) => {
  const [data, setData] = useState({
    ur_incoterm: "",
    ur_valuta: "",
    nilai_kurs: "",
    nilai_incoterm: "",
    biaya_tambahan: "",
    biaya_pengurang: "",
    tarif_vd: false,
    ur_asuransi: "",
    nilai_asuransi: "",
    freight: "",
    nilai_pabean: "",
    nilai_pabean_idr: "",
    berat_kotor: "",
    berat_bersih: "",
    ur_flag_curah: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDataPungutan();
        setData(result.data);
      } catch (err) {
        setError("Gagal mengambil data pungutan");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSave = async () => {
    try {
      await saveDataPungutan(data);
      Swal.fire("Berhasil", "Data berhasil disimpan", "success");
    } catch (err) {
      Swal.fire("Gagal", "Gagal menyimpan data", "error");
    }
  };

  const handleReset = () => {
    setData({
      ur_incoterm: "",
      ur_valuta: "",
      nilai_kurs: "",
      nilai_incoterm: "",
      biaya_tambahan: "",
      biaya_pengurang: "",
      tarif_vd: false,
      ur_asuransi: "",
      nilai_asuransi: "",
      freight: "",
      nilai_pabean: "",
      nilai_pabean_idr: "",
      berat_kotor: "",
      berat_bersih: "",
      ur_flag_curah: ""
    });
  };

  const handleCheckCompletion = () => {
    const allFieldsFilled = Object.values(data).every(value => value !== "" && value !== null);
    if (allFieldsFilled) {
      Swal.fire("Lengkap", "Semua data telah diisi", "success");
    } else {
      Swal.fire("Belum Lengkap", "Masih ada data yang belum diisi", "warning");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-gray-50 p-6 border border-gray-100 rounded-lg shadow-md">
      <div>
        <div className="grid grid-cols-3 gap-6 text-sm mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Incoterms *
            </label>
            <input
              type="text"
              value={data.ur_incoterm}
              onChange={(e) => setData({ ...data, ur_incoterm: e.target.value })}
              className="mt-1 block w-full bg-white rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Valuta
            </label>
            <input
              type="text"
              value={data.ur_valuta}
              onChange={(e) => setData({ ...data, ur_valuta: e.target.value })}
              className="mt-1 block w-full bg-white rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Kurs
            </label>
            <input
              type="text"
              value={data.nilai_kurs}
              onChange={(e) => setData({ ...data, nilai_kurs: e.target.value })}
              className="mt-1 block w-full bg-white rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4 text-sm mb-6">
          <div className="flex flex-col flex-grow">
            <label className="block text-sm font-medium text-gray-700">
              Nilai *
            </label>
            <input
              type="text"
              value={data.nilai_incoterm}
              onChange={(e) => setData({ ...data, nilai_incoterm: e.target.value })}
              className="mt-1 block w-full  rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          <div className="text-xl font-bold text-gray-700 mt-5">+</div>

          <div className="flex flex-col flex-grow">
            <label className="block text-sm font-medium text-gray-700">
              Biaya Tambahan
            </label>
            <input
              type="text"
              value={data.biaya_tambahan}
              onChange={(e) => setData({ ...data, biaya_tambahan: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          <div className="text-xl font-bold text-gray-700 mt-5">-</div>

          <div className="flex flex-col flex-grow">
            <label className="block text-sm font-medium text-gray-700">
              Biaya Pengurang
            </label>
            <input
              type="text"
              value={data.biaya_pengurang}
              onChange={(e) => setData({ ...data, biaya_pengurang: e.target.value })}
              className="mt-1 block w-full  rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          <div className="text-xl font-bold text-gray-700 mt-5">+</div>

          <div className="flex items-center space-x-2 flex-grow">
            <div className="flex flex-col w-full">
              <label className="block text-sm font-medium text-gray-700">
                <input
                  type="checkbox"
                  checked={data.tarif_vd}
                  onChange={(e) => setData({ ...data, tarif_vd: e.target.checked })}
                  className="form-checkbox mr-2"
                />
                Voluntary Declaration
              </label>
              <input
                type="text"
                value={data.tarif_vd ? data.tarif_vd : 0}
                onChange={(e) => setData({ ...data, tarif_vd: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
          </div>

          <div className="text-xl font-bold text-gray-700 mt-4">=</div>

          <div className="flex flex-col flex-grow">
            <label className="block text-sm font-medium text-gray-700">
              Nilai FOB
            </label>
            <input
              type="text"
              value={data.fob || ""}
              onChange={(e) => setData({ ...data, fob: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-6 text-sm mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Asuransi Bayar di
              </label>
              <input
                type="text"
                value={data.ur_asuransi}
                onChange={(e) => setData({ ...data, ur_asuransi: e.target.value })}
                className="mt-1 block w-full bg-white rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Asuransi
              </label>
              <input
                type="text"
                value={data.nilai_asuransi}
                onChange={(e) => setData({ ...data, nilai_asuransi: e.target.value })}
                className="mt-1 block w-full bg-white rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Freight
              </label>
              <input
                type="text"
                value={data.freight}
                onChange={(e) => setData({ ...data, freight: e.target.value })}
                className="mt-1 block w-full bg-white rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-5 gap-6 text-sm mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                CIF
              </label>
              <input
                type="text"
                value={data.nilai_pabean}
                onChange={(e) => setData({ ...data, nilai_pabean: e.target.value })}
                className="mt-1 block w-full bg-white rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                CIF (Rp)
              </label>
              <input
                type="text"
                value={data.nilai_pabean_idr}
                onChange={(e) => setData({ ...data, nilai_pabean_idr: e.target.value })}
                className="mt-1 block w-full bg-white rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Berat Bruto
              </label>
              <input
                type="text"
                value={data.berat_kotor}
                onChange={(e) => setData({ ...data, berat_kotor: e.target.value })}
                className="mt-1 block w-full bg-white rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Berat Netto
              </label>
              <input
                type="text"
                value={data.berat_bersih}
                onChange={(e) => setData({ ...data, berat_bersih: e.target.value })}
                className="mt-1 block w-full bg-white rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Flag Kontainer
              </label>
              <input
                type="text"
                value={data.ur_flag_curah}
                onChange={(e) => setData({ ...data, ur_flag_curah: e.target.value })}
                className="mt-1 block w-full bg-white rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
          </div>
        </div>
      </div>

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

      <div>
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
    </div>
  );
};

export default DataPungutan;
