const Intern = require("../lib/intern");

describe("intern", () => {

    describe("initialize intern", () => {

        it("should create an object with a name, id, email, and school if given accepted arguments", () => {

            const intern = new Intern("Brandyn", 1111, "brandyn.huffer@yahoo.com", "SMU BOOTCAMP!!");

            expect(intern.name).toEqual("Brandyn");
            expect(intern.id).toEqual(1111);
            expect(intern.email).toEqual("brandyn.huffer@yahoo.com");
            expect(intern.school).toEqual("SMU BOOTCAMP!!");

        });

        it("should throw an error if object arguments are blank", () => {

            const cb = () => new Intern();

            expect(cb).toThrow();
        });

        it("should throw an error if 'name' is not a string", () => {

            const cb = () => new Intern(10, 1111, "brandyn.huffer@yahoo.com");

            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);

        });

        it("should throw an error if 'name' is an empty string", () => {

            const cb = () => new Intern('', 1111, "brandyn.huffer@yahoo.com");

            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if no 'ID' provided", () => {

            const cb = () => new Intern("Brandyn");

            const err = new Error("Expected parameter 'id' to be a non-negative number")

            expect(cb).toThrowError(err);
        });


        it("should throw an error if 'ID' is less than 0", () => {

            const cb = () => new Intern('Brandyn', -1,);

            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'ID' is not a number ", () => {

            const cb = () => new Intern('Brandyn', 'Anything');

            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' parameter is not provided", () => {

            const cb = () => new Intern('Brandyn', 1111,);

            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' parameter is an empty string", () => {

            const cb = () => new Intern('Brandyn', 1111, "");

            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' parameter is not a string", () => {

            const cb = () => new Intern('Brandyn', 1111, 2222);

            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'school' parameter is not included", () => {

            const cb = () => new Intern('Brandyn', 1111, 'brandyn.huffer@yahoo.com', );

            const err = new Error("Expected parameter 'school' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'school' parameter is an empty string", () => {

            const cb = () => new Intern('Brandyn', 1111, 'brandyn.huffer@yahoo.com', "" );

            const err = new Error("Expected parameter 'school' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'school' parameter is not a string", () => {

            const cb = () => new Intern('Brandyn', 1111, 'brandyn.huffer@yahoo.com', 2222 );

            const err = new Error("Expected parameter 'school' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

    });

});