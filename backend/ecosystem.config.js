require('dotenv').config();

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps: [{
    name: 'api-service',
    script: './dist/app.js',
  }],

  // Настройка деплоя
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'https://github.com/grecha1337/web-plus-pm2-deploy',
      path: DEPLOY_PATH,
      'pre-deploy-local': `scp --include='*.env' ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}`,
      'post-deploy': 'cd backend && npm i && npm run build && npm run start',
    },
  },
};
