const customError = require("../utils/customError");

function errorFunc(err, req, res, next) {
  next();
}

//
