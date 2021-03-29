const { ApolloServer } = require('apollo-server');
const connectDB = require("./config/db");
const resolvers = require("./resolvers/resolvers");
const models = require("./models/Tasks");
const fs = require('fs');
const path = require('path');
// const date = require('graphql-iso-date');



connectDB();

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  ),
  resolvers,
  context :{models}
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );
