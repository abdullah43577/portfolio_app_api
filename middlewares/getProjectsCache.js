const client = require('../config/redisConfig');

const getProjectsCache = async (req, res, next) => {
  // Check cache first
  const cachedData = await client.get('projects');

  if (cachedData && cachedData !== null) {
    const projects = JSON.parse(cachedData);
    return res.status(200).json({ projects });
  }

  next();
};

module.exports = getProjectsCache;
