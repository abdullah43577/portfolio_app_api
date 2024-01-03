require('dotenv').config();
const { createClient } = require('redis');
const { REDIS_CLIENT } = process.env;

const client = createClient({
  url: `rediss://default:${REDIS_CLIENT}@us1-top-collie-38455.upstash.io:38455`,
});

(async () => {
  client.on('error', (err) => {
    console.log('Redis Client Error', err);
  });
  client.on('ready', () => console.log('Redis is ready'));

  await client.connect();

  await client.ping();
})();

module.exports = client;
