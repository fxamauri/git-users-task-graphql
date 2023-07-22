const db = require('../db');

class UserService {
    async addUser(user) {
        return (await db('users').insert(user).returning('*'))[0]
    }
    
    async getUserByLogin(login) {
        return db('users').where({ login }).first()
    }
}

module.exports = new UserService();