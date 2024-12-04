const axios = require("axios");

const getDataUtama = async (req, res) => {
  const nomorPengajuan = "20120B388FAE20240402000001";

  if (!nomorPengajuan) {
    return res.status(400).json({ message: "Nomor pengajuan tidak ditemukan" });
  }

  try {
    const response = await axios.get(
      `https://api-hub.ilcs.co.id/test/v2/dataUtama`,
      {
        params: { nomor_pengajuan: nomorPengajuan },
      }
    );

    const modifiedResponse = {
      ...response.data,
      KSWP: "VALID",
      Jenis_API: "02",
    };

    res.status(200).json(modifiedResponse);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Gagal mengambil data utama", detail: error.message });
  }
};

module.exports = { getDataUtama };
