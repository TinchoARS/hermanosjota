const productos = [
  [1, "Aparador Uspallata", 245000, "Aparador de líneas limpias inspirado en los valles de Uspallata. Fabricado en nogal negro con patas de algarrobo, ofrece amplio almacenamiento oculto tras una puerta corrediza y un cajón interno. Su superficie mate realza la veta natural de la madera.", "Maderas nobles argentinas (nogal negro y algarrobo). Herrajes de bronce cepillado a mano. Acabado con aceites naturales de tung, libre de compuestos volátiles. Pieza firmada y numerada por el taller."],
  [2, "Biblioteca Recoleta", 320000, "Biblioteca estante abierto que evoca los balcones de Recoleta. Estructura de roble claro con repisas regulables y base cerrada para ocultar objetos. Diseño modular que permite combinar unidades verticales.", "Estructura de roble europeo aserrado en nuestro taller. Repisas de roble masivo con bordes vivos. Uniones de cola de milano tradicional. Sellado con cera de abeja y aceite de linaza."],
  [3, "Butaca Mendoza", 188000, "Butaca de descanso con respaldo abultado y reposabrazos envolventes. Inspirada en los sillones de estancia mendocina, combina comodidad profunda con una silueta compacta ideal para espacios modernos.", "Estructura interna de eucalipto industrial. Tela tapizada en lino lavado color arena. Relleno de espuma de alta densidad y fibra siliconada. Patas de quebracho torneadas a mano."],
  [4, "Mesa de Centro Araucaria", 156000, "Mesa de centro de forma orgánica con borde vivo tallado. La textura marcada de la araucaria se convierte en el protagonista visual. Base cruzada de hierro negro mate que aporta contraste industrial.", "Superficie maciza de araucaria chaqueña, cepillada y lijada a mano. Base de hierro forjado con pintura epoxi negra mate. Altura: 40 cm. Tratamiento con resina poliuretánica de dos componentes."],
  [5, "Mesa de Noche Aconcagua", 98000, "Mesa de noche minimalista inspirada en la pureza de las cumbres. Un único cajón con cierre suave y una repisa inferior abierta. Forma rectangular con esquinas redondeadas para un toque amable.", "Cuerpo de MDF ecológico cubierto con chapado de cerezo americano. Cajón con correderas Blum de cierre suave. Patas de acero cepillado. Barniz de agua ecológico certificado."],
  [6, "Escritorio Costa", 289000, "Escritorio de trabajo con cajones laterales y repisa elevada para monitor. Inspirado en los muebles de oficina de la costa atlántica, combina funcionalidad profesional con calidez artesanal.", "Tablero de roble macizo con bordes vivos. Cajones de pino nordico con frente de cerezo. Herrajes de bronzina à la française. Patas de acero pulido con base antideslizante."],
  [7, "Mesa Comedor Pampa", 410000, "Mesa de comedor extensible para ocho personas, inspirada en la amplitud de la pampa. Tablero de una sola pieza con borde natural live-edge. Extensiones ocultas bajo la superficie.", "Tablero de 3 cm de espesor en quebracho colorado, selección de los mejores troncos del litoral. Base de hierro tubular soldado y curvado a mano. Mecanismo de extensión tandem de origen europeo. Acabado con aceite hardwax."],
  [8, "Silla de Trabajo Belgrano", 132000, "Silla de escritorio ergonómica con respaldo curvo y asiento acolchado. Inspirada en las sillas de biblioteca del barrio Belgrano, ofrece soporte lumbar natural y un diseño que se integra en cualquier ambiente.", "Estructura de fresno europeo laminado y curvado al vapor. Asiento y respaldo tapizados en lino belga color carbón. Patas de fresno macizo con unión de espiga. Todo el proceso es 100 % artesanal."],
  [9, "Sillas Córdoba", 260000, "Par de sillas de comedor con respaldo ligeramente inclinado y asiento entrelazado de cuero. Inspiradas en las sillas de las casonas cordobesas, equilibran elegancia clásica y confort contemporáneo.", "Estructura de nogal macizo. Asiento de cuero vegetal teñido con anilinas naturales cosido a mano. Patas rectas con travesaño reforzante. Sellado con goma laca shellac tradicional."],
  [10, "Sillón Copacabana", 385000, "Sillón de tres cuerpos con patas elevadas y tapizado profundo. Inspirado en los sofás de playa de Copacabana, su amplitud invita al descanso prolongado. Respaldo con cojines independientes extraíbles.", "Estructura interna de eucalipto laminado. Respaldo y asiento con espuma de doble densidad (35 kg/m³ y 25 kg/m³). Tapicería en lino lavado premium. Patas de abeto cepilladas y selladas con cera."],
  [11, "Sofá Patagonia", 520000, "Sofá modular de cinco piezas inspirado en la vastedad patagónica. Configuración en L con chaise longue integrada. Módulos independientes que permiten reconfigurar el sillón según el espacio.", "Estructura de pincoya marina laminada. Espuma de alta resiliencia con núcleo de springs ensacados. Tapicería de bouclé teñida con tintes vegetales. Módulos conectados con herrajes de acero inoxidable. Diseño personalizable."],
].map(([id, nombre, precio, descripcion, fabricacion]) => ({
  id,
  nombre,
  precio,
  imagen: `catalogo/${nombre}.png`,
  descripcion,
  fabricacion,
}));

