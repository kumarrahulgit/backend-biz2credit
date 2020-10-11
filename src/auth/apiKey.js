const express = require('express');

const router = express.Router();

router.use(
    validator(schema.apiKey, ValidationSource.HEADER),
    asyncHandler(async (req, res, next) => {
      req.apiKey = req.headers['x-api-key'].toString();
  
      const apiKey = await ApiKeyRepo.findByKey(req.apiKey);
      Logger.info(apiKey);
  
      if (!apiKey) throw new ForbiddenError();
      return next();
    }),
);

module.exports = router;