const { ApolloServer, gql } = require("apollo-server");
const dotEnv = require("dotenv");
// const jwt = require("jsonwebtoken");

const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs");
const { connection } = require("./database/util");

dotEnv.config();

connection();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

apolloServer.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
