import express from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';

// MongoDB Models ----------------------------------------------------------------

import { ApolloServer } from 'apollo-server-express';

// GraphQL ---------------------------------------------------------------------

import typeDefs from './schema';
import resolvers from './resolvers';

// -----------------------------------------------------------------------------

config({ path: 'variables.env' });
const PORT = process.env.PORT || 4444;

// MongoDB ---------------------------------------------------------------------

connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('DB connected'))
  .catch((err): void => console.log(err));

// -----------------------------------------------------------------------------

const server = new ApolloServer({ typeDefs, resolvers });

// -----------------------------------------------------------------------------

const app = express();
server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
