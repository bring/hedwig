/**
 * Download from S3
 */

var client = require('./config/s3');

const params = {
  localDir: 'build',
  deleteRemoved: false,
  s3Params: {
    Bucket: 'hedwig-cdn',
    Prefix: 'hewdig',
  },
};

const download = client.downloadDir(params);

download.on('error', (err) => {
  console.error('Unable to download... 😞', err.stack);
});

download.on('progress', () => {
  console.log('Progress 🔨', download.progressAmount, download.progressTotal);
});

download.on('end', () => {
  console.log('Done downloading from S3 🎉');
});
