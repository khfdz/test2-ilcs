const express = require("express");
const { getDataEntitas } = require("../controllers/dataEntitasController");
const router = express.Router();

router.get("/", getDataEntitas);

module.exports = router;
