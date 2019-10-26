const express = require("express");
const router = express.Router({ mergeParams: true });
const service = require("../services/example.service");
const validator = require("../route-validation/example.validation");
const { paginator } = require("../route-validation/paginator.validation");
//Get all - paginate
router.get("/", paginator, function(req, res) {
  const limit = req.query.limit;
  const offset = req.query.offset;
  service.paginate(limit, offset).then(data => {
    res.json(data);
  });
});

// Get by Id
router.get("/:id", function(req, res) {
  const id = req.params.id;
  service
    .findExampleById(id)
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
    .catch(err => res.json({ message: "BOOM!", err }));
});

//Update one
router.put("/:id", validator.update, function(req, res) {
  const id = req.params.id;
  const data = req.body;
  service
    .updateExample(id, data)
    .then(exampleDb => {
      res.json(exampleDb);
    })
    .catch(err => {
      res.json(err);
    });
});

// DELETE
router.delete("/:id", function(req, res) {
  const id = req.params.id;
  service
    .removeExample(id)
    .then(response => res.json(response))
    .catch(err => res.json(err));
});

module.exports = router;
