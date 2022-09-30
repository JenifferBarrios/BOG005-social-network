// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
export const bienvenida = () => {
  const section = document.createElement('section');
  section.id ="seccion-bienvenida"
  const titulo = document.createElement('p');
  titulo.id = "texto-bienvenida";
  const botonInicio = document.createElement('button');
  botonInicio.id = 'explora';
  const logo = document.createElement('img');
  logo.src = '/imagenes/Recurso 1.png';
  logo.id = "logo-bienvenida";
 titulo.innerHTML = '<b>Atrévete</b> a explorar el realismo mágico de nuestra <b> geografía Colombiana.</b> <br> <b>Guarda tus memorias</b> y haz que mas personas se animen a conocerlas';
  botonInicio.textContent = 'Explora';
  botonInicio.addEventListener('click', () => {
    onNavigate('/registro');
  });

  section.append(logo, titulo, botonInicio);
  return section;
};
