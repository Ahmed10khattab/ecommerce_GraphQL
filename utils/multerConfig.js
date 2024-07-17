// const cloudinary = require('../controller/cloudinaryConfig');
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
// const multer = require('multer');

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     // folder: 'your_folder_name', // Optional: specify a folder in your Cloudinary account
//   //  format: async (req, file) => 'PNG', // Supports promises as well
//     public_id: (req, file) => file.originalname.split('.')[0], // Remove file extension for public ID
//   },
// });

// const upload = multer({ storage: storage });

// module.exports = upload;




const multer = require('multer');
const path = require('path');

// Configure storage for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../uploads'); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique file name
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
