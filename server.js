const { graphql } = require("graphql");
const {
  ApolloServer,
  gql,
  addMockFunctionsToSchema,
  addResolveFunctionsToSchema,
  makeExecutableSchema,
} = require("apollo-server");

const typeDefs = require("./schemaString.js");
const mocks = require("./mock.js");

let list = [
  {
    id: "a1",
  },
  {
    id: "b2",
  },
  {
    id: "c3",
  },
];

const resolvers = {
  Query: {
    linkIdList() {
      return list;
    },
  },
  Mutation: {
    addLinkId(obj, args) {
      var linkId = { id: args.id };
      list.push(linkId);
      return list;
    },

    addLinkIdArray(obj, args) {
      var array = args.input;
      var length = array.length;

      for (var i = 0; i < length; i++) {
        const linkId = { id: array[i] };
        list.push(linkId);
      }
      return list;
    },

    removeLinkIdIndex(obj, args) {
      var index = args.index
      if (index > -1) {
        list.splice(index, 1);
      }
      console.log(index)
      return list;
    },
  },
};

// Add mocks, modifies schema in place
const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: false,
});

const query = `
{
  linkIdList {
    id
  }
}
`;

const mutation1 = `
mutation {
  addLinkId(id: "1") {
    id
  }
}
`;

const mutation2 = `
mutation {
  addLinkId(input: ["1", "2"]) {
    id
  }
}
`;

const mutation3 = `
mutation {
  removeLinkId(id: "a1") {
    id
  }
}
`;

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
