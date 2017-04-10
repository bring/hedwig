require('dotenv').config();

/**
 * Node client for upload to S3
 * https://github.com/andrewrk/node-s3-client
 */

var s3 = require('s3');

/**
 * Create client
 */

var client = s3.createClient({
  maxAsyncS3: 20,
  s3RetryCount: 3,
  s3RetryDelay: 1000,
  multipartUploadThreshold: 20971520,
  multipartUploadSize: 15728640,
  s3Options: {
    accessKeyId: process.env.S3_BUCKET_KEY,
    secretAccessKey: process.env.S3_BUCKET_KEY_SECRET,
    region: process.env.S3_BUCKET_REGION,
    signatureVersion: 'v2',
  },
});

/**
 * Set params
 */

var params = {
  localFile: "build/main.css",
  s3Params: {
    Bucket: "hedwig-cdn",
    Key: "dist/main.css",
  },
};

var uploader = client.uploadFile(params);

/**
 * Upload file
 */

uploader.on('error', function(err) {
  console.error("unable to sync:", err.stack);
});

uploader.on('progress', function() {
  console.log("progress", uploader.progressAmount, uploader.progressTotal);
});

uploader.on('end', function() {
  console.log("done uploading");
});
