// ============================================================
// Hermanos Jota — Catálogo dinámico
// Archivo: js/app.js
// - Renderiza las tarjetas en #contenedor-destacados (index y productos)
// - Cada tarjeta enlaza a su página de detalle (producto.html?id=X)
// - Renderiza el detalle en #detalle-producto
// ============================================================

// 1. Catálogo en un array de objetos
// Cada producto tiene id, nombre, precio, imagen,
// una descripción corta y una lista de características (detalle).
const productos = [
  {
    id: 1,
    nombre: "Mesa de Noche Aconcagua",
    precio: 98000,
    imagen: "catalogo/Mesa de Noche Aconcagua.png",
    descripcion:
      "Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Diseño limpio y funcional.",
    detalle: [
      "Medidas: 45×35×60 cm",
      "Materiales: Roble macizo FSC®, herrajes soft-close",
      "Acabado: Barniz mate de poliuretano",
      "Almacenamiento: 1 cajón + repisa inferior (cajón con cierre suave)",
    ],
  },
  {
    id: 2,
    nombre: "Sofá Patagonia",
    precio: 520000,
    imagen: "catalogo/Sofá Patagonia.png",
    descripcion:
      "Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas cónicas de madera.",
    detalle: [
      "Medidas: 220×90×80 cm",
      "Estructura: Madera de eucalipto certificada FSC®",
      "Tapizado: Lino 100% natural premium",
      "Relleno: Espuma HR + plumón reciclado",
      "Sostenibilidad: Materiales 100% reciclables",
    ],
  },
  {
    id: 3,
    nombre: "Mesa Comedor Pampa",
    precio: 410000,
    imagen: "catalogo/Mesa Comedor Pampa.png",
    descripcion:
      "Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave.",
    detalle: [
      "Medidas: 160-240×90×75 cm",
      "Materiales: Roble macizo FSC®, mecanismo alemán",
      "Acabado: Aceite-cera natural",
      "Capacidad: 6-10 comensales",
      "Sistema de mariposa central",
    ],
  },
  {
    id: 4,
    nombre: "Sillas Córdoba",
    precio: 260000,
    imagen: "catalogo/Sillas Córdoba.png",
    descripcion:
      "Set de 4 sillas apilables en contrachapado moldeado de nogal y estructura tubular (Sage Green).",
    detalle: [
      "Medidas: 45×52×80 cm",
      "Materiales: Contrachapado nogal, tubo de acero",
      "Acabado: Laca mate, pintura epoxi",
      "Apilables: Hasta 6 sillas",
    ],
  },
  {
    id: 5,
    nombre: "Escritorio Costa",
    precio: 289000,
    imagen: "catalogo/Escritorio Costa.png",
    descripcion:
      "Escritorio compacto con cajón organizado y tapa pasacables integrada en bambú laminado.",
    detalle: [
      "Medidas: 120×60×75 cm",
      "Materiales: Bambú laminado, herrajes ocultos",
      "Acabado: Laca mate resistente",
      "Almacenamiento: 1 cajón con organizador",
      "Cables: Pasacables integrado",
    ],
  },
  {
    id: 6,
    nombre: "Silla de Trabajo Belgrano",
    precio: 132000,
    imagen: "catalogo/Silla de Trabajo Belgrano.png",
    descripcion:
      "Silla ergonómica regulable en altura con respaldo de malla transpirable y asiento en tejido reciclado.",
    detalle: [
      "Medidas: 60×60×90-100 cm",
      "Materiales: Malla técnica, tejido reciclado",
      "Acabado: Base cromada",
      "Regulación: Altura + inclinación",
      "Certificación: Ergonomía europea EN 1335",
    ],
  },
  {
    id: 7,
    nombre: "Aparador Uspallata",
    precio: 350000,
    imagen: "catalogo/Aparador Uspallata.png",
    descripcion:
      "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
    detalle: [
      "Medidas: 180 × 45 × 75 cm",
      "Materiales: Nogal macizo FSC®, herrajes de latón",
      "Acabado: Aceite natural ecológico",
      "Peso: 68 kg",
      "Capacidad: 6 compartimentos interiores",
    ],
  },
  {
    id: 8,
    nombre: "Biblioteca Recoleta",
    precio: 298000,
    imagen: "catalogo/Biblioteca Recoleta.png",
    descripcion:
      "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
    detalle: [
      "Medidas: 100 × 35 × 200 cm",
      "Materiales: Estructura de acero, estantes de roble",
      "Acabado: Laca mate ecológica",
      "Capacidad: 45 kg por estante",
      "Modulares: 5 estantes ajustables",
    ],
  },
  {
    id: 9,
    nombre: "Butaca Mendoza",
    precio: 175000,
    imagen: "catalogo/Butaca Mendoza.png",
    descripcion:
      "Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, mientras que su diseño orgánico aporta calidez y sofisticación a cualquier ambiente contemporáneo.",
    detalle: [
      "Medidas: 80 × 75 × 85 cm",
      "Materiales: Guatambú macizo, tela bouclé",
      "Acabado: Cera vegetal, tapizado premium",
      "Tapizado: Repelente al agua y manchas",
      "Confort: Espuma alta densidad",
    ],
  },
  {
    id: 10,
    nombre: "Sillón Copacabana",
    precio: 385000,
    imagen: "catalogo/Sillón Copacabana.png",
    descripcion:
      "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con un diseño icónico que trasciende tendencias y épocas.",
    detalle: [
      "Medidas: 90 × 85 × 95 cm",
      "Materiales: Cuero curtido vegetal, acero pintado",
      "Acabado: Cuero anilina premium",
      "Rotación: 360° silenciosa y suave",
      "Garantía: 10 años en estructura",
    ],
  },
  {
    id: 11,
    nombre: "Mesa de Centro Araucaria",
    precio: 285000,
    imagen: "catalogo/Mesa de Centro Araucaria.png",
    descripcion:
      "Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea, combinando la frialdad del mármol con la calidez de la madera.",
    detalle: [
      "Medidas: 90 × 90 × 45 cm",
      "Materiales: Sobre de mármol Patagonia, patas de nogal",
      "Acabado: Mármol pulido, aceite natural en madera",
      "Peso: 42 kg",
      "Carga máxima: 25 kg distribuidos",
    ],
  },
];

