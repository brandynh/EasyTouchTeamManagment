const Employee = require("./employee");

class Engineer extends Employee {

    constructor(name, id, email, githubId) {

        super(name,id,email);
        this.githubId = githubId;

        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        };
        
        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        };

        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        };

        if (typeof githubId !== "string" || !githubId.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        };
        
    }

    returnJobTitle() {

        return "Engineer"
    }

    returnGitHubId() {

        return this.githubId;
    }
}

module.exports = Engineer;