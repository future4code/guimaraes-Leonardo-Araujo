import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { Unauthorized } from "../error/customError";
import { LoginInputDTO, UserInputDTO } from "../model/user";
import { Authenticator } from "../services/Authenticator";

export class UserController {

  public signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password, role } = req.body;

      const input: UserInputDTO = {
        name,
        email,
        password,
        role
      };
      const userBusiness = new UserBusiness()
      const token = await userBusiness.signup(input);

      res.status(201).send({ message: "Usuário criado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const input: LoginInputDTO = {
        email,
        password,
      };

      const userBusiness = new UserBusiness()
      const token = await userBusiness.login(input);

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getUserById = async (req: Request, res: Response) => {
    try {

      const token = req.headers.authorization as string;
      const authenticationData = new Authenticator()
      const id = authenticationData.getTokenData(token)



      const userBusiness = new UserBusiness()
      const result = await userBusiness.getUserById({ id })

      res.status(201).send(result);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
public getProfile = async (req: Request, res: Response) =>{
  try {
    const token =req.headers.authorization as string

   
    const userBusiness = new UserBusiness()
    const result = await userBusiness.getProfile(token);

    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
public getProfileById = async (req: Request, res: Response) =>{
  try {
    const token =req.headers.authorization as string
    const {id}=req.params

 
   
    const userBusiness = new UserBusiness()
    const result = await userBusiness.getProfileById(token, id);

    res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}


}