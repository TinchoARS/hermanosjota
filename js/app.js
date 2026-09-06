const productos = [
  {
    id: 1,
    nombre: "Aparador Uspallata",
    precio: 245000,
    imagen: "catalogo/Aparador Uspallata.png",
    descripcion:
      "Aparador de líneas limpias inspirado en los valles de Uspallata. Fabricado en nogal negro con patas de algarrobo, ofrece amplio almacenamiento oculto tras una puerta corrediza y un cajón interno. Su superficie mate realza la veta natural de la madera.",
    fabricacion:
      "Maderas nobles argentinas (nogal negro y algarrobo). Herrajes de bronce cepillado a mano. Acabado con aceites naturales de tung, libre de compuestos volátiles. Pieza firmada y numerada por el taller.",
  },
  {
    id: 2,
    nombre: "Biblioteca Recoleta",
    precio: 320000,
    imagen: "catalogo/Biblioteca Recoleta.png",
    descripcion:
      "Biblioteca estante abierto que evoca los balcones de Recoleta. Estructura de roble claro con repisas regulables y base cerrada para ocultar objetos. Diseño modular que permite combinar unidades verticales.",
    fabricacion:
      "Estructura de roble europeo aserrado en nuestro taller. Repisas de roble masivo con bordes vivos. Uniones de cola de milano tradicional. Sellado con cera de abeja y aceite de linaza.",
  },
  {
    id: 3,
    nombre: "Butaca Mendoza",
    precio: 188000,
    imagen: "catalogo/Butaca Mendoza.png",
    descripcion:
      "Butaca de descanso con respaldo abultado y reposabrazos envolventes. Inspirada en los sillones de estancia mendocina, combina comodidad profunda con una silueta compacta ideal para espacios modernos.",
    fabricacion:
      "Estructura interna de eucalipto industrial. Tela tapizada en lino lavado color arena. Relleno de espuma de alta densidad y fibra siliconada. Patas de quebracho torneadas a mano.",
  },
  {
    id: 4,
    nombre: "Mesa de Centro Araucaria",
    precio: 156000,
    imagen: "catalogo/Mesa de Centro Araucaria.png",
    descripcion:
      "Mesa de centro de forma orgánica con borde vivo tallado. La textura marcada de la araucaria se convierte en el protagonista visual. Base cruzada de hierro negro mate que aporta contraste industrial.",
    fabricacion:
      "Superficie maciza de araucaria chaqueña, cepillada y lijada a mano. Base de hierro forjado con pintura epoxi negra mate. Altura: 40 cm. Tratamiento con resina poliuretánica de dos componentes.",
  },
  {
    id: 5,
    nombre: "Mesa de Noche Aconcagua",
    precio: 98000,
    imagen: "catalogo/Mesa de Noche Aconcagua.png",
    descripcion:
      "Mesa de noche minimalista inspirada en la pureza de las cumbres. Un único cajón con cierre suave y una repisa inferior abierta. Forma rectangular con esquinas redondeadas para un toque amable.",
    fabricacion:
      "Cuerpo de MDF ecológico cubierto con chapado de cerezo americano. Cajón con correderas Blum de cierre suave. Patas de acero cepillado. Barniz de agua ecológico certificado.",
  },
  {
    id: 6,
    nombre: "Escritorio Costa",
    precio: 289000,
    imagen: "catalogo/Escritorio Costa.png",
    descripcion:
      "Escritorio de trabajo con cajones laterales y repisa elevada para monitor. Inspirado en los muebles de oficina de la costa atlántica, combina funcionalidad profesional con calidez artesanal.",
    fabricacion:
      "Tablero de roble macizo con bordes vivos. Cajones de pino nordico con frente de cerezo. Herrajes de bronzina à la française. Patas de acero pulido con base antideslizante.",
  },
  {
    id: 7,
    nombre: "Mesa Comedor Pampa",
    precio: 410000,
    imagen: "catalogo/Mesa Comedor Pampa.png",
    descripcion:
      "Mesa de comedor extensible para ocho personas, inspirada en la amplitud de la pampa. Tablero de una sola pieza con borde natural live-edge. Extensiones ocultas bajo la superficie.",
    fabricacion:
      "Tablero de 3 cm de espesor en quebracho colorado, selección de los mejores troncos del litoral. Base de hierro tubular soldado y curvado a mano. Mecanismo de extensión tandem de origen europeo. Acabado con aceite hardwax.",
  },
  {
    id: 8,
    nombre: "Silla de Trabajo Belgrano",
    precio: 132000,
    imagen: "catalogo/Silla de Trabajo Belgrano.png",
    descripcion:
      "Silla de escritorio ergonómica con respaldo curvo y asiento acolchado. Inspirada en las sillas de biblioteca del barrio Belgrano, ofrece soporte lumbar natural y un diseño que se integra en cualquier ambiente.",
    fabricacion:
      "Estructura de fresno europeo laminado y curvado al vapor. Asiento y respaldo tapizados en lino belga color carbón. Patas de fresno macizo con unión de espiga. Todo el proceso es 100 % artesanal.",
  },
  {
    id: 9,
    nombre: "Sillas Córdoba",
    precio: 260000,
    imagen: "catalogo/Sillas Córdoba.png",
    descripcion:
      "Par de sillas de comedor con respaldo ligeramente inclinado y asiento entrelazado de cuero. Inspiradas en las sillas de las casonas cordobesas, equilibran elegancia clásica y confort contemporáneo.",
    fabricacion:
      "Estructura de nogal macizo. Asiento de cuero vegetal teñido con anilinas naturales cosido a mano. Patas rectas con travesaño reforzante. Sellado con goma laca shellac tradicional.",
  },
  {
    id: 10,
    nombre: "Sillón Copacabana",
    precio: 385000,
    imagen: "catalogo/Sillón Copacabana.png",
    descripcion:
      "Sillón de tres cuerpos con patas elevadas y tapizado profundo. Inspirado en los sofás de playa de Copacabana, su amplitud invita al descanso prolongado. Respaldo con cojines independientes extraíbles.",
    fabricacion:
      "Estructura interna de eucalipto laminado. Respaldo y asiento con espuma de doble densidad (35 kg/m³ y 25 kg/m³). Tapicería en lino lavado premium. Patas de abeto cepilladas y selladas con cera.",
  },
  {
    id: 11,
    nombre: "Sofá Patagonia",
    precio: 520000,
    imagen: "catalogo/Sofá Patagonia.png",
    descripcion:
      "Sofá modular de cinco piezas inspirado en la vastedad patagónica. Configuración en L con chaise longue integrada. Módulos independientes que permiten reconfigurar el sillón según el espacio.",
    fabricacion:
      "Estructura de pincoya marina laminada. Espuma de alta resiliencia con núcleo de springs ensacados. Tapicería de bouclé teñida con tintes vegetales. Módulos conectados con herrajes de acero inoxidable. Diseño personalizable.",
  },
];

function obtenerProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos), 2000);
  });
}


function obtenerCarrito() {
  try {
    const carrito = JSON.parse(localStorage.getItem("carrito"));
    return Array.isArray(carrito) ? carrito : [];
  } catch {
    return [];
  }
}

function guardarCarrito(carrito) {
  try {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    return true;
  } catch {
    return false;
  }
}

function agregarAlCarrito(producto) {
  const carrito = obtenerCarrito();
  const existente = carrito.find((item) => item?.id === producto.id);

  if (existente) {
    existente.cantidad = Number.isInteger(existente.cantidad) ? existente.cantidad + 1 : 1;
  } else {
    carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: 1 });
  }

  if (guardarCarrito(carrito)) {
    mostrarFeedbackCarrito(producto.nombre);
  }
}

function mostrarFeedbackCarrito(nombre) {
  const feedback = document.getElementById("carrito-feedback");
  if (!feedback) return;

  feedback.textContent = `${nombre} se agregó al carrito`;
  feedback.classList.add("visible");
  setTimeout(() => feedback.classList.remove("visible"), 2500);
}


const contenedor = document.getElementById("contenedor-destacados");
if (contenedor) {
  const esCatalogo = window.location.pathname.includes("productos");

  function renderizarProductos(lista) {
    contenedor.innerHTML = lista
      .map(
        (producto) => `
        <article class="card">
          <a href="producto.html?id=${producto.id}" class="card-link" aria-label="Ver detalles de ${producto.nombre}">
            <img src="${encodeURI(producto.imagen)}" alt="${producto.nombre}" />
            <h3>${producto.nombre}</h3>
          </a>
          <p>$${producto.precio.toLocaleString("es-AR")}</p>
          <button
            class="btn"
            data-id="${producto.id}"
            aria-label="Agregar ${producto.nombre} al carrito"
          >
            Agregar al carrito
          </button>
        </article>
      `
      )
      .join("");
  }

  contenedor.addEventListener("click", (evento) => {
    const boton = evento.target.closest("button");
    if (!boton) return;

    const producto = productos.find((p) => p.id === Number(boton.dataset.id));
    if (producto) {
      agregarAlCarrito(producto);
    }
  });

  (async function iniciar() {
    contenedor.innerHTML = "<p>Cargando catálogo...</p>";
    const lista = await obtenerProductos();
    const aMostrar = esCatalogo ? lista : lista.slice(0, 4);
    renderizarProductos(aMostrar);
  })();
}


const detalleContenedor = document.getElementById("producto-detalle");
if (detalleContenedor) {
  (async function initDetalle() {
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get("id");

    if (!idParam) {
      detalleContenedor.innerHTML = `
        <h1>Producto no encontrado</h1>
        <p>No se indicó un producto. Volvé al <a href="productos.html">catálogo</a>.</p>
      `;
      return;
    }

    const lista = await obtenerProductos();
    const producto = lista.find((p) => p.id === Number(idParam));

    if (!producto) {
      detalleContenedor.innerHTML = `
        <h1>Producto no encontrado</h1>
        <p>El producto que buscás no existe. Volvé al <a href="productos.html">catálogo</a>.</p>
      `;
      return;
    }

    document.title = `${producto.nombre} — Hermanos Jota`;

    detalleContenedor.innerHTML = `
      <section class="producto-detalle">
        <div class="producto-detalle__imagen">
          <img src="${encodeURI(producto.imagen)}" alt="${producto.nombre}" />
        </div>
        <div class="producto-detalle__info">
          <h1>${producto.nombre}</h1>
          <p class="producto-detalle__precio">$${producto.precio.toLocaleString("es-AR")}</p>

          <div class="producto-detalle__descripcion">
            <h2>Descripción</h2>
            <p>${producto.descripcion}</p>
          </div>

          <div class="producto-detalle__fabricacion">
            <h2>Fabricación</h2>
            <p>${producto.fabricacion}</p>
          </div>

          <button class="btn producto-detalle__btn" aria-label="Agregar ${producto.nombre} al carrito">
            Añadir al Carrito
          </button>

          <p id="carrito-feedback" class="carrito-feedback" role="status"></p>
        </div>
      </section>
    `;

    detalleContenedor.addEventListener("click", (evento) => {
      const boton = evento.target.closest(".producto-detalle__btn");
      if (!boton) return;

      agregarAlCarrito(producto);
    });
  })();
}
