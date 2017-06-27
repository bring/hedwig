/**
 *
 * Env-checker
 *
 * -> Checks that user has added an .env file
 * -> Alerts user if not and aborts task
 *
 */

require('dotenv').config();


if (process.env.S3_BUCKET_KEY) {
  console.log(".env file found, proceeding...");
} else {
  throw new Error("You do not have an .env file present! Check the readme!");
  process.exit(1);
}
