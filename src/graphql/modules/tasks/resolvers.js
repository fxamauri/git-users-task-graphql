module.exports = {
    Query: {
        tasks(parent, args, context) {
            const user_id = context.user_id;
            return context.dataSources.tasksService.getTasks(user_id);
        }
    }
}