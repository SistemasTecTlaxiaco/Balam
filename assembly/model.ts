import {  u128, context, PersistentVector } from "near-sdk-as";

@nearBindgen
export class Comentario{
    Comentario : String;
    id_comentario : i32;
    propietario : String;
    Titulo : String;
    id_lugarComentario : i32;
    constructor(id_lugar_comentario : i32, id_comentario : i32, comentario : String,  Titulo: String){
        this.Comentario = comentario;
        this.propietario = context.sender;
        this.Titulo = Titulo;
        this.id_comentario = id_comentario;
        this.id_lugarComentario = id_lugar_comentario;
    }
    
    }
  

@nearBindgen
export class lugar{
    lugar_nombre : String;
    id_lugar : i32;
    imagen : String;
    posicion_mapa : String;

    constructor(id_lugar: i32,lugar_nombre : String,  imagen :String, posicion_mapa : string){
        this.id_lugar = id_lugar;
        this.imagen = imagen;
        this.lugar_nombre = lugar_nombre;
        this. posicion_mapa = posicion_mapa;

    }
    
}

export const comentariosTotal = new PersistentVector<Comentario>("v");
export const lugarTotal = new PersistentVector<lugar>("v");