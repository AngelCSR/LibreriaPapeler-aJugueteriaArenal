// Obtenemos los productos del localStorage
let productos = JSON.parse(localStorage.getItem('carrito')) || [];

const carritoBody = document.querySelector("#carritoTable tbody");
const totalEl = document.getElementById("total");

function renderCarrito() {
    carritoBody.innerHTML = "";
    let total = 0;
    productos.forEach((prod, index) => {
        const subtotal = prod.precio * prod.cantidad;
        total += subtotal;
        carritoBody.innerHTML += `
            <tr>
                <td>${prod.nombre}</td>
                <td>$${prod.precio.toFixed(2)}</td>
                <td>
                    <input type="number" min="1" value="${prod.cantidad}" class="form-control form-control-sm" onchange="updateCantidad(${index}, this.value)">
                </td>
                <td>$${subtotal.toFixed(2)}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>
                </td>
            </tr>
        `;
    });
    totalEl.textContent = total.toFixed(2);
}

function updateCantidad(index, value) {
    productos[index].cantidad = parseInt(value);
    localStorage.setItem('carrito', JSON.stringify(productos));
    renderCarrito();
}

function eliminarProducto(index) {
    productos.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(productos));
    renderCarrito();
}

// Renderizamos el carrito inicialmente
renderCarrito();
