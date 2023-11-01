const path = require("path");

module.exports = {
  // ... other Webpack configuration settings ...
  cloud_name: "dtuuyvimi",
  api_key: "919568649561631",
  api_secret: "jwYsLMFr9Szxr8CTQ4CiSns49Zw",
  resolve: {
    fallback: {
      url: require.resolve("url/"),
    },
  },
};
