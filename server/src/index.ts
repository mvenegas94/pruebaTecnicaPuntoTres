import express, {Application} from 'express';
import morgar from 'morgan';
import cors from 'cors';
import indexRutas from './rutas/rutasUbicacion';
import morgan from 'morgan';

class Server{
    public app:Application;
    
    
    constructor (){
        this.app = express();
        this.config();
        this.rutas();
    }

    config():void {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    rutas():void{
        this.app.use(indexRutas);
    }

    iniciar():void {
        this.app.listen(this.app.get('port'), () =>{
            console.log('Servidor iniciado por puerto', this.app.get('port'));
        });
    }

}

const servidor = new Server();
servidor.iniciar();

