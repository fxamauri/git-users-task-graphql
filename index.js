const { ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");
const githubService = require('./src/services/githubService')
const userService = require('./src/services/userService')
const tasksService = require('./src/services/tasksService')

const server = new ApolloServer({
  ...graphql,
  dataSources: () => ({
    githubService,
    userService,
    tasksService,
  }),
  context: ({ req }) => {
    const user_id = req.headers.authorization;
    return {
      user_id
    }
  }
});

server.listen().then(({ url }) => console.log(url));
