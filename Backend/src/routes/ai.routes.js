const express = require("express");
const aiController = require("../controllers/ai.controller");       //routes logic contain nhi krte, wo sirf request ko forward krte h, logic to controllers me hota hai
const router = express.Router();              // Creates a mini-app "router"

router.post("/get-review", aiController.getReview);

module.exports = router;