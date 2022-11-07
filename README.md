# Balam

El repositorio almacena el contrato inteligente del proecto balam que consiste en la manipulacion de comentarios, como **Agregar, Eliminar, Buscar, Mostrar** comentarios

## Requisitos
* Tener instalado Node js versio 12 o mayor
* Tener instalado Yarn
* Tener Cuenta testnet de near
* Tener instalado near cli
* Tener una subcuenta testnet

## Instalacion de contrato

1. Clonar el contrato con ``git clone https://github.com/Near-University-Tec-de-Tlaxiaco/Balam.git && cd Balam`` 
2. instalar el sdk de near con ``yarn install`` 

## Compilacion del contrato
1. Ingresar a nuestra cuenta testnet con ``near login``, se abrira nuestro navegador para poder ingresar
2. compilar el contrato con ``yarn asb`` 
3. implementar el contrato con ``near deploy --accountId (CUENTA TESTNET) --wasmFile build/release/contrato.wasm`` 

## llamar funciones
* ingresar Lugar nuevo
```
near call (SUCUENTA TESTNET) setLugar '{"lugar_nombre" : "Tlaxiaco", "imagen": "akjsndkjasndk", "posicion_mapa" : "kjsndnakj"}' --accountId (CUENTA TESTNET)
```
* visualizar todos los lugares registrados
```
 near call (SUBCUENTA TESTNET) getLugares --accountId (CUENTA TESTNET)
 ```
* ingresar comentario
```
near call (SUBCUENTA TESTNET) SetComentario '{"id_lugar_comentario" : 0, "comentario": "Bonito lugar", "Titulo": "Lugar Magico" }' --accountId (CUENTA TESTNET)
```
* mostrar todos los comentario
```
near call (SUBCUENTA TESTNET) getComentarios  --accountId (CUENTA TESTNET)
```
* mostrar comentario especifico
```
near call (SUBCUENTA TESTNET) getComentario '{"ComentarioIndex" : 0}' --accountId (CUENTA TESTNET)
```
* mostrar cuantos comentarios hay
```
near call (SUBCUENTA TESTNET) comentarioLenght  --accountId (CUENTA TESTNET)
```

* eliminar comentario
```
near call (SUBCUENTA TESTNET) EliminarComentario '{"ComentarioIndex": 0}' --accountId (CUENTA TESTNET)
```
## Integrantes del equipo

 | **Nombre** | **Rol** | 
  |------------|-----|
  |Israel Nicolás Pérez| Lider del Proyecto :+1:
  |Edwin Aldair Heras Cuevas|Programador :computer: :question:
  |Uzias Victoriano López García| Diseñador :dizzy:
  |Imanol García Zúñiga| Tester :mag:
___

