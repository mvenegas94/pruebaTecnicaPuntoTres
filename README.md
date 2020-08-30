# pruebaTecnicaPuntoTres

*******************Pasos para despliegue Local************************

1. Tener una base de datos postgres corriendo en su equipo con las siguientes caracteristicas.
Nombre de la base de datos: baseDatos
Nombre de usuario: postgres
Contrasenia usuario: mysecretpassword
Puerto: 5432
2. En la base de datos ejecutar los siguientes scripts.

CREATE TABLE location (
  id bigint PRIMARY KEY,
  name varchar(50) not null,
  area_ms decimal(10,2) not null,
  id_recursive bigint 
 );
 CREATE INDEX index_id ON location (id);
 CREATE SEQUENCE location_id_seq OWNED BY location.id;
 ALTER TABLE location ALTER COLUMN id SET DEFAULT nextval('location_id_seq');
 ALTER TABLE location ADD CONSTRAINT UQ_name UNIQUE (name);
 
3. Descargar en su equipo el codigo del siguiente repositorio https://github.com/mvenegas94/pruebaTecnicaPuntoTres.git
 
4. Abrir el proyecto con un editor por ejemplo Visual Studio Code VSC

5. Abrir 2 consolas en VSC, en la primera ejecutar el comando "npm run dev" (para ejecuar el servidor de las apis) (Ruta/puntoTres/server)
y en la segunda ejecutar el comando "ng serve" (Para desplegar la interfaz grafica) (Ruta/puntoTres/client)

6. Abrir en un navegador la siguiente URL http://localhost:4200/ubicaciones

NOTA: Los servicios estan desarrollados en Nodejs y para la interfaz grafica se utiliza el framework Angular

-------------------------------------FIN_DEL_DOCUMENTO-----------------------------------------

