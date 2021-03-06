"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
const router = express_1.Router();
router.get('/ubicaciones', index_controller_1.obtenerUbicaciones);
router.get('/ubicaciones/:id', index_controller_1.obtenerUbicacionPorId);
router.post('/ubicaciones', index_controller_1.crearUbicacion);
router.put('/ubicaciones/:id', index_controller_1.actualizarUbicacion);
router.delete('/ubicaciones/:id', index_controller_1.eliminarUbicacion);
exports.default = router;
