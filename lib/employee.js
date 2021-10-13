class Employee {

    constructor(name, id, email) {

        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter <name> to be a non-empty string");
        };

        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Expected parameter <id> to be a non-negative number");
        };
        
        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter <email> to be a non-empty string");
        };

        this.name = name;

        this.id = id;

        this.email = email;
    }

    returnName() {

        return this.name;
    }

    returnId() {

        return this.id;
    }

    returnEmail() {

        return this.email;
    }

    returnJobTitle() {

        return 'Employee';
    }
}

module.exports = Employee;


