const { graphql } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { addMocksToSchema, mockServer } = require("@graphql-tools/mock");
const express = require("express");

const typeDefs = require("./schemaString.js")
const mock = require("./mock.js")

// Make a GraphQL schema with no resolvers
const schema = makeExecutableSchema({ typeDefs });

// Add mocks, modifies schema in place
const server = mockServer(typeDefs, mock);

const query = `

`;

server.query(query).then((response) => {
  console.log(response);
});

const app = express();
app.use('/graphql' , graphqlHTTP({ schema: schema, graphiql:true }));
app.listen(5000, () => console.log('Server Running'))