module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://34.142.81.181:1337'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '4fb050c5d29890ba3fc71f114e18a432bb39b1425fbde79839bffac3ae02c97a64b3ee19af16b13ec9df9cd6c34a4936f7484545f4be4da3d88ba9b3c6be781e'),
    },
  },
});
