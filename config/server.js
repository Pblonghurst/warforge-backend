module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://34.142.81.181'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
