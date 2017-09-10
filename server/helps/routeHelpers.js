const Joi = require('joi');

module.exports = {
	validateParam: (schema, name) => (req, res, next) => {
		const result = Joi.validate({ param: req.params[name] }, schema);

		if (result.error) {
			return res.status(400).json(result.error);
		}
		if (!req.value) {
			req.value = {};
		}
		if (!req.value.params) {
			req.value.params = {};
		}

		req.value.params[name] = result.value.param;
		return next();
	},
	validateBody: schema => (req, res, next) => {
		const result = Joi.validate(req.body, schema);
		if (result.error) {
			return res.status(400).json(result.error);
		}
		if (!req.value) {
			req.value = {};
		}
		if (!req.value.body) {
			req.value.body = {};
		}
		req.value.body = result.value;
		return next();
	},

	schemas: {
		idSchema: Joi.object().keys({
			param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
		}),
		serieSchema: Joi.object().keys({
			num_ap: Joi.string().required(),
			exercise: Joi.string().required(),
			quantities: Joi.number().required(),
			repeatQuantity: Joi.string().required(),
		}),
		serieUpdateSchema: Joi.object().keys({
			num_ap: Joi.string(),
			exercise: Joi.string(),
			quantities: Joi.number(),
			repeatQuantity: Joi.string(),
		}),
	},
};
