import { logging, PersistentUnorderedMap, u128,PersistentVector} from "near-sdk-as";
import { Comentario, comentariosTotal } from "./model";
import { lugar, lugarTotal } from "./model";
const IndexComentarios = comentariosTotal.length;
const IndexLugar = lugarTotal.length;
/*
las siguientes funciones son de la clase lugar 
estos lugares estaran lugadas a los comentarios
*/
export function setLugar(lugar_nombre : String, imagen :String, posicion_mapa : string ): lugar {
    const newLugar = new lugar(IndexLugar, lugar_nombre,imagen,posicion_mapa);
    lugarTotal.push(newLugar);
    logging.log('lugar subido: ' + newLugar.lugar_nombre);
    return newLugar;
}
export function getLugares(): lugar[] {
    const data = new Array<lugar>(IndexLugar);
    for(let i = 0; i < IndexLugar; i++) {
        data[i] = lugarTotal[i];
        logging.log(i);
    }
    return data;
}
/*
Las siguientes funciones son de la clase comentario
estas estaran basadas segun el lugar donde se encuentren
*/
// escitura de comentarios
export function SetComentario( id_lugar_comentario : i32,  comentario : String,  Titulo: String): Comentario {
    const newComent = new Comentario(id_lugar_comentario, IndexComentarios, comentario,Titulo);
    comentariosTotal.push(newComent);
    logging.log('Comentario subido: ' + newComent.Titulo);
    return newComent;
}
//lectura de todos los comentarios
export function getComentarios(): Comentario[] {
    const data = new Array<Comentario>(IndexComentarios);
    for(let i = 0; i < IndexComentarios; i++) {
        data[i] = comentariosTotal[i];
        logging.log(i);
    }
    return data;
}

//Buscar Comentario especifico
export function getComentario(ComentarioIndex: i32): Comentario {
    if(comentariosTotal.length < ComentarioIndex) {
        logging.log('EL comentario no existe');
    }
    return comentariosTotal[ComentarioIndex];
}

//total de comentarios almacenados 
export function comentarioLenght(): number {
    return comentariosTotal.length;
}

//eliminar comentario especifico
export function EliminarComentario(ComentarioIndex: i32): bool {
    if  (comentariosTotal.length < ComentarioIndex) {
        logging.log('Este comentario aún no existe');
        return false;
    }
    comentariosTotal.swap_remove(ComentarioIndex);
    logging.log('Comentario Eliminado');
    return true;
}
export function BuscarComentario(Buscar: String): Comentario {
    const data = new Array<Comentario>(IndexComentarios);
    for(let i = 0; i < IndexComentarios; i++) {
        data[i] = comentariosTotal[i];
        if (data[i].Titulo==Buscar) {
            return comentariosTotal[i];
        }
    }
    logging.log("No se encontro el comentario")
    return comentariosTotal[IndexComentarios+2];
}





