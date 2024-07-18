// const { ApolloServer } = require("apollo-server-express");
// const express = require("express");
// const { createServer } = require("http");
// const mongoose = require("mongoose");
// const { SubscriptionServer } = require("subscriptions-transport-ws");
// const { execute, subscribe } = require("graphql");
// const schema = require("./graph_schema/graphqlSchema");
// const { graphqlUploadExpress } = require("graphql-upload");
// //const upload = require("./utils/multerConfig");
// const cloudinary = require("./controller/cloudinaryConfig");
// const multer = require('multer');
// const modelfile = require("./models/file");
// const bodyparser = require("body-parser");
// const app = express();
// app.use(bodyparser.json());

// app.use(graphqlUploadExpress());
// const httpServer = createServer(app);
// app.get("/mm", (req, res) => {
//   res.send("hello");
// });



// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./");
//   },
//   filename: (req, file, cb) => {
//     const filename = Date.now() + "_" + file.originalname;
//     cb(null, filename);
//   },
// });

// const upload = multer({ storage: storage });

// app.post("/file", upload.single("image"), async (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: "No file uploaded" });
//   }

//   const model = await new modelfile({
//     title: "nnnnnnnnnnnnn",
//     image: req.file.filename, // Store the filename directly from req.file
//   }).save();

//   res.json(model);
// });


// // let filenameVariable='';
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, "./uploads");
// //   },
// //   filename: (req, file, cb) => {
// //     const filename = Date.now() + "_" + file.originalname;
// //     filenameVariable = filename;
// //     cb(null, filename);
// //   },
// // });
// // const upload = multer({ storage: storage });
// // app.post("/file", upload.single("image"), async (req, res) => {
// //   console.log(req.file);

// //   const model = await new modelfile({
// //     title: "nnnnnnnnnnnnn",
// //     image: filenameVariable,
// //   }).save();

// //   res.json(model);
// // });

// const server = new ApolloServer({
//   schema,
//   plugins: [
//     {
//       async serverWillStart() {
//         return {
//           async drainServer() {
//             subscriptionServer.close();
//           },
//         };
//       },
//     },
//   ],
// });

// server.start().then(() => {
//   server.applyMiddleware({ app });

//   const subscriptionServer = SubscriptionServer.create(
//     {
//       schema,
//       execute,
//       subscribe,
//     },
//     {
//       server: httpServer,
//       path: server.graphqlPath,
//     }
//   );

//   mongoose
//     .connect(
//       "mongodb://graph:BjzkIBYPDe9cARVP@ac-pka8jeg-shard-00-00.ytbxqwi.mongodb.net:27017,ac-pka8jeg-shard-00-01.ytbxqwi.mongodb.net:27017,ac-pka8jeg-shard-00-02.ytbxqwi.mongodb.net:27017/firstProject?replicaSet=atlas-d5fq1b-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=AtlasCluster"
//     )
//     .then(() => {
//       console.log("Connected to MongoDB");
//       httpServer.listen(4000, () => {
//         console.log(
//           `Server ready at http://localhost:4000${server.graphqlPath}`
//         );
//         console.log(
//           `Subscriptions ready at ws://localhost:4000${server.graphqlPath}`
//         );
//       });
//     })
//     .catch((error) => {
//       console.error("Error connecting to MongoDB", error);
//     });
// });



const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const { createServer } = require("http");
const mongoose = require("mongoose");
const { SubscriptionServer } = require("subscriptions-transport-ws");
const { execute, subscribe } = require("graphql");
const schema = require("./graph_schema/graphqlSchema");
const { graphqlUploadExpress } = require("graphql-upload");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.json());
app.use(graphqlUploadExpress());

const httpServer = createServer(app);

let subscriptionServer;  // Declare subscriptionServer here to avoid reference errors later

const server = new ApolloServer({
  schema,
  introspection: true,  // Enable introspection
  playground: true,     // Enable GraphQL playground
  plugins: [
    {
      async serverWillStart() {
        return {
          async drainServer() {
            subscriptionServer.close();
          },
        };
      },
    },
  ],
});

server.start().then(() => {
  server.applyMiddleware({ app });

  subscriptionServer = SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
    },
    {
      server: httpServer,
      path: server.graphqlPath,
    }
  );

  const port = process.env.PORT || 4000;  // Use process.env.PORT if available
  mongoose
    .connect(
      "mongodb://graph:BjzkIBYPDe9cARVP@ac-pka8jeg-shard-00-00.ytbxqwi.mongodb.net:27017,ac-pka8jeg-shard-00-01.ytbxqwi.mongodb.net:27017,ac-pka8jeg-shard-00-02.ytbxqwi.mongodb.net:27017/firstProject?replicaSet=atlas-d5fq1b-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=AtlasCluster",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("Connected to MongoDB");
      httpServer.listen(port, () => {
        console.log(
          `Server ready at http://localhost:${port}${server.graphqlPath}`
        );
        console.log(
          `Subscriptions ready at ws://localhost:${port}${server.graphqlPath}`
        );
      });
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB", error);
    });
});

