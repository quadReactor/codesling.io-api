import ev from 'express-validation';

module.exports = {
  joiErrorHandler: (err, req, res, next) => {
    if (err instanceof ev.ValidationError) {
      return res.send({message: err.errors[0].messages});
    } else {
      next()
    }
  },
}
