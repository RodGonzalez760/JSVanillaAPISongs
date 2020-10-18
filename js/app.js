// Importa todo lo que se esté exportando desde el archivo interfaz, y todo tendrá el alias UI...por lo tanto podremos usar
// UI.formularioBuscar o UI.divBuscar, etc...
import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e) {
    e.preventDefault();

    // Obtener datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if ( artista === '' || cancion === '' ) {
        UI.divMensajes.textContent = 'Error...Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);

        return;
    }

    // Consultar nuestra API
    const busqueda = new API(artista, cancion);
    busqueda.consultarApi();
}