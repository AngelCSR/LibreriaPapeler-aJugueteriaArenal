// Guardar productos en localStorage
const addButtons = document.querySelectorAll(".add-to-cart");
addButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const name = btn.getAttribute("data-name");
        const price = parseFloat(btn.getAttribute("data-price"));
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({name, price});
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${name} agregado al carrito`);
    });
});
/*
Con esta base, puedo hacer las páginas de Papelería, Juguetería, Carrito y Contacto completas, usando el mismo diseño y funcionalidad de carrito.

Si quieres, puedo generarte todas esas páginas completas en el siguiente mensaje, listas para usar y enlazadas entre sí.

¿Quieres que haga eso ahora?*/