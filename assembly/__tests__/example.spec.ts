
import { Comentario, lugar } from "../model";
import {SetComentario, getComentario,  setLugar} from ".."
const id_lugar_comentario = 0;
const id_comentario = 0;
const comentario = 'Bonito lugar';
const Titulo = 'Recomiendo este lugar';

let ComentarioNuevo = new Comentario(id_lugar_comentario,id_comentario,comentario,Titulo);

let lugarNuevo = new lugar(0,"Tlaxiaco","kajndkjs","kjsndskd");




describe("si funciona Subir Comentario", () => {
  it('setComentario()', () => {
      expect(SetComentario(0,'Bonito lugar', 'Recomiendo este lugar')).toStrictEqual(ComentarioNuevo);
  });
});


describe("revisa si la funcion getcomentrio funciona", () => {
  it('getcomentario()', () => {
    SetComentario(0,'Bonito lugar','Recomiendo este lugar');
      expect(getComentario(0)).toStrictEqual(ComentarioNuevo);
  });
});


describe("Revisa si la inserccion de lugares funciona", () => {
  it('setLugar()', () => {
    
    expect(setLugar("Tlaxiaco","kajndkjs","kjsndskd")).toStrictEqual(lugarNuevo)
  });
});
