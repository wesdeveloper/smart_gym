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
      param: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required(),
    }),
    gymSchema: Joi.object().keys({
      name: Joi.string()
        .min(3)
        .max(70)
        .required(),
      email: Joi.string()
        .email()
        .required(),
      address: Joi.object().required(),
      cnpj: Joi.string()
        .min(11)
        .max(18)
        .required(),
      personals: Joi.array(),
      user: Joi.object(),
      createdAt: Joi.date(),
      updatedAt: Joi.date(),
    }),
    gymUpdateSchema: Joi.object().keys({
      name: Joi.string()
        .min(3)
        .max(70),
      email: Joi.string().email(),
      address: Joi.object(),
      cnpj: Joi.string()
        .min(11)
        .max(18),
      personals: Joi.array(),
      user: Joi.object(),
      createdAt: Joi.date(),
      updatedAt: Joi.date(),
    }),
    gymmerSchema: Joi.object().keys({
      code: Joi.number()
        .min(1)
        .max(9999)
        .required(),
      name: Joi.string()
        .min(3)
        .max(65)
        .required(),
      phone: Joi.string()
        .min(8)
        .max(20)
        .required(),
      email: Joi.string()
        .email()
        .required(),
      born: Joi.date().required(),
      cpf: Joi.string()
        .min(11)
        .max(11)
        .required(),
      cnpj: Joi.string()
        .min(11)
        .max(20),
      height: Joi.string().min(2),
      Weight: Joi.string().min(2),
      gender: Joi.string().min(2),
      historyRecords: Joi.array(),
      address: Joi.object(),
    }),
    gymmerUpdateSchema: Joi.object().keys({
      code: Joi.number()
        .min(1)
        .max(9999)
        .required(),
      name: Joi.string()
        .min(3)
        .max(65)
        .required(),
      phone: Joi.string()
        .min(8)
        .max(20)
        .required(),
      email: Joi.string()
        .email()
        .required(),
      born: Joi.date().required(),
      cpf: Joi.string()
        .min(11)
        .max(11)
        .required(),
      cnpj: Joi.string()
        .min(11)
        .max(20),
      height: Joi.string().min(2),
      Weight: Joi.string().min(2),
      gender: Joi.string().min(2),
      historyRecords: Joi.array(),
      address: Joi.object(),
    }),
    serieSchema: Joi.object().keys({
      exercise: Joi.string()
        .min(3)
        .max(70)
        .required(),
      quantities: Joi.number()
        .min(1)
        .max(100)
        .required(),
      repeatQuantity: Joi.string()
        .min(1)
        .max(1000)
        .required(),
      target: Joi.string()
        .min(1)
        .max(10)
        .required(),
      description: Joi.string().max(250),
      createdAt: Joi.date(),
      updatedAt: Joi.date(),
    }),
    serieUpdateSchema: Joi.object().keys({
      exercise: Joi.string()
        .min(3)
        .max(70),
      quantities: Joi.number()
        .min(1)
        .max(100),
      repeatQuantity: Joi.string()
        .min(1)
        .max(1000),
      target: Joi.string()
        .min(1)
        .max(10),
      description: Joi.string().max(250),
      updatedAt: Joi.date(),
    }),
  },
};
