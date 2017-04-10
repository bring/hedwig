/**
 * S3
 */

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

module.exports = client;
