const gridContainer = document.getElementById('grid-container');
const editButton = document.getElementById('edit-button');
const saveButton = document.getElementById('save-button');

let isEditing = false;

function loadData() {
  const busquedas = JSON.parse(localStorage.getItem('busquedas')) || [];
  return busquedas;
}

function saveData(data) {
  localStorage.setItem('busquedas', JSON.stringify(data));
}

function renderGrid(data) {
  gridContainer.innerHTML = ''; // Limpiar el grid

  data.forEach((item, index) => {
    const textInput = document.createElement('input');
    textInput.value = item.texto;
    textInput.disabled = !isEditing;

    const importInput = document.createElement('input');
    importInput.value = item.importe;
    importInput.type = 'number';
    importInput.disabled = !isEditing;

    gridContainer.appendChild(textInput);
    gridContainer.appendChild(importInput);
  });
}

function toggleEditMode() {
  isEditing = !isEditing;
  editButton.style.display = isEditing ? 'none' : 'block';
  saveButton.style.display = isEditing ? 'block' : 'none';
  renderGrid(loadData());
}

function saveChanges() {
  const inputs = gridContainer.querySelectorAll('input');
  const newData = [];

  for (let i = 0; i < inputs.length; i += 2) {
    const text = inputs[i].value;
    const importe = parseFloat(inputs[i + 1].value) || 0; // Si no es numérico, guarda 0

    if (text.trim() === '') {
      alert('El texto no puede estar vacío.');
      return;
    }

    newData.push({ texto: text, importe: importe });
  }

  saveData(newData);
  toggleEditMode(); // Salir del modo edición
}

editButton.addEventListener('click', toggleEditMode);
saveButton.addEventListener('click', saveChanges);

// Cargar datos iniciales
renderGrid(loadData());