import { Router } from "express";
import { obtenerUbicaciones, obtenerUbicacionPorId, crearUbicacion, actualizarUbicacion, eliminarUbicacion } from "../controllers/index.controller";

const router = Router();
router.get('/ubicaciones', obtenerUbicaciones);
router.get('/ubicaciones/:id', obtenerUbicacionPorId);
router.post('/ubicaciones', crearUbicacion);
router.put('/ubicaciones/:id', actualizarUbicacion);
router.delete('/ubicaciones/:id', eliminarUbicacion);

export default router;