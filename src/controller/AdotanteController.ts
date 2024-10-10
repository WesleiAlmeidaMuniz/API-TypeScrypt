import { Request, Response } from "express";
import AdotanteRepository from "../repositories/AdotanteRepository";
import AdotanteEntity from "../entities/AdotanteEntity";
import EnderecoEntity from "../entities/EnderecoEntity";

export default class AdotanteController{
    constructor( private repository:AdotanteRepository ){}

    async criaAdotante(req: Request, res: Response ): Promise<Response>{
        try{
            const {nome,celular,endereco,foto,senha} = <AdotanteEntity>req.body
            const novoAdotante = new AdotanteEntity(
                nome,
                senha,
                celular,
                foto,
                endereco
            )

            await this.repository.criaAdotante(novoAdotante);
            return res.status(201).json(novoAdotante);
        } catch (error){
            return res.status(500).json({error: 'Erro ao criar Adotante'});
        }
    }

    async listAdotantes(req: Request, res: Response){
        const listaDeAdotante = await this.repository.listaAdotantes();
        return res.status(200).json(listaDeAdotante);
    }

    async atualizaAdotante(req: Request, res: Response){
        const {id} = req.params;
        const {success, message} = await this.repository.atualizaAdotante(
            Number(id),
            req.body as AdotanteEntity
        );
        
        if(!success){
            return res.status(400).json({message});
        }

        return res.sendStatus(204);
    }

    async deletaAdotante(req: Request, res: Response){
        const {id} = req.params;
        const { success, message} = await this.repository.deletaAdotante(
            Number(id),
        );

        if(!success){
            return res.status(400).json({message});
        }
        
        return res.sendStatus(204);

    }

    async atualizaEnderecoAdotante(req: Request, res: Response){
        const {id} = req.params;
        const { success, message} = await this.repository.atualizaEnderecoAdotante(
            Number(id), 
            req.body as EnderecoEntity
        );

        if(!success){
            return res.status(400).json({message});
        }
        
        return res.sendStatus(204);

    }
}