module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    
    // First application
    {
      name      : 'myapp',
      script    : 'app.js',
      cwd: '/home/webApps/suyunfe/current', 
      // error_file: '/home/webApps/suyunfe/logs/app.err.log',
      // out_file: '/home/webApps/suyunfe/logs/app.out.log',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'root',
      host : '47.95.6.132',
      ref  : 'origin/master',
      repo : 'git@github.com:antwang/pm2deploy.git',
      path : '/home/webApps/suyunfe',
      'pre-setup' : "echo 'commands or local script path to be run on the host before the setup process starts'",
      'post-setup': "echo 'commands or a script path to be run on the host after cloning the repo'",
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env production',
      'pre-deploy-local' : "echo 'This is a local executed command'"
    },
    dev : {
      user : 'root',
      host : '47.95.6.132',
      ref  : 'origin/master',
      repo : 'git@github.com:antwang/pm2deploy.git',
      path : '/home/webApps/suyunfe',
      'post-deploy' : 'npm install && pm2 reload current/ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
