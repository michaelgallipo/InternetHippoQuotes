const express = require("express");
const mongoose = require("mongoose");
const { check, validationResult } = require("express-validator");

const router = express.Router();
router.get("/", (req, res) => {
	res.render("form");
});
const Registration = mongoose.model("Registration");

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
			const registration = new Registration(req.body);
			registration.save().then(() => {
				res.send("Quote Successfully Stored");
      }); 
      .catch((err) => {
        console.log(err);
        res.send('Sorry! Something went wrong.');
      });
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
