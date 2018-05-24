/**
 *
 * s3-upload
 *
 * -> Upload assets to s3
 *
 */

var client = require('./config/s3');

const params = {
  localDir: 'build/test',
  deleteRemoved: false,
  s3Params: {
    Bucket: 'bring-hedwig',
    Prefix: 'hedwig',
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
