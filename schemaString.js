// Fill this in with the schema string
const typeDefs = `
  scalar Date
  scalar DateTime

  type LinkId {
    id: String!
  }

  type Query {
    linkIdList: [LinkId]!
  }

  type Mutation {
    addLinkId(id: String!): [LinkId]!
    
    addLinkIdArray(input: [String]!): [LinkId]!

    removeLinkIdIndex(index: Int!): [LinkId]!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;


module.exports = typeDefs;
