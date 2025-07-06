const formulario = document.getElementById('suscripcion');
const inputs = formulario.querySelectorAll('input');


const validaciones ={
    nombre: value => value.length >= 6 && value.includes(' ') ? '': 'El nombre debe tener al menos 6 caracteres y un espacio',
    email: values => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Email no válido.',
    password: value => /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(value) ? '' : 'Mínimo 8 caracteres, letras y números.',
    repassword: (value, password) => value === password ? '' : 'Las contraseñas no coinciden.',
    edad: value => parseInt(value) >= 18 ? '' : 'Debes tener al menos 18 años.',
    telefono: value => /^\d{7}$/.test(value) ? '' : 'El teléfono debe tener 7 dígitos y sin espacios.',
    direccion: value => value.length >= 5 && /\s/.test(value) ? '' : 'Dirección inválida (mínimo 5 caracteres con espacio).',
    ciudad: value => value.length >= 3 ? '' : 'Ciudad inválida.',
    cp: value => value.length >= 3 ? '' : 'Código Postal inválido.',
    dni: value => /^\d{7,8}$/.test(value) ? '' : 'DNI inválido (7 u 8 dígitos).'

};


// Validacion de campos individuales

function validateField(input) {
  const validar = validaciones[input.name];
  const error = validar ? validar(input.value) : '';
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = error;
  return error;
}

function clearError(input) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = '';
}


// Obtener datos del formulario como objeto

function getFormData() {
  const data = {};
  inputs.forEach(input => {
    data[input.name] = input.value;
  });
  return data;
}


// Mostrar modal con mensaje

function mostrarModalConDatos(titulo, datos) {
  const modalMensaje = document.getElementById('modalMensaje');
  modalMensaje.innerHTML = `
    <h3>${titulo}</h3>
    <pre>${JSON.stringify(datos, null, 2)}</pre>
  `;
  document.getElementById('modal').classList.remove('oculto');
}



document.getElementById('cerrarModal').addEventListener('click', () => {
  document.getElementById('modal').classList.add('oculto');
});


// Validar y enviar formulario

formulario.addEventListener('submit', async e => {
  e.preventDefault();

  let errores = [];
  inputs.forEach(input => {
    const error = validateField(input);
    if (error) errores.push(error);
  });

  if (errores.length > 0) {
    mostrarModalConDatos('Errores de validación', { errores });
    return;
  }

  const formData = getFormData();

  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (!respuesta.ok)
      throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);

    const data = await respuesta.json();

    // Guardar en LocalStorage
    localStorage.setItem('formularioData', JSON.stringify(formData));

    mostrarModalConDatos('¡Suscripción Exitosa! 🎉', data);
  } catch (error) {
    mostrarModalConDatos('Error en el envío 😢', { mensaje: error.message });
  }
});


// Cargar datos del LocalStorage al iniciar

window.onload = () => {
  const datosGuardados = localStorage.getItem('formularioData');
  if (datosGuardados) {
    const datos = JSON.parse(datosGuardados);
    inputs.forEach(input => {
      if (datos[input.name]) {
        input.value = datos[input.name];
      }
    });
  }

  // Agregar listeners a cada input
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('focus', () => clearError(input));
  });
};
