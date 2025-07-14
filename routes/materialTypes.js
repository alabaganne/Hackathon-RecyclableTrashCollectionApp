let router = require("express").Router();

router.get("/", function(req, res) {
	res.send("admin material types");
});

module.exports = router;