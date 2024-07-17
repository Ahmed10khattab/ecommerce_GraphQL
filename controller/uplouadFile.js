// const { createWriteStream } = require('fs');
// const path = require('path');

// const storeUpload = async ({ stream, filename }) => {
//   const filePath = path.join(__dirname, '../uploads', filename);
//   return new Promise((resolve, reject) =>
//     stream
//       .pipe(createWriteStream(filePath))
//       .on('finish', () => resolve({ filename }))
//       .on('error', reject),
//   );
// };

// const processUpload = async (upload) => {
//   const { createReadStream, filename, mimetype } = await upload;
//   const stream = createReadStream();
//   const stored = await storeUpload({ stream, filename });
//   return stored;
// };

// const resolvers = {
//   Query: {
//     uploads: () => {},
//   },
//   Mutation: {
//     singleUpload: async (_, { file }) => {
//       const { filename } = await processUpload(file);
//       return {
//         filename,
//         mimetype: file.mimetype,
//         encoding: file.encoding,
//       };
//     },
//   },
// };

// module.exports = resolvers;
