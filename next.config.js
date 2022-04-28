const path = require("path");
const fs = require('fs');

module.exports = {
  serverRuntimeConfig: {
    secret:
      "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING",
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'development'
        ? 'https://schools-calendar.vercel.app/api' // development api
        : 'https://schools-calendar.vercel.app/api' // production api
},
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  i18n: {
    locales: ["pt-BR", "en", "es", "jp"],
    defaultLocale: "pt-BR",
    localeDetection: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
        // reset users json on codesandbox every 10 minutes because 
        // the same json data is viewed by all users
        setInterval(() => {
            const defaultUsers = [];
            fs.writeFileSync('data/users.json', JSON.stringify(defaultUsers, null, 4));
            console.log('users reset to default in next.config.js');
        }, 10 * 60 * 1000);
    }

    return config;
}
};
