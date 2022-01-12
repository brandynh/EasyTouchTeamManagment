const Engineer = require('../lib/engineer');

describe("engineer", () => {

    describe("initialize engineer", () => {

        it("should create an object with a name, id, email, and github if given accepted arguments", () => {

            const engineer = new Engineer("Brandyn", 1111, "brandyn.huffer@yahoo.com", "brandynh");

            expect(engineer.name).toEqual("Brandyn");
            expect(engineer.id).toEqual(1111);
            expect(engineer.email).toEqual("brandyn.huffer@yahoo.com");
            expect(engineer.github).toEqual("brandynh");

        });

        it("should throw an error if object arguments are blank", () => {

            const cb = () => new Engineer();

            expect(cb).toThrow();
        });

        it("should throw an error if 'name' is not a string", () => {

            const cb = () => new Engineer(10, 1111, "brandyn.huffer@yahoo.com");

            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);

        });

        it("should throw an error if 'name' is an empty string", () => {

            const cb = () => new Engineer('', 1111, "brandyn.huffer@yahoo.com");

            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if no 'ID' provided", () => {

            const cb = () => new Engineer("Brandyn");

            const err = new Error("Expected parameter 'id' to be a non-negative number")

            expect(cb).toThrowError(err);
        });


        it("should throw an error if 'ID' is less than 0", () => {

            const cb = () => new Engineer('Brandyn', -1,);

            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'ID' is not a number ", () => {

            const cb = () => new Engineer('Brandyn', 'Anything');

            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' parameter is not provided", () => {

            const cb = () => new Engineer('Brandyn', 1111,);

            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' parameter is an empty string", () => {

            const cb = () => new Engineer('Brandyn', 1111, "");

            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' parameter is not a string", () => {

            const cb = () => new Engineer('Brandyn', 1111, 2222);

            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'github' parameter is not provided", () => {

            const cb = () => new Engineer("Brandyn", 1111, "brandyn.huffer@yahoo.com",);

            const err = new Error("Expected parameter 'github' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'github' parameter is an empty string", () => {

            const cb = () => new Engineer("Brandyn", 1111, "brandyn.huffer@yahoo.com", "");

            const err = new Error("Expected parameter 'github' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'github' parameter is not a string", () => {

            const cb = () => new Engineer("Brandyn", 1111, "brandyn.huffer@yahoo.com", 2222);

            const err = new Error("Expected parameter 'github' to be a non-empty string");

            expect(cb).toThrowError(err);
        });
    });
});
