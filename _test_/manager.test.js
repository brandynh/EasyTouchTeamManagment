const Manager = require("../lib/manager");

describe("manager", () => {

    describe("initialize manager", () => {

        it("should create an object with a name, id, email, and office number if given accepted arguments", () => {

            const manager = new Manager("Brandyn", 1111, "brandyn.huffer@yahoo.com", 2020);

            expect(manager.name).toEqual("Brandyn");
            expect(manager.id).toEqual(1111);
            expect(manager.email).toEqual("brandyn.huffer@yahoo.com");
            expect(manager.officeNumber).toEqual(2020);

        });

        it("should throw an error if object arguments are blank", () => {

            const cb = () => new Manager();

            expect(cb).toThrow();
        });

        it("should throw an error if 'name' is not a string", () => {

            const cb = () => new Manager(10, 1111, "brandyn.huffer@yahoo.com");

            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);

        });

        it("should throw an error if 'name' is an empty string", () => {

            const cb = () => new Manager('', 1111, "brandyn.huffer@yahoo.com");

            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if no 'ID' provided", () => {

            const cb = () => new Manager("Brandyn");

            const err = new Error("Expected parameter 'id' to be a non-negative number")

            expect(cb).toThrowError(err);
        });


        it("should throw an error if 'ID' is less than 0", () => {

            const cb = () => new Manager('Brandyn', -1,);

            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'ID' is not a number ", () => {

            const cb = () => new Manager('Brandyn', 'Anything');

            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' parameter is not provided", () => {

            const cb = () => new Manager('Brandyn', 1111,);

            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' parameter is an empty string", () => {

            const cb = () => new Manager('Brandyn', 1111, "");

            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' parameter is not a string", () => {

            const cb = () => new Manager('Brandyn', 1111, 2222);

            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'officeNumber' parameter is not included", () => {

            const cb = () => new Manager('Brandyn', 1111, 'brandyn.huffer@yahoo.com', );

            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'officeNumber' parameter is less than 0", () => {

            const cb = () => new Manager('Brandyn', 1111, 'brandyn.huffer@yahoo.com', -1 );

            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'officeNumber' parameter is not a number", () => {

            const cb = () => new Manager('Brandyn', 1111, 'brandyn.huffer@yahoo.com', "2020" );

            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

    });

});