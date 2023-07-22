const { RESTDataSource } = require('apollo-datasource-rest');

class GithubService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.github.com';
    }
    getUser(login) {
        return this.get(`/users/${login}`);
    }
}

module.exports = new GithubService();