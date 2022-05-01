import { Request, Response } from "express"
import { CreatePetDTO, PetDTO, UpdatePetDTO } from "../models/dto/PetDTO"
import { createPetSchema, updatePetSchema } from "../models/dto/petSchemas"

export default class PetController {
    public readonly getAll = async (_req: Request, res: Response) => {
        const pets: PetDTO[] = [
            {
                id:1,
                name: 'Cheems',
                type: 'Dog',
                birth: new Date(),
                photo: null,
                userId: 1
            }
        ]
        res.json(pets)
    }

    public readonly getById = async (req: Request, res: Response) => {
        const { id } = req.params
        const pet: PetDTO = {
                id: parseInt(id),
                name: 'Cheems',
                type: 'Dog',
                birth: new Date(),
                photo: null,
                userId: 1
            }
        res.json(pet)
    }

    public readonly create = async (req: Request, res: Response) => {
        const pet = req.body as CreatePetDTO
        
        try{
            await createPetSchema.validateAsync(pet)
        } catch (error) {
            res.status(400).json({ massage: error.massage })
        }
             
        res.json({
            id: 1,
            ...pet
        })
    }
    
    public readonly update = async (req: Request, res: Response) => {
        const { id } = req.params
        const pet = req.body as UpdatePetDTO

        try{
            await updatePetSchema.validateAsync(pet)
        } catch (error) {
            res.status(400).json({ massage: error.massage })
        }

        console.log('Esto debería Editar', id, pet)
        res.sendStatus(204) // 
    }

    public readonly delete = async (req: Request, res: Response) => {
        const { id } = req.params

        console.log('Esto deberia Eliminar', id)
        res.sendStatus(204)
    }
}