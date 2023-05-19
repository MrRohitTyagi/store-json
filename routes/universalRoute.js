const express = require("express");

const router = express.Router();
const {
  deleteData,
  fetchData,
  updateData,
} = require("../controllers/universalController");

router.route("/data-fetch/:key").get(fetchData);
router.route("/data-save").post(updateData);
router.route("/data-delete/:key").delete(deleteData);

module.exports = router;
