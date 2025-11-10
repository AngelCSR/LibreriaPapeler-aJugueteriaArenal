  // --- Carrito ---
        function agregarAlCarrito(nombre, precio) {
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            const index = carrito.findIndex(item => item.nombre === nombre);
            if (index >= 0) {
                carrito[index].cantidad += 1;
            } else {
                carrito.push({ nombre, precio, cantidad: 1 });
            }
            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert(nombre + " se ha añadido al carrito.");
        }

   // Datos de ejemplo para cada categoría
        const productos = {
    ficcion: [
        { nombre: "El Principito", img: "imagenes/principito.jpg", descripcion: "Un clásico sobre la inocencia y la sabiduría.", precio: 15 },
        { nombre: "1984", img: "imagenes/soledad.jpg", descripcion: "Distopía de George Orwell sobre libertad y control.", precio: 20 },
        { nombre: "Cien Años de Soledad", img: "imagenes/frankenstein.jpg", descripcion: "Realismo mágico de García Márquez.", precio: 22 },
        { nombre: "Don Quijote de la Mancha", img: "imagenes/principito.jpg", descripcion: "Una aventura entre la locura y la realidad.", precio: 18 },
        { nombre: "El Hobbit", img: "imagenes/soledad.jpg", descripcion: "La travesía de Bilbo Bolsón por la Tierra Media.", precio: 19 },
        { nombre: "Drácula", img: "imagenes/frankenstein.jpg", descripcion: "El terror clásico que marcó un género.", precio: 17 },
        { nombre: "Frankenstein", img: "imagenes/principito.jpg", descripcion: "Ciencia, ética y el miedo a lo desconocido.", precio: 16 },
        { nombre: "Moby Dick", img: "imagenes/soledad.jpg", descripcion: "La épica persecución de una ballena blanca.", precio: 21 },
        { nombre: "Crimen y Castigo", img: "imagenes/frankenstein.jpg", descripcion: "La culpa, el castigo y la redención humana.", precio: 23 },
        { nombre: "Los Miserables", img: "imagenes/principito.jpg", descripcion: "Una historia de injusticia y esperanza.", precio: 24 },
    ],

    infantil: [
        { nombre: "Cuentos de Hadas", img: "imagenes/principito.jpg", descripcion: "Historias mágicas e inspiradoras.", precio: 12 },
        { nombre: "Alicia en el País de las Maravillas", img: "imagenes/soledad.jpg", descripcion: "Un viaje fantástico lleno de imaginación.", precio: 14 },
        { nombre: "El Grúfalo", img: "imagenes/frankenstein.jpg", descripcion: "Diversión asegurada para los más pequeños.", precio: 11 },
        { nombre: "Peter Pan", img: "imagenes/principito.jpg", descripcion: "El niño que no quería crecer.", precio: 13 },
        { nombre: "El Libro de la Selva", img: "imagenes/soledad.jpg", descripcion: "Aventura y amistad en la jungla.", precio: 15 },
        { nombre: "Pinocho", img: "imagenes/frankenstein.jpg", descripcion: "El muñeco de madera que soñaba con ser real.", precio: 12 },
        { nombre: "Cuentos de los Hermanos Grimm", img: "imagenes/principito.jpg", descripcion: "Los clásicos más conocidos en una edición ilustrada.", precio: 16 },
        { nombre: "Matilda", img: "imagenes/soledad.jpg", descripcion: "Una niña brillante con poderes extraordinarios.", precio: 14 },
        { nombre: "Charlie y la Fábrica de Chocolate", img: "imagenes/frankenstein.jpg", descripcion: "El sabor de la imaginación.", precio: 15 },
        { nombre: "La Sirenita", img: "imagenes/principito.jpg", descripcion: "Un cuento clásico sobre amor y sacrificio.", precio: 13 },
    ],

    educativos: [
        { nombre: "Matemáticas Básicas", img: "imagenes/principito.jpg", descripcion: "Aprende los fundamentos con ejemplos prácticos.", precio: 13 },
        { nombre: "Historia del Mundo", img: "imagenes/soledad.jpg", descripcion: "Desde las primeras civilizaciones hasta hoy.", precio: 16 },
        { nombre: "Atlas Ilustrado", img: "imagenes/frankenstein.jpg", descripcion: "Una mirada al planeta en mapas y gráficos.", precio: 19 },
        { nombre: "Geografía Global", img: "imagenes/principito.jpg", descripcion: "Conoce la Tierra como nunca antes.", precio: 18 },
        { nombre: "Gramática Española", img: "imagenes/soledad.jpg", descripcion: "Domina la lengua de Cervantes.", precio: 14 },
        { nombre: "Cálculo Fácil", img: "imagenes/frankenstein.jpg", descripcion: "Aprende matemáticas sin miedo.", precio: 17 },
        { nombre: "Enciclopedia Escolar", img: "imagenes/principito.jpg", descripcion: "Un aliado indispensable para el estudio.", precio: 25 },
        { nombre: "Aprende Inglés", img: "imagenes/soledad.jpg", descripcion: "Guía práctica para dominar un nuevo idioma.", precio: 20 },
        { nombre: "Ciencias Naturales", img: "imagenes/frankenstein.jpg", descripcion: "El mundo que nos rodea explicado de forma sencilla.", precio: 15 },
        { nombre: "Educación Financiera", img: "imagenes/principito.jpg", descripcion: "Aprende a administrar dinero desde joven.", precio: 22 },
    ],

    arte: [
        { nombre: "Arte Moderno", img: "imagenes/principito.jpg", descripcion: "Una exploración visual del arte contemporáneo.", precio: 25 },
        { nombre: "Historia del Arte", img: "imagenes/soledad.jpg", descripcion: "De la antigüedad al arte digital.", precio: 28 },
        { nombre: "Diseño Gráfico", img: "imagenes/frankenstein.jpg", descripcion: "Guía para creativos y diseñadores.", precio: 20 },
        { nombre: "Pintura al Óleo", img: "imagenes/principito.jpg", descripcion: "Técnicas y secretos del arte clásico.", precio: 24 },
        { nombre: "Escultura Moderna", img: "imagenes/soledad.jpg", descripcion: "Una mirada al arte tridimensional.", precio: 27 },
        { nombre: "Fotografía Creativa", img: "imagenes/frankenstein.jpg", descripcion: "Domina la composición y la luz.", precio: 23 },
        { nombre: "Dibujo Artístico", img: "imagenes/principito.jpg", descripcion: "Aprende las bases del dibujo profesional.", precio: 19 },
        { nombre: "Arte Abstracto", img: "imagenes/soledad.jpg", descripcion: "Colores, formas y emociones sin límites.", precio: 22 },
        { nombre: "Diseño de Interiores", img: "imagenes/frankenstein.jpg", descripcion: "Transforma espacios con estilo y armonía.", precio: 26 },
        { nombre: "Caligrafía Moderna", img: "imagenes/principito.jpg", descripcion: "El arte de escribir con elegancia.", precio: 18 },
    ],

    ciencia: [
        { nombre: "Física para Todos", img: "imagenes/principito.jpg", descripcion: "La ciencia detrás del universo.", precio: 17 },
        { nombre: "El Universo", img: "imagenes/soledad.jpg", descripcion: "Descubre los misterios del cosmos.", precio: 21 },
        { nombre: "Biología Divertida", img: "imagenes/frankenstein.jpg", descripcion: "La vida explicada con humor y claridad.", precio: 15 },
        { nombre: "Astronomía Básica", img: "imagenes/principito.jpg", descripcion: "Observa las estrellas como un científico.", precio: 19 },
        { nombre: "Química Cotidiana", img: "imagenes/soledad.jpg", descripcion: "La ciencia detrás de lo que usamos cada día.", precio: 18 },
        { nombre: "Genética Moderna", img: "imagenes/frankenstein.jpg", descripcion: "Descubre el ADN de la vida.", precio: 20 },
        { nombre: "Ecología y Medio Ambiente", img: "imagenes/principito.jpg", descripcion: "Cómo cuidar el planeta Tierra.", precio: 22 },
        { nombre: "Nanotecnología", img: "imagenes/soledad.jpg", descripcion: "La ciencia del futuro en miniatura.", precio: 25 },
        { nombre: "Psicología Científica", img: "imagenes/frankenstein.jpg", descripcion: "Explora la mente humana desde la ciencia.", precio: 23 },
        { nombre: "Inteligencia Artificial", img: "imagenes/principito.jpg", descripcion: "La revolución tecnológica explicada fácil.", precio: 26 },
    ],
};

        
        const productosContainer = document.getElementById("productosContainer");
        const paginacion = document.getElementById("paginacion");
        let categoriaActual = "ficcion";
        let paginaActual = 1;
        const productosPorPagina = 9;

        function mostrarProductos() {
            const lista = productos[categoriaActual];
            const inicio = (paginaActual - 1) * productosPorPagina;
            const fin = inicio + productosPorPagina;
            const paginaProductos = lista.slice(inicio, fin);

            productosContainer.innerHTML = paginaProductos.map(p => `
                <div class="col-md-4">
                    <div class="card h-100">
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

            const totalPaginas = Math.ceil(lista.length / productosPorPagina);
            paginacion.innerHTML = '';
            for (let i = 1; i <= totalPaginas; i++) {
                paginacion.innerHTML += `
                    <li class="page-item ${i === paginaActual ? 'active' : ''}">
                        <button class="page-link">${i}</button>
                    </li>`;
            }

            document.querySelectorAll("#paginacion button").forEach((btn, index) => {
                btn.addEventListener("click", () => {
                    paginaActual = index + 1;
                    mostrarProductos();
                    productosContainer.scrollIntoView({ behavior: "smooth" });
                });
            });
        }

        document.querySelectorAll("#categoriaNav button").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelector("#categoriaNav .active").classList.remove("active");
                btn.classList.add("active");
                categoriaActual = btn.dataset.categoria;
                paginaActual = 1;
                mostrarProductos();
            });
        });

        mostrarProductos();