import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: process.env.CC_NAME,
  api_key: process.env.C_KEY,
  api_secret: process.env.C_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "OpenToWork",
    allowedFormats: ["jpeg", "png", "jpg"],
  },
});

export { cloudinary, storage };
