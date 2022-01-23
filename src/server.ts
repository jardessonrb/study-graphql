import { GraphQLServer } from 'graphql-yoga';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import mongoose from 'mongoose';

const server = new GraphQLServer({typeDefs, resolvers});
server.start(() => {
    mongoose.connect('mongodb://localhost:27017/graphql');
    console.log('Server is running on localhost: 4000')
});
