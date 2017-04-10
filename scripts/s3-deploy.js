require('dotenv').config();

/**
 * Node client for upload to S3
 * https://github.com/andrewrk/node-s3-client
 */

const s3 = require('s3');

/**
 * The s3 pacakge is using an old aws-sdk, so we need to set up our own.
 */

const AWS = require('aws-sdk');

/**
 * Create client
 */

const awsS3Client = new AWS.S3({
  accessKeyId: process.env.S3_BUCKET_KEY,
  secretAccessKey: process.env.S3_BUCKET_KEY_SECRET,
  region: process.env.S3_BUCKET_REGION,
});

const client = s3.createClient({
  s3Client: awsS3Client,
});

/**
 * Set params
 */

const params = {
  localDir: 'build',
  deleteRemoved: true,
  s3Params: {
    Bucket: 'hedwig-cdn',
    Prefix: 'test',
  },
};

const uploader = client.uploadDir(params);

uploader.on('error', (err) => {
  console.error('unable to sync:', err.stack);
});

uploader.on('progress', () => {
  console.log('progress', uploader.progressAmount, uploader.progressTotal);
});

uploader.on('end', () => {
  console.log('done uploading');
});
