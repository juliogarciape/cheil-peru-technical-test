# :gear: Backend

## Descripción :page_facing_up:

Este directorio es el **paso 2** del reto técnico para el puesto de Full Stack Developer en Cheil Peru.

## Requerimientos :clipboard:

:heavy_check_mark: Usar Node Js, Prisma (ORM), Nest Js (Framework). 
:heavy_check_mark: EndPoint de Inicio de Sesión (JWT) 
:heavy_check_mark: EndPoints para Crear, Obtener, Editar y Eliminar un Producto. 
:heavy_check_mark: EndPoints para Crear, Obtener, Editar y Eliminar un Categoría 
:heavy_check_mark: EndPoint de listar Productos.
:heavy_check_mark: Usar buenas prácticas a nivel del proyecto, código, nomenclatura, etc.
:heavy_check_mark: Agregar validaciones a nivel de campos como limites caracteres y tipo de datos.
:x: Los endpoints de productos y categoría solo se podrán consumir con un token valido. 
:heavy_check_mark: El endpoint de crear producto no debe de permitir registro duplicados por nombres. 
:x: El endpoint de listar productos debe contemplar paginación. 
:x: Implementar el manejo control de errores

## Notas :memo:

- Se utilizo las librerias `class-validator` y `class-transformer` para validacion de datos y limite de caracteres.
- Se establecio la duracion del token a 1 hora sin embargo dependiendo de la sensibilidad de la informacion se puede cambiar para mejorar la seguridad.

## Recomedaciones :bulb:

- Documentar la API REST con **Swagger** para tener una mejor documentación de los endpoints.
- Agregar test unitarios para los servicios y controladores.
- Integrar un refresh token para mejorar la autenticación.
- Utilizar arquitectura Hexagonal para la estructura del proyecto.
- Agregar un logger para tener un mejor control de los errores.
- En caso de registro de usuarios, agregar la libreria `bcrypt` para encriptar las contraseñas.
