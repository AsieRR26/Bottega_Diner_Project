const prompt = require('prompt-sync')();

  // Definir el menú principal y el menú de acompañamientos
  const menuPrincipal = {
      "Hamburguesa": 10,
      "Pizza": 12,
      "Sopa de verduras": 8,
      "Espaguetis": 10,
    };
  
  const menuAcompañamientos = {
    "Patatas fritas": 3,
    "Arroz": 2,
    "Ensalada de pasta": 5,
    "Ensalada campera": 4,
  };

  // Definir los comentarios para cada plato principal
  const comentariosMenuPrincipal = {
    "Hamburguesa": "¡Nuestra hamburguesa es jugosa y sabrosa! Seguro que te encantará.",
    "Pizza": "Nuestra pizza está hecha con ingredientes frescos y una deliciosa masa crujiente.",
    "Sopa de verduras": "La sopa de verduras es siempre una opción reconfortante y llena de sabor.",
    "Espaguetis": "¡Nuestros espaguetis son una opcion perfecta para llenar la tripa!",
  };

  // Definir los comentarios para cada plato de acompañamiento
  const comentariosMenuAcompañamiento = {
    "Patatas fritas": "Las patatas fritas son un acompañamiento perfecto, en especial con la hamburguesa.",
    "Arroz": "El arroz es un acompañamiento ligero que se puede convinar con cualquier plato principal.",
    "Ensalada de pasta": "La ensalada de pasta es un acompañamiento muy bueno, aunque no lo recomiendo si elegimos los espaguetis como primera opcion.",
    "Ensalada campera": "Nuestra ensalada es fresca, saludable y viene con aderezo casero.",
  };
  
  // Mostrar todo el menú
  console.log("-------- MENÚ PRINCIPAL ----------------");
  for (let item in menuPrincipal) {
    console.log(`${item}: ${menuPrincipal[item]} €`);
  }
  
  console.log("-------- MENÚ DE ACOMPAÑAMIENTOS -------");
  for (let item in menuAcompañamientos) {
    console.log(`${item}: ${menuAcompañamientos[item]} €`);
  }
  

  // Obtener la primera selección del usuario
  const eleccionPrincipal = prompt("Por favor, seleccione un plato principal:");

  // Obtener el comentario del plato principal seleccionado
  const primerComentario = comentariosMenuPrincipal[eleccionPrincipal];

  // Mostrar el comentario de la camarera
  console.log("Camarera:", primerComentario);

  // Mostrar precio individual plato principal
  console.log("El precio individual es de " + menuPrincipal[eleccionPrincipal] + " €");


  // Obtener la segunda selección del usuario
  const eleccionAcompañamiento1 = prompt("Por favor, seleccione un acompañamiento #1:");

  // Obtener el comentario del plato de acompañamiento numero 1
  const segundoComentario = comentariosMenuAcompañamiento[eleccionAcompañamiento1];

  // Mostrar el segundo comentario de la camarera
  console.log("Camarera:", segundoComentario);

  // Mostrar el precio individual del plato de acompañamiento numero 1
  console.log("El precio individual es de " + menuAcompañamientos[eleccionAcompañamiento1] + " €");


  // Obtener la tercera selección del usuario
  const eleccionAcompañamiento2 = prompt("Por favor, seleccione un acompañamiento #2:");

  // Obtener el comentario del plato de acompañamiento numero 2
  const tercerComentario = comentariosMenuAcompañamiento[eleccionAcompañamiento2];

  // Mostrar el tercer comentario de la camarera
  console.log("Camarera:", tercerComentario);

  // Mostrar el precio individual del plato de acompañamiento numero 2
  console.log("El precio individual es de " + menuAcompañamientos[eleccionAcompañamiento2] + " €");
  

  // Calcular el precio total
  let totalPrice = menuPrincipal[eleccionPrincipal] + menuAcompañamientos[eleccionAcompañamiento1] + menuAcompañamientos[eleccionAcompañamiento2];
  

  // Mostrar el precio total
  console.log("El precio total es de: " + totalPrice + " €");