import React from "react";

const DataInputFields = ({ data, setData }) => {
  return (
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
      </div>

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
  );
};

export default DataInputFields;