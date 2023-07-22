const contactService = require('../../../services/githubService');

module.exports = {
    User: {
        tasks(parent, _, context) {
            return context.dataSources.tasksService.getTasks(parent.id)
        }
    },
    Query: {
        async user(_, args, context) {
            const userFound = await context.dataSources.userService.getUserByLogin(args.login)

            if (userFound) return userFound;

            console.log(`passou`)
            const { login: loginGithub, avatar_url } = await context.dataSources.githubService.getUser(args.login)

    
            return  context.dataSources.userService.addUser({
                login: loginGithub,
                avatar_url,
            })
        }
    }
}