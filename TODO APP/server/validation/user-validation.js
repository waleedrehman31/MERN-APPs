const Joi = require("joi");

const registerValidation = (data) => {
	const userValidationSchema = Joi.object({
		name: Joi.string().min(3).max(30).required(),

		email: Joi.string().email().required(),

		password: Joi.string().min(6).required(),
	});
	return userValidationSchema.validate(data);
};

const loginValidation = (data) => {
	const userValidationSchema = Joi.object({
		
		email: Joi.string().email().required(),

		password: Joi.string().min(6).required(),
	});
	return userValidationSchema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
