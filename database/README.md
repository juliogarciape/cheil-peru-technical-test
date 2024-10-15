# :file_folder: Base de Datos

## Descripción :page_facing_up:

Este directorio es el **paso 1** del reto técnico para el puesto de Full Stack Developer en Cheil Peru.

## Requerimientos :clipboard:

:heavy_check_mark: Usar base de datos relacional
:heavy_check_mark: Crear una base de datos con las tablas `Usuario`, `Producto`, `Categoría`
:heavy_check_mark: Respetar estándares de diseño y modelamiento de base de datos
:heavy_check_mark: Usar buenas prácticas a nivel de tablas, campos y tipo de datos
:heavy_check_mark: Los campos de las tablas son de libre elección

## Notas :memo:

- Se usó el motor de base de datos relacional **PostgreSQL** por preferencia personal además de ser la base de datos por defecto que viene integrado en Prisma.
- En el diseño de bases de datos, la nomenclatura de las tablas son mayormente en plural, minúsculas y en ingles **por lo que los nombres de las tablas fueron cambiados a** `users`, `products`, `categories` y el nombre de la base de datos es `cheil_peru` para identificar el proyecto.
- En la tabla `users` y `products` se ha usado el tipo `UUID` en el campo `userId` y `productId` por encima del tipo `SERIAL` ya que garantiza una mejor seguridad en la generación de claves primarias.
- En los campos `userId` y `categoryId` de la tabla `products` se ha usado un _delete accion_ para manipular automaticamente registros dependiendo si se eliminan valores en las tablas `users` y `categories` ya que es necesario mantener la integridad referencial.

## Recomedaciones :bulb:

- Usar **DBeaver** para la administración de la base de datos ya que no solo permite PostgreSQL, sino también otros motores en caso se cambie.
- Se debe tener en cuenta la zona horaria de la base de datos, por defecto es `Etc/UTC` pero si el proyecto es para un país en específico se puede cambiar. Esto nos ayudaria a evitar manipulacion de fechas en otras capas de nuestra aplicacion.
