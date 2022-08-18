import { UserDatabase } from "../data/UserDatabase";
import {
  CustomError,
  InvalidEmail,
  InvalidName,
  InvalidPassword,
  UserNotFound,
} from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
} from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator();
const authenticator = new Authenticator();

export class UserBusiness {
  public signup = async (input: UserInputDTO): Promise<string> => {
    try {
      const { email, password } = input;

      if ( !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password"'
        );
      }
      if(password.length<6){
        throw new CustomError(
          400,
          ' "password" precisa ter no mínimo 6 caracteres'
        );
      }
       if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const id: string = idGenerator.generateId();

      const user: user = {
        id,       
        email,
        password,
      };
      const userDatabase = new UserDatabase();
      await userDatabase.createUser(user);

      const token = authenticator.generateToken({ id });
      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: any): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, 'Preencha os campos "email" e "password"');
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }
      const userDatabase = new UserDatabase();
      const user = await userDatabase.findUser(email);

      if (!user) {
        throw new UserNotFound();
      }

      if (user.password !== password) {
        throw new InvalidPassword();
      }

      const id = user.id
      const token = authenticator.generateToken({ id });
      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserById = async ({id}: any) => {
    try {
      
      const userDatabase = new UserDatabase();
     const result= await userDatabase.getUserById(id);
     return result
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