// 2. Función asíncrona que simula una petición a la API
// usando async/await y setTimeout (2 segundos).
function obtenerProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos), 2000);
  });
}

// ============================================================
// ESTADO DEL CARRITO (localStorage)
// Se guarda como objeto: { "1": 2, "3": 1 } → id de producto: cantidad.
// ============================================================
const CLAVE_CARRITO = "hermanosjota-carrito";
const botonCarrito = document.getElementById("abrir-carrito");

// Panel que lista los productos del carrito. Se crea una sola vez por página.
const panelCarrito = document.createElement("div");
const headerPagina = document.querySelector("header");
if (headerPagina) {
  panelCarrito.style.cssText =
    "position:absolute; top:calc(100% + 0.5rem); right:var(--spacing-md); z-index:50; width:min(20rem, 90vw); display:none;";
  headerPagina.appendChild(panelCarrito);
}

function obtenerCarrito() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_CARRITO)) || {};
  } catch {
    return {};
  }
}

function guardarCarrito(carrito) {
  localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
}

// Suma las cantidades de todos los ítems guardados.
function cantidadTotalCarrito() {
  const carrito = obtenerCarrito();
  return Object.values(carrito).reduce((suma, cantidad) => suma + cantidad, 0);
}

// Construye el HTML con el listado de productos del carrito.
function construirListaCarrito() {
  const carrito = obtenerCarrito();
  const ids = Object.keys(carrito);

  if (ids.length === 0) {
    return '<p class="caption">Tu carrito está vacío.</p>';
  }

  let total = 0;
  const items = ids
    .map((id) => {
      const producto = productos.find((p) => p.id === Number(id));
      if (!producto) return "";
      const cantidad = carrito[id];
      total += producto.precio * cantidad;
      return `<p><strong>${producto.nombre}</strong> × ${cantidad} — $${(
        producto.precio * cantidad
      ).toLocaleString("es-AR")}</p>`;
    })
    .join("");

  return (
    items +
    `<p class="caption"><strong>Total: $${total.toLocaleString("es-AR")}</strong></p>`
  );
}

// Pinta el listado dentro del panel (usa .card para fondo y sombra).
function mostrarCarrito() {
  panelCarrito.innerHTML = `<div class="card">${construirListaCarrito()}</div>`;
}

