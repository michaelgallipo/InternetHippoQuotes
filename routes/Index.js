const express = require("express");
const { check, validationResult } = require("express-validator");

const router = express.Router();
router.get("/", (req, res) => {
	res.render("form");
});

router.post(
	"/",
	[
		check("quote").isLength({ min: 1 }).withMessage("Please enter a quote"),
		// check('email')
		//   .isLength({ min: 1 })
		//   .withMessage('Please enter an email'),
	],
	(req, res) => {
		const errors = validationResult(req);
		if (errors.isEmpty()) {
			res.send("Quote Successfully Stored");
		} else {
			res.render("form", {
				title: "Quote Submission",
				errors: errors.array(),
				data: req.body,
			});
		}
	}
);

module.exports = router;
