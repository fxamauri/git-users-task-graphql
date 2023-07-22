const { visitData } = require('graphql-tools');
const db = require('../db');

class TasksService {
    
    getTasks(user_id) {
        return db('tasks').where({ user_id });
    }

    async getTaskById(user_id, id) {
        const task = await db('tasks').where({ id }).first();

        if (!task) throw Error("Tarefa não encontrada!")

        if (task.user_id !== user_id) {
            throw new Error('Você não tem permissão!');
        }

        return task;
    }

    async addTask(user_id, data) {
        return (db('tasks').insert({ user_id , ...data }).returning('*'))[0];
    }

    async deleteTask(user_id, id) {
        await this.getTaskById(user_id, id);

        return db('tasks').where({ id }).delete();
    }

    async deleteTask(user_id, id, data) {
        await this.getTaskById(user_id, id);

        return (db('tasks').where({ id }).update(visitData).returning('*'))[0];   
    }
}

module.exports = new TasksService();