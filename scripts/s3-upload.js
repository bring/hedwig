/**
 * Uplad to S3
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

const uploader = client.uploadDir(params);

uploader.on('error', (err) => {
  console.error('Unable to upload... 😞', err.stack);
});

uploader.on('progress', () => {
  console.log('Progress 🔨', uploader.progressAmount, uploader.progressTotal);
});

uploader.on('end', () => {
  console.log('Done uploading to S3 🎉');
});
