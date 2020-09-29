###### Detalles de implementación ########
- He partido de los siguientes supuestos:
    - Pasarela de pago = proveedor de pago.
    - Los proveedores de pago se añaden por código, es decir, no hay un endpoint que te permita añadir nuevos proveedores.
    - Sólo usamos dos endpoints , pay y reimburse, y en este último incluimos tambien el reembolso parcial mediante un parametro en el request.
    - No hay que hacer ninguna conexion con un proveedor, la parte importante es la estructura.

Explicación general del proyecto:
 - En index.js dejamos el servidor escuchando, en App.js configuramos la API y en config.js tenemos un par de variables globales.
 - En routers/gateway tenemos los endpoints y el acceso al controller
 - En controllers/gateway tenemos las funciones que ejecutan toda la lógica de los endpoints (ya que no hay mas controllers)
 - En class tenemos dos ficheros, Gateway para cada pasarela que creemos y ListGateway para gestionarlas todas.
 

 #### Clases ####

 Dentro del fichero Gateway crearemos las clases necesarias para tener todos los "tipos" de pasarela necesarias. Siguiendo el ejemplo del test, he creado dos clases, Gateway, que sera la clase general más general de la que pueden heredar otras pasarelas, y GatewayWReverse, que hereda de la primera y permitiria tambien un rembolso parcial.

 La pasarela se puede activar / desactivar mediante la función setIsActive , que recibirá un parametro true o false.

 Por otra parte, tenemos ListGateway , que es una clase que hace uso del patron singleton para crear una única lista con todas las pasarelas que devolverá a traves de una función.

 Con esta configuración, añadir una nueva pasarela implicaria únicamente modificar ListGateway con el código necesario para instanciar la nueva pasarela y añadirla a la lista.
 Si se necesitase un nuevo "formato" de pasarela con funciones o parametros extra, habría que modificar Gatway creando una nueva clase y ListGateway, instanciandola y añadiendola a la lista.

 Activar/Desactivar la pasarela sería tan sencillo como llamar a una función.

 Cada pasarela tiene asociado un ID, que se usaría en los endpoints para obtener la pasarela correcta.
 Los métodos pay, reimburse y partialreimburse deberían de hacer todas las acciones necesarias para conectar con el proveedor y devolver el resultado de la acción.

 #### ESLINT ####
 Se ha hecho una configuración básica de ESLINT.

