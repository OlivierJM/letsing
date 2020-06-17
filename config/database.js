module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: process.env.DATABASE_URI
      },
      options: {
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
