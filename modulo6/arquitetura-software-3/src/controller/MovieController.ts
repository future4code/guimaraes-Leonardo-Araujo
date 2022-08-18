import { Request, Response } from "express";
import { MovieBusiness } from "../business/Moviebusiness";
import { MovieInputDTO } from "../model/MovieInputDTO";


export class MovieController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const { title, description, durationInMinutes, yearOfReleased} = req.body;
            const input :MovieInputDTO={ title, description, durationInMinutes, yearOfReleased}

            const movieBusiness = new MovieBusiness();
            await movieBusiness.create(input);

            res.status(201).send({ message: "filme cadastrado com sucesso" });
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
    getAll = async (req: Request, res: Response): Promise<any> => {
        try {
            const movieBusiness = new MovieBusiness()
            const result = await movieBusiness.getAll()
            res.status(200).send(result)
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)
        }


    }
}
