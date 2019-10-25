const express = require("express");
const router = express.Router({ mergeParams: true });

router.get("/", function(req, res) {
  res.json([{ message: "hi" }, { message: "bye" }]);
});

router.get("/:id", function(req, res) {
  const id = req.params.id;
  res.json({ id, message: "hi" });
});

router.post("/", function(req, res) {
  res.json({ message: "hola1" });
});

router.put("/:id", function(req, res) {
  const id = req.params.id;
  res.json({ message: "hola2" });
});

module.exports = router;
