module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        // host: env('DATABASE_HOST', '127.0.0.1'),
        // srv: env.bool('DATABASE_SRV', false),
        // port: env.int('DATABASE_PORT', 27017),
        // database: 'lyrics_db',
        // username: env('DATABASE_USERNAME', 'olivierjm'),
        // password: env('DATABASE_PASSWORD', 'ojm321'),
        // uri: "mongodb+srv://olivierjm:manoli27@letsingcluster-ylsjh.mongodb.net/lyrics_db?authSource=admin&retryWrites=true&w=majority",
        uri: process.env.DATABASE_URI
      },
      options: {
        // authenticationDatabase: env('AUTHENTICATION_DATABASE', 'admin'),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
