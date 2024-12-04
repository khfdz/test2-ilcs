const axios = require("axios");
const DataPungutanModel = require("../models/dataPungutanModel");

const getDataPungutan = async (req, res) => {
  const idAju = "04eb6a72-bb63-5aed-5e92-f58a3bfd5da2";

  if (!idAju) {
    return res.status(400).json({ message: "ID aju tidak ditemukan" });
  }

  try {
    const response = await axios.get(
      `https://api-hub.ilcs.co.id/test/v2/dataPungutan`,
      { params: { id_aju: idAju } }
    );
    res.status(200).json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Gagal mengambil data pungutan", detail: error.message });
  }
};

const saveDataPungutan = async (req, res) => {
  const {
    id_aju,
    incoterms,
    valuta,
    kurs,
    nilai,
    biaya_tambahan,
    biaya_pengurang,
    voluntary_declaration,
    asuransi_bayar_di,
    asuransi,
    freight,
    bruto,
    netto,
    flag_container,
  } = req.body;

  // Hitung nilai FOB, CIF, dan CIF Rp
  const fob =
    parseFloat(nilai || 0) +
    parseFloat(biaya_tambahan || 0) -
    parseFloat(biaya_pengurang || 0) +
    parseFloat(voluntary_declaration || 0);

  const cif =
    parseFloat(fob || 0) +
    parseFloat(asuransi || 0) +
    parseFloat(freight || 0);

  const cif_rp = parseFloat(cif || 0) * parseFloat(kurs || 0);

  try {
    // Periksa apakah data dengan id_aju sudah ada
    const existingData = await DataPungutanModel.findOne({ id_aju });

    if (existingData) {
      // Update data jika ditemukan
      const updatedPungutan = await DataPungutanModel.findOneAndUpdate(
        { id_aju },
        {
          incoterms,
          valuta,
          kurs,
          nilai,
          biaya_tambahan,
          biaya_pengurang,
          voluntary_declaration,
          asuransi_bayar_di,
          asuransi,
          freight,
          bruto,
          netto,
          flag_container,
          fob,
          cif,
          cif_rp,
        },
        { new: true, runValidators: true }
      );

      return res.status(200).json({
        message: "Data pungutan berhasil diperbarui",
        data: updatedPungutan,
      });
    }

    // Buat data baru jika tidak ditemukan
    const newPungutan = new DataPungutanModel({
      id_aju,
      incoterms,
      valuta,
      kurs,
      nilai,
      biaya_tambahan,
      biaya_pengurang,
      voluntary_declaration,
      asuransi_bayar_di,
      asuransi,
      freight,
      bruto,
      netto,
      flag_container,
      fob,
      cif,
      cif_rp,
    });

    await newPungutan.save();

    return res.status(201).json({
      message: "Data pungutan berhasil disimpan",
      data: newPungutan,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Gagal menyimpan atau memperbarui data pungutan",
      detail: error.message,
    });
  }
};




const getDataPungutanDB = async (req, res) => {
  try {
    const dataPungutan = await DataPungutanModel.find();

    if (dataPungutan && dataPungutan.length > 0) {
      return res.status(200).json(dataPungutan);
    } else {
      return res
        .status(404)
        .json({
          message: "Tidak ada data pungutan yang ditemukan di MongoDB.",
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Gagal mengambil data pungutan dari database",
        detail: error.message,
      });
  }
};

module.exports = { getDataPungutan, saveDataPungutan, getDataPungutanDB };
