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
  escritura: [
    { nombre: "Bolígrafo Azul", img: "imagenes/papeleria1.jpg", descripcion: "Clásico y duradero.", precio: 2 },
    { nombre: "Bolígrafo Negro", img: "imagenes/papeleria2.jpg", descripcion: "Ideal para oficina.", precio: 2 },
    { nombre: "Lápiz HB", img: "imagenes/papeleria3.jpg", descripcion: "Perfecto para escribir o dibujar.", precio: 1 },
    { nombre: "Lápiz 2B", img: "imagenes/papeleria4.jpg", descripcion: "Trazo más oscuro, ideal para bocetos.", precio: 1.2 },
    { nombre: "Marcadores Fluorescentes", img: "imagenes/papeleria1.jpg", descripcion: "Resalta tus apuntes.", precio: 4 },
    { nombre: "Marcadores Permanentes", img: "imagenes/papeleria2.jpg", descripcion: "Resistentes y de larga duración.", precio: 5 },
    { nombre: "Plumas de Gel", img: "imagenes/papeleria3.jpg", descripcion: "Escritura suave y colorida.", precio: 5 },
    { nombre: "Rotuladores Finos", img: "imagenes/papeleria4.jpg", descripcion: "Perfectos para apuntes detallados.", precio: 6 },
    { nombre: "Portaminas 0.5mm", img: "imagenes/papeleria1.jpg", descripcion: "Cómodo y preciso.", precio: 3 },
    { nombre: "Portaminas 0.7mm", img: "imagenes/papeleria2.jpg", descripcion: "Para trazos más gruesos.", precio: 3 },
    { nombre: "Set de Tintas", img: "imagenes/papeleria3.jpg", descripcion: "Colores intensos para plumas.", precio: 8 },
    { nombre: "Bolígrafos de Colores", img: "imagenes/papeleria4.jpg", descripcion: "Paquete de 10 tonos vibrantes.", precio: 6 },
    { nombre: "Corrector Líquido", img: "imagenes/papeleria1.jpg", descripcion: "Cubre errores al instante.", precio: 2.5 },
    { nombre: "Borradores Artísticos", img: "imagenes/papeleria2.jpg", descripcion: "No manchan ni rompen el papel.", precio: 2 },
    { nombre: "Sacapuntas Metálico", img: "imagenes/papeleria3.jpg", descripcion: "Compacto y duradero.", precio: 1.5 }
  ],

  cuadernos: [
    { nombre: "Cuaderno A4", img: "imagenes/papeleria1.jpg", descripcion: "Tapa dura, 100 hojas.", precio: 8 },
    { nombre: "Libreta Espiral", img: "imagenes/papeleria2.jpg", descripcion: "Diseños modernos y resistentes.", precio: 6 },
    { nombre: "Bloc de Notas", img: "imagenes/papeleria3.jpg", descripcion: "Perfecto para recordatorios.", precio: 3 },
    { nombre: "Agenda 2025", img: "imagenes/papeleria4.jpg", descripcion: "Organiza tu día a día.", precio: 12 },
    { nombre: "Cuaderno Rayado", img: "imagenes/papeleria1.jpg", descripcion: "Ideal para escribir notas.", precio: 5 },
    { nombre: "Cuaderno Cuadriculado", img: "imagenes/papeleria2.jpg", descripcion: "Perfecto para cálculos.", precio: 5 },
    { nombre: "Cuaderno de Bocetos", img: "imagenes/papeleria3.jpg", descripcion: "Papel grueso para dibujo.", precio: 9 },
    { nombre: "Planificador Semanal", img: "imagenes/papeleria4.jpg", descripcion: "Organiza tus metas.", precio: 10 },
    { nombre: "Diario Personal", img: "imagenes/papeleria1.jpg", descripcion: "Con cerradura y diseño elegante.", precio: 11 },
    { nombre: "Mini Bloc Adhesivo", img: "imagenes/papeleria2.jpg", descripcion: "Ideal para anotar tareas.", precio: 4 },
    { nombre: "Cuaderno Ecológico", img: "imagenes/papeleria3.jpg", descripcion: "Hecho con papel reciclado.", precio: 7 },
    { nombre: "Notas Adhesivas", img: "imagenes/papeleria4.jpg", descripcion: "Paquete multicolor.", precio: 3 },
    { nombre: "Cuaderno de Proyectos", img: "imagenes/papeleria1.jpg", descripcion: "Diseño profesional.", precio: 9 },
    { nombre: "Cuaderno Escolar", img: "imagenes/papeleria2.jpg", descripcion: "100 hojas resistentes.", precio: 6 },
    { nombre: "Cuaderno de Recetas", img: "imagenes/papeleria3.jpg", descripcion: "Perfecto para tu cocina.", precio: 8 }
  ],

  oficina: [
    { nombre: "Carpeta Archivadora", img: "imagenes/papeleria1.jpg", descripcion: "Mantén tus documentos ordenados.", precio: 7 },
    { nombre: "Organizador de Escritorio", img: "imagenes/papeleria2.jpg", descripcion: "Ten todo a mano.", precio: 10 },
    { nombre: "Grapadora Metálica", img: "imagenes/papeleria3.jpg", descripcion: "Duradera y eficaz.", precio: 9 },
    { nombre: "Cinta Adhesiva", img: "imagenes/papeleria4.jpg", descripcion: "Ideal para oficina o casa.", precio: 3 },
    { nombre: "Perforadora de Papel", img: "imagenes/papeleria1.jpg", descripcion: "Precisa y ergonómica.", precio: 8 },
    { nombre: "Clips Metálicos", img: "imagenes/papeleria2.jpg", descripcion: "Caja de 100 unidades.", precio: 2 },
    { nombre: "Bandeja para Documentos", img: "imagenes/papeleria3.jpg", descripcion: "3 niveles apilables.", precio: 11 },
    { nombre: "Tijeras de Oficina", img: "imagenes/papeleria4.jpg", descripcion: "Corte limpio y seguro.", precio: 5 },
    { nombre: "Cinta Doble Faz", img: "imagenes/papeleria1.jpg", descripcion: "Fuerte y versátil.", precio: 4 },
    { nombre: "Calculadora de Escritorio", img: "imagenes/papeleria2.jpg", descripcion: "Pantalla grande y clara.", precio: 15 },
    { nombre: "Portadocumentos", img: "imagenes/papeleria3.jpg", descripcion: "Elegante y funcional.", precio: 6 },
    { nombre: "Pegamento en Barra", img: "imagenes/papeleria4.jpg", descripcion: "No tóxico y fácil de aplicar.", precio: 2 },
    { nombre: "Cinta Correctora", img: "imagenes/papeleria1.jpg", descripcion: "Aplicación limpia.", precio: 3 },
    { nombre: "Caja Organizadora", img: "imagenes/papeleria2.jpg", descripcion: "Guarda útiles y papeles.", precio: 9 },
    { nombre: "Sello Personalizado", img: "imagenes/papeleria3.jpg", descripcion: "Ideal para oficina o negocios.", precio: 14 }
  ],

  arte: [
    { nombre: "Acuarelas", img: "imagenes/papeleria1.jpg", descripcion: "Colores vivos para tus creaciones.", precio: 10 },
    { nombre: "Pinceles de Artista", img: "imagenes/papeleria2.jpg", descripcion: "De distintos tamaños.", precio: 9 },
    { nombre: "Papel para Dibujo", img: "imagenes/papeleria3.jpg", descripcion: "Alta calidad para tus obras.", precio: 7 },
    { nombre: "Témperas Escolares", img: "imagenes/papeleria4.jpg", descripcion: "Seguras y lavables.", precio: 6 },
    { nombre: "Set de Óleos", img: "imagenes/papeleria1.jpg", descripcion: "Colores profesionales.", precio: 15 },
    { nombre: "Pinceles de Detalle", img: "imagenes/papeleria2.jpg", descripcion: "Para trazos finos.", precio: 8 },
    { nombre: "Lienzo 30x40", img: "imagenes/papeleria3.jpg", descripcion: "Listo para pintar.", precio: 12 },
    { nombre: "Caballetes de Madera", img: "imagenes/papeleria4.jpg", descripcion: "Ajustables y estables.", precio: 20 },
    { nombre: "Tinta China", img: "imagenes/papeleria1.jpg", descripcion: "Para dibujos expresivos.", precio: 5 },
    { nombre: "Pasteles Secos", img: "imagenes/papeleria2.jpg", descripcion: "Colores suaves y mezclables.", precio: 11 },
    { nombre: "Set de Grafito", img: "imagenes/papeleria3.jpg", descripcion: "Lápices de dibujo artísticos.", precio: 9 },
    { nombre: "Rotuladores de Arte", img: "imagenes/papeleria4.jpg", descripcion: "Doble punta, tonos profesionales.", precio: 18 },
    { nombre: "Acrílicos", img: "imagenes/papeleria1.jpg", descripcion: "Colores brillantes y duraderos.", precio: 13 },
    { nombre: "Set de Espátulas", img: "imagenes/papeleria2.jpg", descripcion: "Para técnicas mixtas.", precio: 7 },
    { nombre: "Paleta Plástica", img: "imagenes/papeleria3.jpg", descripcion: "Para mezclar colores fácilmente.", precio: 4 }
  ]
};



    const productosContainer = document.getElementById("productosContainer");
    const paginacion = document.getElementById("paginacion");
    let categoriaActual = "escritura";
    let paginaActual = 1;
    const productosPorPagina = 6;

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
        btn.addEventListener("click", (event) => {
          event.preventDefault();
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