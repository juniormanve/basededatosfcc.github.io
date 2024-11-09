// Función para obtener los usuarios del localStorage
function obtenerUsuarios() {
    const usuarios = localStorage.getItem('usuarios');
    return usuarios ? JSON.parse(usuarios) : [];
}

// Función para guardar usuarios en localStorage
function guardarUsuarios(usuarios) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Registro de un nuevo usuario
document.getElementById('registroForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    const usuarios = obtenerUsuarios();
    usuarios.push({ nombre, usuario, contraseña });
    guardarUsuarios(usuarios);

    alert('Usuario registrado exitosamente');
    window.location.href = 'index.html'; // Redirige a la página de login
});

// Login de usuario
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('loginUsuario').value;
    const contraseña = document.getElementById('loginContraseña').value;

    const usuarios = obtenerUsuarios();
    const usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.contraseña === contraseña);

    if (usuarioEncontrado) {
        alert('Bienvenido ' + usuario);
        window.location.href = 'repositorio.html'; // Redirige a la página de administración
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

// Mostrar los usuarios registrados en la página de administración
