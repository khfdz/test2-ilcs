import React, { useState, useEffect } from "react";
import { fetchDataEntitas } from "../api/apiService";

const DataEntitas = ({ setActiveTab }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDataEntitas();
        console.log(result.data);
        setData(result.data);
      } catch (err) {
        setError("Gagal mengambil data entitas");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-gray-50 p-6 border border-gray-100 rounded-lg shadow-md">
      {data && (
        <div className="grid grid-cols-1 gap-6 text-sm">

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Jenis Pemberitahuan
            </label>
            <select
              value={data.ur_entitas_pemberitahu}
              className="mt-1 block w-[30%] rounded-md border-gray-300 shadow-sm p-2"
            >
              <option>{data.ur_entitas_pemberitahu}</option>
            </select>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Jenis Identitas
              </label>
              <select
                value={data.pengusaha.ur_jenis_identitas}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              >
                <option>{data.pengusaha.ur_jenis_identitas}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                NIB
              </label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-white">
                {data.pengusaha.nib}
              </p>
            </div>
            <div className="flex items-center">
              <div className="flex-grow">
                <label className="block text-sm font-medium text-gray-700">
                  Nomor Identitas
                </label>
                <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-white">
                  {data.pengusaha.nomor_identitas}
                </p>
              </div>
              <button className="p-2 mt-6 bg-gray-700 text-white rounded-md shadow ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 16l4-4m0 0l-4-4m4 4H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nomor Identitas (16 Digit)
              </label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-white">
                {data.pengusaha.nomor_identitas}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nama Perusahaan
              </label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-white">
                {data.pengusaha.nama_identitas}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Provinsi
              </label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-white">
                {data.pengusaha.provinsi_identitas}
              </p>
              <label className="block text-sm font-medium text-gray-700">
                Jenis Identitas
              </label>
              <select
                value={data.pengusaha.provinsi_identitas}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              >
                <option>{data.pengusaha.provinsi_identitas}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Kota/Kabupaten
              </label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-white">
                {data.pengusaha.kota_identitas}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Kecamatan
              </label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-white">
                {data.pengusaha.kecamatan}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Kode Pos
              </label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-white">
                {data.pengusaha.kode_pos}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                RT/RW
              </label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-white">
                {data.pengusaha.rt_rw}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Telephone
              </label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-white">
                {data.pengusaha.tlp_identitas}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-white">
                {data.pengusaha.email_identitas}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <p className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-white">
                {data.pengusaha.status}
              </p>
            </div>
          </div>
        </div>
      )}
      <div>
        <div className="space-x-4 items-center flex justify-center mt-8">
          <button
            className="border rounded-md p-1 px-4 text-sm bg-white mt-4"
            onClick={() => setActiveTab("utama")}
          >
            Sebelumnya
          </button>
          <button
            className="border rounded-md p-1 px-4 text-sm bg-white mt-4"
            onClick={() => setActiveTab("pungutan")}
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataEntitas;
