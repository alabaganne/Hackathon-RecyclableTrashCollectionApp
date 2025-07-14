const materialModel = require("../models/material");
const router = require("express").Router();

router.get("/", function(req, res) {
	materialModel.find(function(err, rows) {
		if(err) return res.send({ message: "error" });

		
		return res.send(rows);
	});

});

router.post("/", async function(req, res) {
	const {
		name,
		buyPrice,
		sellPrice
	} = req.body;

	if(name && buyPrice && sellPrice) {
		await materialModel.create({
			name,
			buyPrice,
			sellPrice
		});

		return res.status(201).send({
			message: "material created"
		});
	} else {
		res.status(422).send({ message: "invalid data" });
	}
});

router.delete("/:id/", function(req, res) {
	materialModel.deleteOne({
		_id: req.params.id
	});

	res.redirect("back");
})

module.exports = router;