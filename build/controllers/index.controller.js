"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarUbicacion = exports.actualizarUbicacion = exports.crearUbicacion = exports.obtenerUbicacionPorId = exports.obtenerUbicaciones = void 0;
const dataBase_1 = require("../dataBase");
/*
*Obtener ubicaciones
*/
exports.obtenerUbicaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield dataBase_1.pool.query('SELECT * FROM location');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Error al intentar consultar las ubicaciones');
    }
});
/*
*Obtener ubicaciones por ID
*/
exports.obtenerUbicacionPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield dataBase_1.pool.query('SELECT * FROM location WHERE ID = $1', [id]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Error al intentar consultar las ubicaciones');
    }
});
/*
*Crear una ubicacion
*/
exports.crearUbicacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, area_ms, id_recursive } = req.body;
        console.log(name, area_ms, id_recursive);
        const response = yield dataBase_1.pool.query('INSERT INTO LOCATION (id, name, area_ms, id_recursive) VALUES (DEFAULT, $1, $2, $3)', [name, area_ms, id_recursive]);
        return res.status(200).json({
            message: 'Ubicacion creada exitosamente.',
            body: {
                name: name,
                area_ms: area_ms,
                id_recursive: id_recursive
            }
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Error al intentar crear una ubicacion');
    }
});
/*
*Actualizar una ubicacion
*/
exports.actualizarUbicacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { name, area_ms, id_recursive } = req.body;
        const response = yield dataBase_1.pool.query('UPDATE location SET NAME = $2, AREA_MS= $3, ID_RECURSIVE = $4 WHERE ID = $1', [id, name, area_ms, id_recursive]);
        return res.status(200).json({
            message: `Ubicacion ${id} actualizada exitosamente`,
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Error al intentar actualizar una ubicacion');
    }
});
/*
*Eliminar una ubicacion por ID
*/
exports.eliminarUbicacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield dataBase_1.pool.query('DELETE FROM location WHERE ID = $1', [id]);
        return res.status(200).json({
            message: `Ubicacion ${id} eliminada exitosamente`,
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Error al intentar eliminar una ubicacion');
    }
});
