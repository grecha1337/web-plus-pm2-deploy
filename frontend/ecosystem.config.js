require('dotenv').config();

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps: [{
    name: 'fronted-mesto',
    script: './src/index.js',
  }],

  // Настройка деплоя
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'https://github.com/grecha1337/web-plus-pm2-deploy',
      path: DEPLOY_PATH,
      'post-deploy': 'cd current/fronted && npm i && npm run build',
    },
  },
};
