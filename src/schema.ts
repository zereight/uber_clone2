import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from "path";

const allTypes: GraphQLSchema[] = fileLoader(
  path.join(__dirname, "./api/**/*.graphql")  // graphql 들을 string[]으로 저장
);


const allResolvers: string[] = fileLoader(
  path.join(__dirname, "./api/**/*.resolvers.*") // resolver 들을 string[]으로 저장
);

const mergedTypes = mergeTypes(allTypes);
const mergedResolvers = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
    typeDefs: mergedTypes,
    resolvers : mergedResolvers
});

export default schema;