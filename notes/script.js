
// Función para cargar datos desde localStorage
function cargarDatos() {
  const busquedas = JSON.parse(localStorage.getItem('busquedas')) || { items: [] };
  return busquedas.items;
}

// Función para guardar datos en localStorage
function guardarDatos(datos) {
  localStorage.setItem('busquedas', JSON.stringify({ items: datos }));
}

// Función para crear una fila del grid
function crearFila(texto = '', importe = '', esVacia = false) {
  const gridContainer = document.getElementById('grid-container');

  const textoInput = document.createElement('input');
  textoInput.type = 'text';
  textoInput.value = texto;
  textoInput.classList.add('grid-item');
  if (esVacia) textoInput.classList.add('empty');

  const importeInput = document.createElement('input');
  importeInput.type = 'number';
  importeInput.value = importe;
  importeInput.classList.add('grid-item');
  if (esVacia) importeInput.classList.add('empty');

  gridContainer.appendChild(textoInput);
  gridContainer.appendChild(importeInput);

  if (esVacia) {
    textoInput.addEventListener('blur', verificarGuardar); // Escuchar cambios en tiempo real
    importeInput.addEventListener('blur', verificarGuardar); // Escuchar cambios en tiempo real
  }
}

// Función para verificar si se deben guardar los datos
function verificarGuardar() {
  const gridContainer = document.getElementById('grid-container');
  const inputs = gridContainer.querySelectorAll('input');
  const ultimoPar = inputs.length - 2; // Índice del último par de inputs

  const texto = inputs[ultimoPar].value;
  const importe = inputs[ultimoPar + 1].value;

  // Guardar solo si ambos campos tienen contenido
  if (texto && importe) {
    const datos = cargarDatos();
    datos.push({ texto, importe });
    guardarDatos(datos);
    renderizarGrid(); // Re-renderizar para limpiar los campos y añadir nueva fila vacía
  }
}

// Función para renderizar el grid
function renderizarGrid() {
  const gridContainer = document.getElementById('grid-container');
  gridContainer.innerHTML = ''; // Limpiar el grid

  const datos = cargarDatos();
  datos.forEach(item => crearFila(item.texto, item.importe));
  crearFila('', '', true); // Añadir fila vacía
}

// Inicializar el grid
renderizarGrid();
