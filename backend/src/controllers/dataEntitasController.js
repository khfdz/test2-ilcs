const axios = require("axios");

const getDataEntitas = async (req, res) => {
    const idAju = "04eb6a72-bb63-5aed-5e92-f58a3bfd5da2";

    if (!idAju) {
        return res.status(400).json({ message: "ID aju tidak ditemukan" });
    }

    try {
        const response = await axios.get(`https://api-hub.ilcs.co.id/test/v2/dataEntitas`, {
            params: { id_aju: idAju },
        });

        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Gagal mengambil data entitas", detail: error.message });
    }
};

module.exports = { getDataEntitas };