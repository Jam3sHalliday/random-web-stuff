exports.asyncHandler = (func) => (req, res, n) => func(req, res, n).catch(n)
