const express = require("express");
const router = express.Router({ mergeParams: true });
const service = require("../services/example");

router.get("/", function(req, res) {
  res.json([{ message: "hi" }, { message: "bye" }]);
});

router.get("/:id", function(req, res) {
  const id = req.params.id;
  res.json({ id, message: "hi" });
});

router.post("/", function(req, res) {
  const data = req.body;
  service
    .createExample(data)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log(err);
      res.json({ message: "BOOM!" });
    });
});

router.put("/:id", function(req, res) {
  const id = req.params.id;
  res.json({ message: "hola2" });
});

module.exports = router;
