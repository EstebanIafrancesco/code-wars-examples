function toCamelCase(str) {
  let partes = str.split("-");
  console.log(partes);
  let salida = "";
  for (let i = 0; i < partes.length; i++) {
    let camelludo = partes[i].charAt(0).toUpperCase();
    console.log(camelludo);
    salida += partes[i];
  }
  console.log(salida);
}
toCamelCase("hola-como-estas-mi-perrito");
