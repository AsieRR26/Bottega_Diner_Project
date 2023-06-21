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

  // Mostrar precio individual plato principal
  console.log("El precio individual es de " + menuPrincipal[eleccionPrincipal] + " €");


  // Obtener la segunda selección del usuario
  const eleccionAcompañamiento1 = prompt("Por favor, seleccione un acompañamiento #1:");

  // Mostrar el precio individual del plato de acompañamiento numero 1
  console.log("El precio individual es de " + menuAcompañamientos[eleccionAcompañamiento1] + " €");


  // Obtener la tercera selección del usuario
  const eleccionAcompañamiento2 = prompt("Por favor, seleccione un acompañamiento #2:");

  // Mostrar el precio individual del plato de acompañamiento numero 2
  console.log("El precio individual es de " + menuAcompañamientos[eleccionAcompañamiento2] + " €");

  // Mostrar el comentario de la camarera
  const comments = [
    "¡Buena elección! Este plato es uno de nuestros favoritos.",
    "¡La opcion perfecta para llenar la tripa!",
    "Sin duda esta opcion es mi preferida. ¡Te encantara!",
    "Una convinacion perfecta, muy recomendable."
  ];
  
  const randomComment = comments[Math.floor(Math.random() * comments.length)];
  console.log("Camarera:", randomComment);
  
  // Calcular el precio total
  let totalPrice = menuPrincipal[eleccionPrincipal] + menuAcompañamientos[eleccionAcompañamiento1] + menuAcompañamientos[eleccionAcompañamiento2];
  
  // Mostrar el precio total
  console.log("El precio total es de: " + totalPrice + " €");