// if making the __tests__ then not need to make test.js file because inside __test__ is consider is all file is test.js

const {test,expect,describe}=require("@jest/globals");
const validate = require("../index");


describe("Validate Password",()=>{
    test("checking length of the password",()=>{
        expect(validate("Zaaaaa1HHg").status).toBe(true);
        expect(validate("Zaaaaa1HHg").message).toBe("password is valid");
    }); 

    test("if password is not contains uppercase characters",()=>{
        expect(validate("jflksdjf7g").status).toBe(false);
        expect(validate("jflksdjf7g").message).toBe("at least 1 uppercase letter is needed");
    }); 

    test("if password is not contains digits",()=>{
        expect(validate("Sljjljljkl").status).toBe(false);
        expect(validate("jfXksdjfg").message).toBe("at least 1 digits is needed");
    }); 
});
