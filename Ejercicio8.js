// 8. Búsqueda de elementos en un arreglo
function buscarNombre(arreglo, nombre) {
    return arreglo.includes(nombre) 
        ? `${nombre} está presente en el arreglo.` 
        : `${nombre} no está presente en el arreglo.`;
}

const nombres = ["Rixci", "pepe", "Marco", "Criss"];
const nombreBuscado = "pepe";
console.log(buscarNombre(nombres, nombreBuscado));