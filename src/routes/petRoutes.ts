import express from "express";
import PetController from "../controller/PetController";
import PetRepository from "../repositories/PetRepository";
import { appDataSource } from "../config/dataSource";
const router = express.Router();

const petRepository = new PetRepository(
    appDataSource.getRepository("PetEntity"),
    appDataSource.getRepository("AdotanteEntity")
  );
const petController = new PetController(petRepository);

router.post('/', petController.criaPet.bind(petController));
router.get("/", petController.listaPets.bind(petController));
router.put("/:id", petController.atualizaPet.bind(petController));
router.delete("/:id", petController.deletaPet.bind(petController));
router.put("/:pet_id/:adotante_id", petController.adotaPet.bind(petController));
router.get('/filtro', petController.buscaPetPorCampoGenerico.bind(petController));

export default router;
