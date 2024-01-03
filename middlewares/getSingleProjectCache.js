const client = require('../config/redisConfig');

const getSingleProjectCache = async (req, res, next) => {
  const { id } = req.params;
  // Check cache first
  const cachedData = await client.get(id);

  if (cachedData && cachedData !== null) {
    const project = JSON.parse(cachedData);
    return res.status(200).json({ project });
  }

  next();
};

module.exports = getSingleProjectCache;
