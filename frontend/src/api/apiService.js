const BASE_URL = "http://localhost:5000";

export const fetchDataUtama = async (nomorPengajuan) => {
  const response = await fetch(`${BASE_URL}/api/data-utama?nomor_pengajuan=${nomorPengajuan}`);
  return response.json();
};

export const fetchDataEntitas = async (idAju) => {
  const response = await fetch(`${BASE_URL}/api/data-entitas?id_aju=${idAju}`);
  return response.json();
};

export const fetchDataPungutan = async (idAju) => {
  const response = await fetch(`${BASE_URL}/api/data-pungutan?id_aju=${idAju}`);
  return response.json();
};

export const saveDataPungutan = async (pungutanData) => {
  const response = await fetch(`${BASE_URL}/api/data-pungutan`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pungutanData),
  });

  if (!response.ok) {
    throw new Error(`Server Error: ${response.status}`);
  }

  return response.json();
};
