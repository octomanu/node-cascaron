var router = require("express").Router({ mergeParams: true });

router.use("/example", require("./controller/example"));

module.exports = router;
