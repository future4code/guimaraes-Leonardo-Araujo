import { UserBusiness } from "../src/business/UserBusiness";
import { LoginInputDTO, UserInputDTO } from "../src/model/User";

describe("Teste na create User", () => {
    test("Teste na createUser com e-mail vazio", async () => {
        expect.assertions(1)
        try {
            const input: LoginInputDTO = {
                email: "",
                password: "string"

            }
            const userBusiness = new UserBusiness()
            await userBusiness.getUserByEmail(input)


        } catch (error: any) {
            expect(error.message).toBe(`"Invalid User: inform  "email"and "password" `);

        }
    });
    test("Teste na createUser com password vazio", async () => {
        expect.assertions(1)
        try {
            const input: LoginInputDTO = {
                email: "string@string",
                password: ""

            }
            const userBusiness = new UserBusiness()
            await userBusiness.getUserByEmail(input)


        } catch (error: any) {
            expect(error.message).toBe(`"Invalid User: inform  "email"and "password" `);

        }
    });

    test("Teste na createUser com e-mail sem @", async () => {
        expect.assertions(1)
        try {
            const input: UserInputDTO = {
                email: "string",
                password: "string",
                name: "string",
                role: "string"
            }
            const userBusiness = new UserBusiness()
            await userBusiness.createUser(input)


        } catch (error: any) {
            expect(error.message).toBe(`Inválid E-mail: email must have @`);

        }
    });




});