import React, { useState, useEffect } from "react";
import { fetchDataPungutan, saveDataPungutan } from "../api/apiService";
import Swal from "sweetalert2";
import DataInputFields from "./DataInputFields";
import ActionButtons from "./ActionButtons";

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
    ur_flag_curah: "",
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
    console.log("Data to be saved:", data);
    const dataToSend = {
      id_aju: data.id_aju,
      incoterms: data.ur_incoterm,
      valuta: data.ur_valuta,
      kurs: parseFloat(data.nilai_kurs),
      nilai: parseFloat(data.nilai_incoterm),
      biaya_tambahan: parseFloat(data.biaya_tambahan),
      biaya_pengurang: parseFloat(data.biaya_pengurang),
      voluntary_declaration: parseFloat(data.tarif_vd) || 0,
      asuransi_bayar_di: data.ur_asuransi,
      asuransi: parseFloat(data.nilai_asuransi),
      freight: parseFloat(data.freight),
      bruto: parseFloat(data.berat_kotor),
      netto: parseFloat(data.berat_bersih),
      flag_container: data.ur_flag_curah,
    };
    console.log("Data being sent:", dataToSend);
    try {
      await saveDataPungutan(dataToSend);
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
      ur_flag_curah: "",
    });
  };

  const handleCheckCompletion = () => {
    console.log("Current data state for completion check:", data);
    const allFieldsFilled =
      data.ur_incoterm !== "" &&
      data.ur_valuta !== "" &&
      data.nilai_kurs !== "" &&
      data.nilai_incoterm !== "" &&
      data.biaya_tambahan !== "" &&
      data.biaya_pengurang !== "" &&
      data.tarif_vd !== null &&
      data.ur_asuransi !== "" &&
      data.nilai_asuransi !== "" &&
      data.freight !== "" &&
      data.nilai_pabean !== "" &&
      data.nilai_pabean_idr !== "" &&
      data.berat_kotor !== "" &&
      data.berat_bersih !== "" &&
      data.ur_flag_curah !== "";
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
      <DataInputFields data={data} setData={setData} />
      <ActionButtons
        handleCheckCompletion={handleCheckCompletion}
        handleSave={handleSave}
        handleReset={handleReset}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default DataPungutan;
