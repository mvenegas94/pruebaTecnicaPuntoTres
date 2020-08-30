import { Request, Response } from "express";
import { pool } from "../conexion";
import { QueryResult } from "pg";
/*
*Obtener ubicaciones
*/
export const obtenerUbicaciones = async(req:Request, res:Response): Promise<Response> => {
    try{
        const response:QueryResult = await pool.query('SELECT * FROM location');
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e);
        return res.status(500).json('Error al intentar consultar las ubicaciones');
    }
}

/*
*Obtener ubicaciones por ID
*/
export const obtenerUbicacionPorId = async(req:Request, res:Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const response:QueryResult = await pool.query('SELECT * FROM location WHERE ID = $1', [id]);
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e);
        return res.status(500).json('Error al intentar consultar las ubicaciones');
    }
}

/*
*Crear una ubicacion
*/
export const crearUbicacion = async(req:Request, res:Response): Promise<Response> => {
    try{
        const {name, area_ms, id_recursive} = req.body;
        console.log(name, area_ms, id_recursive);
        const response:QueryResult = await pool.query('INSERT INTO LOCATION (id, name, area_ms, id_recursive) VALUES (DEFAULT, $1, $2, $3)', [name, area_ms, id_recursive]);
        return res.status(200).json({
            message: 'Ubicacion creada exitosamente.',
            body:{
                name: name,
                area_ms: area_ms,
                id_recursive: id_recursive
            }
        });
    }catch(e){
        console.log(e);
        return res.status(500).json('Error al intentar crear una ubicacion');
    }
}

/*
*Actualizar una ubicacion
*/
export const actualizarUbicacion = async(req:Request, res:Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const {name, area_ms, id_recursive} = req.body;
        const response:QueryResult = await pool.query('UPDATE location SET NAME = $2, AREA_MS= $3, ID_RECURSIVE = $4 WHERE ID = $1', [id, name, area_ms, id_recursive]);
        return res.status(200).json({
            message: `Ubicacion ${id} actualizada exitosamente`,
        });
    }catch(e){
        console.log(e);
        return res.status(500).json('Error al intentar actualizar una ubicacion');
    }
}
/*
*Eliminar una ubicacion por ID
*/
export const eliminarUbicacion = async(req:Request, res:Response): Promise<Response> => {
    try{
        const id = parseInt(req.params.id);
        const response:QueryResult = await pool.query('DELETE FROM location WHERE ID = $1', [id]);
        return res.status(200).json({
            message: `Ubicacion ${id} eliminada exitosamente`,
        });
    }catch(e){
        console.log(e);
        return res.status(500).json('Error al intentar eliminar una ubicacion');
    }
}