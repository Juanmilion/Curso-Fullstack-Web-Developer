// Definición de la clase Articulo
class Articulo {
    constructor(sku, descripcion, stock, precio) {
        this.sku = sku;
        this.descripcion = descripcion;
        this._stock = stock;
        this.precio = precio;
    }

    // Getter de stock
    get stock() {
        return this._stock;
    }

    // Setter de stock
    set stock(nuevoStock) {
        this._stock = nuevoStock;
    }
}

// Crear una instancia de Articulo
const articulo = new Articulo(
    "SKU12345",
    "Teclado mecánico",
    0,
    79.99
);

// Función para actualizar el stock de un artículo de forma asíncrona
const actualizarStock = (articulo, nuevoStock) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            articulo.stock = nuevoStock;

            resolve(`Stock actualizado correctamente. Nuevo stock: ${articulo.stock}`);
        }, 2000);
    });
};

// Llamada a la función para actualizar el stock
actualizarStock(articulo, 15)
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });
