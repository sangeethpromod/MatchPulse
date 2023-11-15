require("dotenv").config(); // Add this line at the top

const aws = require("aws-sdk");

const accessKeyId = process.env.AWS_ACCESS_KEY_ID; // Use process.env to access environment variables
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

aws.config.update({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
});

const s3 = new aws.S3();

const uploadImages = async (files) => {
  const uploadPromises = files.map(async (file) => {
    const { originalname, buffer } = file;
    const params = {
      Bucket: "sangeeth-matchpulse",
      ACL: "public-read",
      ContentType: file.mimetype,
      Key: originalname,
      Body: buffer,
    };

    return s3.upload(params).promise();
  });

  const uploadedFiles = await Promise.all(uploadPromises);

  return uploadedFiles.map((file) => file.Location);
};

const uploadImage = async (req, res) => {
  try {
    const imageUrls = await uploadImages(req.files);

    return res.status(200).json({
      type: "success",
      data: {
        message: "Images uploaded successfully",
        data: {
          imageUrls: imageUrls,
        },
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      type: "error",
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  uploadImage,
};
