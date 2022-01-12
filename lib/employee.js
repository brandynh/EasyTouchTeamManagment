class Employee {

    constructor(name, id, email) {

        this.name = name;
        this.id = id;
        this.email = email;

        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        };

        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        };
        
        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        };

    };

    getName() {

        return this.name;
    };

    getJobTitle() {

        return 'Employee';
    };

    getId() {

        return this.id;
    };

    getEmail() {

        return this.email;
    };
    
}

module.exports = Employee;



