
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

// Eventos blur y focus para validar campo por campo
inputs.forEach(input => {
    input.addEventListener('blur', () => {validateField(input)});
    input.addEventListener('focus', () => {clearError(input)});
    });

// validar input individyal
function validateField(input){
    const validacion = validaciones[input.name];
    const errorTexto = validacion ? validacion(input.value) : '';
    const errorSpan = input.nextElementSibling;// Siguiente hermano del input 
    errorSpan.textContent = errorTexto;
    return errorTexto;
}
// Limpiar error al enfocar campo
function clearError(input) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = '';
}

// Obtener datos del formulario en string
function getFormData() {
    let data = '';
    inputs.forEach(input => {
        data += `${input.previousElementSibling.textContent} ${input.value}\n`;
    });
    return data;
}

// Validar todos los campos al enviar
form.addEventListener('enviar', e => {
    e.preventDefault();
    let errors = [];
    inputs.forEach(input => {
        const error = validateField(input);
        if (error) errors.push(error);
    });
    if (errors.length === 0) {
        alert("Formulario enviado con éxito:\n" + getFormData());
    } else {
        alert("Errores:\n" + errors.join('\n'));
    }
});