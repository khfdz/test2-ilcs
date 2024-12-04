import React, { useState, useEffect } from "react";
import { fetchDataUtama } from "../api/apiService";

const DataUtama = ({ setActiveTab }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDataUtama();
        setData(result.data);
      } catch (err) {
        setError("Gagal mengambil data utama");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-gray-50 p-6 border border-gray-100">
      {data && (
        <form>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nomor Pengajuan
              </label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 text-sm bg-white">
                {data.nomor_pengajuan}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tanggal Pengajuan
              </label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 text-sm bg-white">
                {data.tanggal_pengajuan}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nomor Pendaftaran
              </label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 text-sm bg-white">
                {data.nomor_pendaftaran
                  ? data.nomor_pendaftaran
                  : "Nomor Pendaftaran"}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tanggal Pendaftaran
              </label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 text-sm bg-white">
                {data.tanggal_pendaftaran
                  ? data.tanggal_pendaftaran
                  : "Tanggal Pendaftaran"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Kantor Pabean
              </label>
              <select
                value={data.ur_pabean_asal}
                className="mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm p-2"
              >
                <option>{data.ur_pabean_asal}</option>

              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                SKEP Fasilitas
              </label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 text-sm bg-white">
                {data.kd_skep_fasilitas}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Jenis PIB
              </label>
              <select
                value={data.ur_jenis_pib}
                className="mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm p-2"
              >
                <option>{data.ur_jenis_pib}</option>

              </select>
            </div>
          </div>


          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Jenis Impor
              </label>
              <select
                value={data.ur_jenis_impor}
                className="mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm p-2"
              >
                <option>{data.ur_jenis_impor}</option>
 
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Cara Pembayaran
              </label>
              <select
                value={data.ur_cara_bayar}
                className="mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm p-2"
              >
                <option>{data.ur_cara_bayar}</option>

              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Transaksi
              </label>
              <select
                value={data.ur_transaksi_impor}
                className="mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm p-2"
              >
                <option>{data.ur_transaksi_impor}</option>

              </select>
            </div>
          </div>
        </form>
      )}

      <div>
        <div className="space-x-4 items-center flex justify-center mt-8">
          <button
            className="border rounded-md p-1 px-4 text-sm bg-white mt-4 opacity-50 cursor-not-allowed"
            disabled
          >
            Sebelumnya
          </button>
          <button
            className="border rounded-md p-1 px-4 text-sm bg-white mt-4"
            onClick={() => setActiveTab("entitas")}
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataUtama;
