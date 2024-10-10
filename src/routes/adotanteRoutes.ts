import express from "express";
import AdotanteController from "../controller/AdotanteController";
import AdotanteRepository from "../repositories/AdotanteRepository";
import { appDataSource } from "../config/dataSource";
const router = express.Router();

const adotanteRepository = new AdotanteRepository(
    appDataSource.getRepository("AdotanteEntity")
);
const adotanteController = new AdotanteController(adotanteRepository);

router.post('/', adotanteController.criaAdotante.bind(adotanteController));
router.get('/', adotanteController.listAdotantes.bind(adotanteController));
router.put('/:id', adotanteController.atualizaAdotante.bind(adotanteController));
router.delete('/:id', adotanteController.deletaAdotante.bind(adotanteController));
router.patch('/:id', adotanteController.atualizaEnderecoAdotante.bind(adotanteController));

export default router;
