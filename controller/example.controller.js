const express = require("express");
const router = express.Router({ mergeParams: true });
const service = require("../services/example.service");
const validator = require("../route-validation/example.validation");

//Get all - paginate
router.get("/", function(req, res) {
  res.json([{ message: "hi" }, { message: "bye1" }]);
});

// Get by Id
router.get("/:id", function(req, res) {
  const id = req.params.id;
  service
    .findById(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => res.json({ err }));
});

// Create new one.
router.post("/", validator.create, function(req, res) {
  const data = req.body;
  service
    .createExample(data)
    .then(response => res.json(response))
    .catch(err => res.json({ message: "BOOM!",err }));
});

//Update one
router.put("/:id", function(req, res) {
  const id = req.params.id;
  res.json({ message: "hola2" });
});

// DELETE
router.delete("/:id", function(req, res) {
  const id = req.params.id;
  service
    .remove(id)
    .then(response => res.json(response))
    .catch(err => res.json(err));
});

module.exports = router;