// Actualiza el contador del botón: "Carrito (0)" → "Carrito (3)".
// Si el panel está abierto, lo refresca con los cambios.
function actualizarContadorCarrito() {
  if (botonCarrito) {
    botonCarrito.textContent = `Carrito (${cantidadTotalCarrito()})`;
  }
  if (panelCarrito && panelCarrito.style.display === "block") {
    mostrarCarrito();
  }
}

// Agrega (o suma 1) el producto al carrito y refresca el contador.
function agregarAlCarrito(id) {
  const carrito = obtenerCarrito();
  const clave = String(id);
  carrito[clave] = (carrito[clave] || 0) + 1;
  guardarCarrito(carrito);
  actualizarContadorCarrito();
}

// Mostrar/ocultar el panel al hacer clic en el botón.
if (botonCarrito) {
  botonCarrito.addEventListener("click", (evento) => {
    evento.stopPropagation();
    const abierto = panelCarrito.style.display === "block";
    panelCarrito.style.display = abierto ? "none" : "block";
    mostrarCarrito();
  });
}

// Clic en cualquier otra parte cierra el panel.
document.addEventListener("click", () => {
  panelCarrito.style.display = "none";
});

// Al cargar la página, muestra los ítems guardados previamente en localStorage.
actualizarContadorCarrito();

// ============================================================
// RENDERIZADO EN GRID (index.html y productos.html)
// ============================================================
const contenedor = document.getElementById("contenedor-destacados");
if (contenedor) {
  const esCatalogo = window.location.pathname.includes("productos");

  // 3. Renderizado dinámico vía DOM
  // Cada tarjeta incluye:
  //   - imagen, nombre y precio
  //   - enlace "Ver detalle" → producto.html?id=X
  //   - botón "Agregar al carrito"
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
          <a
            class="btn btn-secondary"
            href="producto.html?id=${producto.id}"
            aria-label="Ver detalle de ${producto.nombre}"
          >
            Ver detalle
          </a>
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

  // 4. Interactividad con addEventListener (delegación de eventos):
  // el listener vive en el contenedor y detecta cualquier botón de compra.
  contenedor.addEventListener("click", (evento) => {
    const boton = evento.target.closest("button");
    if (!boton) return;
    agregarAlCarrito(Number(boton.dataset.id));
  });

  // Carga inicial: muestra "Cargando catálogo..." y luego renderiza.
  // En la home solo se muestran los 4 primeros (destacados).
  (async function iniciar() {
    contenedor.innerHTML = "<p>Cargando catálogo...</p>";
    const lista = await obtenerProductos();
    const aMostrar = esCatalogo ? lista : lista.slice(0, 4);
    renderizarProductos(aMostrar);
  })();
}

// ============================================================
// RENDERIZADO DE DETALLE (producto.html)
// ============================================================
const detalle = document.getElementById("detalle-producto");
if (detalle) {
  // Mismo patrón de delegación: el botón de compra del detalle también responde.
  detalle.addEventListener("click", (evento) => {
    const boton = evento.target.closest("button");
    if (!boton) return;
    agregarAlCarrito(Number(boton.dataset.id));
  });

  (async function mostrarDetalle() {
    detalle.innerHTML = "<p>Cargando detalle...</p>";

    // Lee el id de la URL: producto.html?id=3
    const parametros = new URLSearchParams(window.location.search);
    const id = Number(parametros.get("id"));

    const lista = await obtenerProductos();
    const producto = lista.find((p) => p.id === id);

    if (!producto) {
      detalle.innerHTML =
        '<p>No encontramos ese producto. <a href="productos.html">Volver al catálogo</a>.</p>';
      return;
    }

    detalle.innerHTML = `
      <article class="card">
        <img src="${encodeURI(producto.imagen)}" alt="${producto.nombre}" />
        <h2>${producto.nombre}</h2>
        <p>$${producto.precio.toLocaleString("es-AR")}</p>
        <p>${producto.descripcion}</p>
        <ul>
          ${producto.detalle.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <button
          class="btn"
          data-id="${producto.id}"
          aria-label="Agregar ${producto.nombre} al carrito"
        >
          Agregar al carrito
        </button>
        <a class="btn btn-secondary" href="productos.html">
          Volver al catálogo
        </a>
      </article>
    `;
  })();
}
