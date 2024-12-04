const Joi = require("joi");

const pungutanSchema = Joi.object({
  id_aju: Joi.string().required(),
  incoterms: Joi.string().required(),
  valuta: Joi.string().required(),
  kurs: Joi.number().required(),
  nilai: Joi.number().required(),
  biaya_tambahan: Joi.number().required(),
  biaya_pengurang: Joi.number().required(),
  voluntary_declaration: Joi.number().required(),
  asuransi_bayar_di: Joi.string().required(),
  asuransi: Joi.number().required(),
  freight: Joi.number().required(),
  bruto: Joi.number().required(),
  netto: Joi.number().required(),
  flag_container: Joi.string().required(),
});

const validatePungutan = (req, res, next) => {
  const { error } = pungutanSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = validatePungutan;
