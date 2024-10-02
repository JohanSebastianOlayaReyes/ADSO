let tienda = []
let iteracion;
let descuento;
let sumar=0;
let longitudArreglo;
tienda = [
    { id: 1, nombreProducto: 'Arroz', tipoProducto: 'granos', tipoUnidad: 'gramos', unidad: 1000, precio: 2400 },
    { id: 2, nombreProducto: 'lentejas', tipoProducto: 'granos', tipoUnidad: 'gramos', unidad: 500, precio: 1300 },
    { id: 3, nombreProducto: 'Carne de res', tipoProducto: 'carnes', tipoUnidad: 'gramos', unidad: 500, precio: 13500 },
    { id: 4, nombreProducto: 'Pollo Entero', tipoProducto: 'carnes', tipoUnidad: 'gramos', unidad: 1000, precio: 12500 },
    { id: 5, nombreProducto: 'Cebolla junca', tipoProducto: 'verduras', tipoUnidad: 'gramos', unidad: 500, precio: 1300 },
    { id: 6, nombreProducto: 'Mora', tipoProducto: 'frutas', tipoUnidad: 'gramos', unidad: 500, precio: 1200 },
];

//crear un registro
tienda.push({ id: 7, nombreProducto: 'Lulo', tipoProducto: 'frutas', tipoUnidad: 'gramos', unidad: 500, precio: 1600 });
tienda.push({ id: 8, nombreProducto: 'Papa', tipoProducto: 'verduduras', tipoUnidad: 'gramos', unidad: 500, precio: 1200 });
console.log(tienda);

longitudArreglo = tienda.length
for (iteracion = 0; iteracion <= longitudArreglo; iteracion++) {
    if (tienda[iteracion].id == 7) {
        tienda[iteracion].precio = 3600;
    }
    else {
        console.log("no existe el producto");
    }

    if (tienda[iteracion].tipoProducto == 'carnes') {
        tienda[iteracion].precio = 21600;
    }
    else {
        console.log("No existe el producto")
    }

    sumar = sumar + tienda[iteracion].precio

    if (tienda[iteracion].tipoProducto == 'frutas') {
        descuento = descuentos(tienda[iteracion].precio);
    }
    else {
        descuento = 0;
    }
    console.log(descuento)
}

console.log(tienda);
console.log('Suma de todos los productos');
console.log(sumar);