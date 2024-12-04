const express = require("express");
const {
  getDataPungutan,
  saveDataPungutan,
  getDataPungutanDB,
} = require("../controllers/dataPungutanController");
const validatePungutan = require("../middleware/validatePungutan");

const router = express.Router();

router.get("/", getDataPungutan);
router.post("/", validatePungutan, saveDataPungutan);
router.get("/db", getDataPungutanDB);

module.exports = router;
