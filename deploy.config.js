module.exports = {
    app: [
        {
            name: 'xiaomi_mobile_pro',
            script: 'app.js',
            env: {
                COMMON_VARIABLE: 'true'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ],

    deploy: {
        production: {
            user: 'root',
            host: '101.37.175.57',
            ref: 'origin/master',
            repo: 'https://github.com/zhangcycoder/xiaomipro.git',
            path: '/www/xiaomi_mobile_pro/production',
            'pre-deploy': 'git fetch --all',
            'post-deploy': 'npm install && npm run prd && pm2 startOrRestart deploy.config.js --env production'
        }
    }
}