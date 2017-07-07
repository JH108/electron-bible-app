module.exports = {
  apps: [{
    name: 'reader-for-esv',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-86-48-224.compute-1.amazonaws.com',
      key: '~/.ssh/esvbible.pem',
      ref: 'origin/master',
      repo: 'git@github.com:JH108/reader-for-esv.git',
      path: '/home/ubuntu/reader-for-esv',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}