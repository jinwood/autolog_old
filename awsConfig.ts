import AWS from "aws-sdk";

const awsConfig = {
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
};

console.log(awsConfig);

AWS.config.update(awsConfig);

const S3 = new AWS.S3();

console.log("s2", S3);

export default S3;
