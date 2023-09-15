import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './graphql/schema';
import { fetchDeliveries, fetchHolidayList } from './graphql/resolver';
const cors = require('cors');

function createServer() {
  const server = express();

  server.use(cors());
  server.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      rootValue: {
        fetchDeliveries,
        fetchHolidayList,
      },
      graphiql: true,
    })
  );

  return server;
}

export { createServer };
