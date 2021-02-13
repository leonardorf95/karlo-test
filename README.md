## karlo Store

## Descripción

La aplicación se realizo en backend con NodeJs y Express, se implemento como base de datos Postgres y se hizo uno del ORM sequelize para su manejo con la base de datos, y para el frontend se implemento React Hooks así como Bootstrap 5 para el diseño.

## Configuraciones

Para poder correr la aplicacion se necesitaran realizar los siguientes paso:

Realmente no se necesitan muchas configuraciones las cuales son las siguientes.
### Back-End
*1-* Tener instalado postgres.\ 
*2-* Cambiar las configuraciones en el archivo config en el se encontraran las configuraciones de base de datos y puerto de la aplicación.
*3-* Una vez realizado estos cambios implementar el comando `npm run dev` para inicializar el servidor de Node

### Front-End
*1-* Para poder realizar la conexión con el back-end sera necesario realizar la sustitución de la baseURl ubicado en el archivo axiosConfig ubicado en \FrontEnd\store-karlo\src\config se debera poner la misma ruta en la que esta corriendo el servidor para que pueda conectar. Posterior a este cambio solo se necesitara realizar la ejecución del comando `npm start`