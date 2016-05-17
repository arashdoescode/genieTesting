module.exports = {
  // App Settings
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://root:abc123@ds017862.mlab.com:17862/geniethemeanie',
  // MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/geniethemeanie',
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'FINYISTHEGREATEST',

  // OAuth 2.0
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || 'da3a3e047d213974a72a6043afa87bb1',

};
