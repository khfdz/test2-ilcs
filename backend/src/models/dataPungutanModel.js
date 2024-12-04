const mongoose = require("mongoose");

const DataPungutanSchema = new mongoose.Schema(
  {
    id_aju: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    incoterms: {
      type: String,
      required: true,
    },
    valuta: {
      type: String,
      required: true,
    },
    kurs: {
      type: Number,
      required: true,
    },
    nilai: {
      type: Number,
      required: true,
    },
    biaya_tambahan: {
      type: Number,
      required: true,
    },
    biaya_pengurang: {
      type: Number,
      required: true,
    },
    voluntary_declaration: {
      type: Number,
      required: true,
    },
    asuransi_bayar_di: {
      type: String,
      required: true,
    },
    asuransi: {
      type: Number,
      required: true,
    },
    freight: {
      type: Number,
      required: true,
    },
    bruto: {
      type: Number,
      required: true,
    },
    netto: {
      type: Number,
      required: true,
    },
    flag_container: {
      type: String,
      required: true,
    },
    fob: {
      type: Number,
    },
    cif: {
      type: Number,
    },
    cif_rp: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DataPungutan", DataPungutanSchema);
