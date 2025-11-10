// --- Carrito ---
        function agregarAlCarrito(nombre, precio) {
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            const index = carrito.findIndex(item => item.nombre === nombre);
            if (index >= 0) carrito[index].cantidad += 1;
            else carrito.push({ nombre, precio, cantidad: 1 });
            localStorage.setItem('carrito', JSON.stringify(carrito));
             alert(nombre + " se ha añadido al carrito.");
        }

        // --- Productos ---
    const productos = {
    educativos: [
        { nombre: "Bloques de Letras", img: "/imagenes/juguete1.jpg", descripcion: "Aprende el abecedario jugando.", precio: 15 },
        { nombre: "Juego de Números", img: "/imagenes/juguete2.jpg", descripcion: "Ideal para aprender a contar.", precio: 18 },
        { nombre: "Puzzle del Mundo", img: "/imagenes/juguete3.jpg", descripcion: "Mapa educativo para pequeños exploradores.", precio: 20 },
        { nombre: "Set de Ciencias", img: "/imagenes/juguete4.jpg", descripcion: "Experimenta y aprende.", precio: 25 },
        { nombre: "Juego de Memoria", img: "/imagenes/juguete5.jpg", descripcion: "Desarrolla la concentración.", precio: 14 },
        { nombre: "Tangram", img: "/imagenes/juguete6.jpg", descripcion: "Fomenta la lógica y la creatividad.", precio: 13 },
        { nombre: "Abaco de Colores", img: "/imagenes/juguete1.jpg", descripcion: "Aprende matemáticas de forma divertida.", precio: 19 },
        { nombre: "Microscopio Infantil", img: "/imagenes/juguete2.jpg", descripcion: "Observa el mundo invisible.", precio: 30 },
        { nombre: "Juego de Palabras", img: "/imagenes/juguete3.jpg", descripcion: "Crea palabras y mejora el vocabulario.", precio: 17 },
        { nombre: "Mini Laboratorio", img: "/imagenes/juguete4.jpg", descripcion: "Descubre la ciencia en casa.", precio: 28 },
        { nombre: "Juego Solar", img: "/imagenes/juguete5.jpg", descripcion: "Aprende sobre el sistema solar.", precio: 22 },
        { nombre: "Kit de Electricidad", img: "/imagenes/juguete6.jpg", descripcion: "Construye circuitos seguros y educativos.", precio: 26 }
    ],
    exterior: [
        { nombre: "Pelota de Playa", img: "/imagenes/juguete1.jpg", descripcion: "Perfecta para días de sol.", precio: 10 },
        { nombre: "Cometa de Colores", img: "/imagenes/juguete2.jpg", descripcion: "Vuela alto con diversión.", precio: 16 },
        { nombre: "Cuerda para Saltar", img: "/imagenes/juguete3.jpg", descripcion: "Ejercicio y diversión asegurada.", precio: 9 },
        { nombre: "Balón de Fútbol", img: "/imagenes/juguete4.jpg", descripcion: "Ideal para juegos en el parque.", precio: 20 },
        { nombre: "Pistola de Agua", img: "/imagenes/juguete5.jpg", descripcion: "Diversión en verano.", precio: 12 },
        { nombre: "Frisbee", img: "/imagenes/juguete6.jpg", descripcion: "Vuelo estable y ligero.", precio: 8 },
        { nombre: "Carrito de Carreras", img: "/imagenes/juguete1.jpg", descripcion: "Para los amantes de la velocidad.", precio: 18 },
        { nombre: "Set de Jardinería Infantil", img: "/imagenes/juguete2.jpg", descripcion: "Aprende a cuidar las plantas.", precio: 22 },
        { nombre: "Tiza Gigante para Pavimento", img: "/imagenes/juguete3.jpg", descripcion: "Crea dibujos al aire libre.", precio: 11 },
        { nombre: "Mini Golf", img: "/imagenes/juguete4.jpg", descripcion: "Diversión garantizada.", precio: 24 },
        { nombre: "Set de Raquetas", img: "/imagenes/juguete5.jpg", descripcion: "Perfecto para exteriores.", precio: 19 },
        { nombre: "Casa de Campaña Infantil", img: "/imagenes/juguete6.jpg", descripcion: "Tu refugio en el jardín.", precio: 29 }
    ],
    tecnologicos: [
        { nombre: "Robot Educativo", img: "/imagenes/juguete1.jpg", descripcion: "Aprende programación.", precio: 40 },
        { nombre: "Drone Mini", img: "/imagenes/juguete2.jpg", descripcion: "Vuelo estable y control remoto.", precio: 55 },
        { nombre: "Tablet Infantil", img: "/imagenes/juguete3.jpg", descripcion: "Educación y juegos seguros.", precio: 60 },
        { nombre: "Coche RC", img: "/imagenes/juguete4.jpg", descripcion: "Alta velocidad y precisión.", precio: 45 },
        { nombre: "Robot Mascota", img: "/imagenes/juguete5.jpg", descripcion: "Interactivo y divertido.", precio: 50 },
        { nombre: "Microscopio Digital", img: "/imagenes/juguete6.jpg", descripcion: "Explora el mundo microscópico.", precio: 38 },
        { nombre: "Teclado Musical Infantil", img: "/imagenes/juguete1.jpg", descripcion: "Despierta la creatividad musical.", precio: 35 },
        { nombre: "Juego de Realidad Aumentada", img: "/imagenes/juguete2.jpg", descripcion: "Aprende y juega con tecnología.", precio: 48 },
        { nombre: "Mini Consola Retro", img: "/imagenes/juguete3.jpg", descripcion: "Diversión clásica asegurada.", precio: 45 }
    ],
    construccion: [
        { nombre: "Bloques Creativos", img: "/imagenes/juguete1.jpg", descripcion: "Construye sin límites.", precio: 25 },
        { nombre: "LEGO Classic", img: "/imagenes/juguete2.jpg", descripcion: "Desarrolla la imaginación.", precio: 50 },
        { nombre: "Set de Ingeniería", img: "/imagenes/juguete3.jpg", descripcion: "Crea estructuras y aprende física.", precio: 42 },
        { nombre: "Castillo Medieval", img: "/imagenes/juguete4.jpg", descripcion: "Aventura en cada bloque.", precio: 55 },
        { nombre: "Construcción Magnética", img: "/imagenes/juguete5.jpg", descripcion: "Fomenta la creatividad.", precio: 38 },
        { nombre: "Bloques de Madera", img: "/imagenes/juguete6.jpg", descripcion: "Natural y ecológico.", precio: 20 },
        { nombre: "Grúa Mecánica", img: "/imagenes/juguete1.jpg", descripcion: "Construye tu propia máquina.", precio: 48 },
        { nombre: "Set de Cohetes", img: "/imagenes/juguete2.jpg", descripcion: "Lleva tus ideas al espacio.", precio: 60 },
        { nombre: "LEGO Friends", img: "/imagenes/juguete3.jpg", descripcion: "Crea mundos con tus amigos.", precio: 40 }
    ],
    peluches: [
        { nombre: "Oso de Peluche", img: "/imagenes/juguete1.jpg", descripcion: "Suave y abrazable.", precio: 25 },
        { nombre: "Conejo Rosa", img: "/imagenes/juguete2.jpg", descripcion: "Amigo fiel para dormir.", precio: 18 },
        { nombre: "Panda Gigante", img: "/imagenes/juguete3.jpg", descripcion: "Ideal para regalar.", precio: 35 },
        { nombre: "Unicornio de Colores", img: "/imagenes/juguete4.jpg", descripcion: "Magia en cada abrazo.", precio: 28 },
        { nombre: "Gato de Peluche", img: "/imagenes/juguete5.jpg", descripcion: "Suave y tierno.", precio: 20 },
        { nombre: "Perro Dormilón", img: "/imagenes/juguete6.jpg", descripcion: "El compañero perfecto.", precio: 22 },
        { nombre: "Elefante Azul", img: "/imagenes/juguete1.jpg", descripcion: "Ideal para los más pequeños.", precio: 24 },
        { nombre: "Jirafa Suave", img: "/imagenes/juguete2.jpg", descripcion: "Amigo de aventuras.", precio: 27 },
        { nombre: "Tigre Amigable", img: "/imagenes/juguete3.jpg", descripcion: "Colorido y divertido.", precio: 23 }
    ]
};



        // --- Variables ---
        const productosContainer = document.getElementById("productosContainer");
        const paginacion = document.getElementById("paginacion");
        let categoriaActual = "educativos"; // ✅ Categoría inicial correcta
        let paginaActual = 1;
        const productosPorPagina = 9;

        // --- Mostrar productos ---
        function mostrarProductos() {
            const lista = productos[categoriaActual];
            if (!lista) return; // seguridad

            const inicio = (paginaActual - 1) * productosPorPagina;
            const fin = inicio + productosPorPagina;
            const paginaProductos = lista.slice(inicio, fin);

            productosContainer.innerHTML = paginaProductos.map(p => `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img src="${p.img}?auto=format&fit=crop&w=800&q=80" class="card-img-top" alt="${p.nombre}">
          <div class="card-body">
            <h5 class="card-title">${p.nombre}</h5>
            <p class="card-text">${p.descripcion}</p>
            <p class="fw-bold text-primary">$${p.precio.toFixed(2)}</p>
            <button class="btn btn-primary w-100" onclick="agregarAlCarrito('${p.nombre}', ${p.precio})">Comprar</button>
          </div>
        </div>
      </div>
    `).join('');

            // --- Paginación ---
            const totalPaginas = Math.ceil(lista.length / productosPorPagina);
            paginacion.innerHTML = "";
            for (let i = 1; i <= totalPaginas; i++) {
                paginacion.innerHTML += `
        <li class="page-item ${i === paginaActual ? 'active' : ''}">
          <button class="page-link" data-page="${i}">${i}</button>
        </li>`;
            }

            // Agregar eventos de cambio de página
            document.querySelectorAll("#paginacion button").forEach((btn, index) => {
                btn.addEventListener("click", (event) => {
                    event.preventDefault(); 
                    paginaActual = index + 1;
                    mostrarProductos();
                    window.scrollTo({ top: 500, behavior: "smooth" });
                    productosContainer.scrollIntoView({ behavior: "smooth" });
                });
            });
        }

        // --- Cambiar categoría ---
        document.querySelectorAll("#categoriaNav button").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelector("#categoriaNav .active").classList.remove("active");
                btn.classList.add("active");
                categoriaActual = btn.dataset.categoria;
                paginaActual = 1;
                mostrarProductos();
            });
        });

        // --- Inicializar ---
        mostrarProductos();