function obtenerProductos() {
  return new Promise((resolve) => setTimeout(() => resolve(productos), 2000));
}

const CLAVE_CARRITO = "hermanosjota-carrito";
const botonCarrito = document.getElementById("abrir-carrito");
const panelCarrito = document.createElement("div");
const headerPagina = document.querySelector("header");

if (headerPagina) {
  panelCarrito.style.cssText =
    "position:absolute; top:calc(100% + 0.5rem); right:var(--spacing-md); z-index:50; width:min(20rem, 90vw); display:none;";
  headerPagina.appendChild(panelCarrito);
}

function obtenerCarrito() {
  try {
    const carrito = JSON.parse(localStorage.getItem(CLAVE_CARRITO));
    if (!carrito || typeof carrito !== "object" || Array.isArray(carrito)) return {};

    return Object.fromEntries(
      Object.entries(carrito).filter(
        ([id, cantidad]) => productos.some((producto) => producto.id === Number(id)) && Number.isInteger(cantidad) && cantidad > 0
      )
    );
  } catch {
    return {};
  }
}

function guardarCarrito(carrito) {
  try {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
    return true;
  } catch {
    return false;
  }
}

function cantidadTotalCarrito() {
  return Object.values(obtenerCarrito()).reduce((total, cantidad) => total + cantidad, 0);
}

function construirListaCarrito() {
  const carrito = obtenerCarrito();
  const ids = Object.keys(carrito);
  if (!ids.length) return '<p class="caption">Tu carrito está vacío.</p>';

  let total = 0;
  const items = ids
    .map((id) => {
      const producto = productos.find((item) => item.id === Number(id));
      const cantidad = carrito[id];
      total += producto.precio * cantidad;
      return `<p><strong>${producto.nombre}</strong> × ${cantidad} — $${(
        producto.precio * cantidad
      ).toLocaleString("es-AR")}</p>`;
    })
    .join("");

  return `${items}<p class="caption"><strong>Total: $${total.toLocaleString("es-AR")}</strong></p>`;
}

function mostrarCarrito() {
  panelCarrito.innerHTML = `<div class="card">${construirListaCarrito()}</div>`;
}

function actualizarContadorCarrito() {
  if (botonCarrito) botonCarrito.textContent = `Carrito (${cantidadTotalCarrito()})`;
  if (panelCarrito.style.display === "block") mostrarCarrito();
}

function mostrarFeedbackCarrito(nombre) {
  const feedback = document.getElementById("carrito-feedback");
  if (!feedback) return;
  feedback.textContent = `${nombre} se agregó al carrito`;
  feedback.classList.add("visible");
  setTimeout(() => feedback.classList.remove("visible"), 2500);
}

function agregarAlCarrito(producto) {
  const carrito = obtenerCarrito();
  const id = String(producto.id);
  carrito[id] = (carrito[id] || 0) + 1;
  if (guardarCarrito(carrito)) {
    actualizarContadorCarrito();
    mostrarFeedbackCarrito(producto.nombre);
  }
}

if (botonCarrito) {
  botonCarrito.addEventListener("click", (evento) => {
    evento.stopPropagation();
    panelCarrito.style.display = panelCarrito.style.display === "block" ? "none" : "block";
    mostrarCarrito();
  });
}

document.addEventListener("click", () => {
  panelCarrito.style.display = "none";
});

actualizarContadorCarrito();

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
          <button class="btn" data-id="${producto.id}" aria-label="Agregar ${producto.nombre} al carrito">
            Agregar al carrito
          </button>
        </article>
      `
      )
      .join("");
  }

  contenedor.addEventListener("click", (evento) => {
    const boton = evento.target.closest("button");
    const producto = productos.find((item) => item.id === Number(boton?.dataset.id));
    if (producto) agregarAlCarrito(producto);
  });

  (async function iniciar() {
    contenedor.innerHTML = "<p>Cargando catálogo...</p>";
    const lista = await obtenerProductos();
    renderizarProductos(esCatalogo ? lista : lista.slice(0, 4));
  })();
}

const detalleContenedor = document.getElementById("producto-detalle");
if (detalleContenedor) {
  (async function initDetalle() {
    const id = Number(new URLSearchParams(window.location.search).get("id"));
    if (!id) {
      detalleContenedor.innerHTML = `<h1>Producto no encontrado</h1><p>No se indicó un producto. Volvé al <a href="productos.html">catálogo</a>.</p>`;
      return;
    }

    const producto = (await obtenerProductos()).find((item) => item.id === id);
    if (!producto) {
      detalleContenedor.innerHTML = `<h1>Producto no encontrado</h1><p>El producto que buscás no existe. Volvé al <a href="productos.html">catálogo</a>.</p>`;
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
          <div class="producto-detalle__descripcion"><h2>Descripción</h2><p>${producto.descripcion}</p></div>
          <div class="producto-detalle__fabricacion"><h2>Fabricación</h2><p>${producto.fabricacion}</p></div>
          <button class="btn producto-detalle__btn" aria-label="Agregar ${producto.nombre} al carrito">Añadir al Carrito</button>
          <p id="carrito-feedback" class="carrito-feedback" role="status"></p>
        </div>
      </section>
    `;

    detalleContenedor.addEventListener("click", (evento) => {
      if (evento.target.closest(".producto-detalle__btn")) agregarAlCarrito(producto);
    });
  })();
}
