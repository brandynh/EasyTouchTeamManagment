const Employee = require('../lib/employee');

 describe("employee", () => {

    describe("initialize employee", () => {

        it("should create an object with a name, id, and email if given accepted arguments", () => {

            const employee = new Employee("Brandyn", 1111, "brandyn.huffer@yahoo.com");

            expect(employee.name).toEqual("Brandyn");
            expect(employee.id).toEqual(1111);
            expect(employee.email).toEqual("brandyn.huffer@yahoo.com");

        });

        it("should throw an error if object arguments are blank", () => {

            const cb = () => new Employee();

            expect(cb).toThrow();
        });

        it("should throw an error if 'name' is not a string", () => {

            const cb = () => new Employee(10, 1111, "brandyn.huffer@yahoo.com");

            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);

        });

        it("should throw an error if 'name' is an empty string", () => {

            const cb = () => new Employee('', 1111, "brandyn.huffer@yahoo.com");

            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if no 'ID' provided", () => {

            const cb = () => new Employee("Brandyn");
            
            const err = new Error("Expected parameter 'id' to be a non-negative number")

            expect(cb).toThrowError(err);
        });
        
        
        it("should throw an error if 'ID' is less than 0", () => {

            const cb = () => new Employee('Brandyn', -1, );

            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'ID' is not a number ", () => {

            const cb = () => new Employee('Brandyn', 'Anything');

            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' parameter is not provided", () => {

            const cb = () => new Employee('Brandyn', 1111,);

            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' parameter is an empty string", () => {

            const cb = () => new Employee('Brandyn', 1111, "");

            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' parameter is not a string", () => {

            const cb = () => new Employee('Brandyn', 1111, 2222);

            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

    });
 });