module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3a5eccf9fa70b15178998c832582955b'),
  },
});
