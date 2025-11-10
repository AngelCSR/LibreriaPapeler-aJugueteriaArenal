   function agregarAlCarrito(nombre, precio) {
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            const index = carrito.findIndex(item => item.nombre === nombre);
            if (index >= 0) {
                carrito[index].cantidad += 1;
            } else {
                carrito.push({nombre: nombre, precio: precio, cantidad: 1});
            }
            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert(nombre + " se ha añadido al carrito.");
        }