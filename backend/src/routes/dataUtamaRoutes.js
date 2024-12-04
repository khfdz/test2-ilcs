const express = require("express");
const { getDataUtama } = require("../controllers/dataUtamaController");
const router = express.Router();

router.get("/", getDataUtama);

module.exports = router;
