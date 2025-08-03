<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/GusGus0012/juego-amigo-secreto">
    <img src="assets/amigo-secreto.png" alt="Logo" width="450" height="277">
  </a>

  <h3 align="center">Amigo Secreto</h3>

  <p align="center">
    Proyecto simple para realizar sorteos de amigo secreto con nombres ingresados por el usuario.
    <br />
    <a href="https://github.com/GusGus0012/juego-amigo-secreto"><strong>Explora la documentación »</strong></a>
    <br />
    <br />
    <a href="https://github.com/GusGus0012/juego-amigo-secreto">Ver Demo</a>
    ·
    <a href="https://github.com/GusGus0012/juego-amigo-secreto/issues">Reportar Bug</a>
    ·
    <a href="https://github.com/GusGus0012/juego-amigo-secreto/issues">Solicitar Funcionalidad</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de Contenido</summary>
  <ol>
    <li>
      <a href="#sobre-el-proyecto">Sobre el Proyecto</a>
      <ul>
        <li><a href="#construido-con">Construido Con</a></li>
      </ul>
    </li>
    <li>
      <a href="#primeros-pasos">Primeros Pasos</a>
      <ul>
        <li><a href="#prerrequisitos">Prerrequisitos</a></li>
        <li><a href="#instalacion">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contribuir">Contribuir</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#contacto">Contacto</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
  </ol>
</details>

---

## Sobre el Proyecto

[![Screenshot del Proyecto][product-screenshot]](https://gusgus0012.github.io/juego-amigo-secreto/)

Este proyecto es una aplicación web sencilla que permite:
- Ingresar una lista de nombres.
- Validar que no se ingresen duplicados ni espacios vacíos.
- Realizar un sorteo aleatorio para seleccionar un “Amigo Secreto”.

Fue creado como práctica para fortalecer las habilidades en **HTML**, **CSS** y sobre todo **JavaScript**, enfocándose en manipulación del DOM y manejo de eventos.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

### Construido Con

* **HTML5** – Estructura semántica de la interfaz.
* **CSS3** – Estilos personalizados y uso de Google Fonts.
* **JavaScript** – Lógica del sorteo y actualización dinámica del DOM.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

---

## Primeros Pasos

### Prerrequisitos

Para ejecutar el proyecto necesitas únicamente un navegador moderno (Chrome, Firefox, Edge, etc.).

### Instalación

1. Clona el repositorio
   ```sh
   git clone https://github.com/GusGus0012/juego-amigo-secreto.git
   ```
2. Accede a la carpeta del proyecto
   ```sh
   cd juego-amigo-secreto
   ```
3. Abre el archivo `index.html` en tu navegador

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

---

## Uso

1. Escribe nombres en el campo de texto.
2. Haz clic en **Añadir** para agregarlos a la lista.
3. Una vez que tengas al menos dos nombres, presiona **Sortear Amigo** para obtener un resultado aleatorio.

Ejemplo de funciones principales en JavaScript:

```javascript
function agregarAmigo() {
    let amigoAgregado = document.getElementById('amigo').value;  // Variable para almacenar el nombre del amigo agregado
    if (amigoAgregado.trim() === '') { // Verifica si el input está vacío o solo contiene espacios
        alert("Por favor, inserte un nombre."); // Mensaje de error si el nombre está vacío o solo contiene espacios
    }
    else if (amigos.includes(amigoAgregado)) {
        alert("El nombre ya existe. Por favor, inserte un nombre diferente."); // Mensaje de error si el nombre ya existe
    }
    else {
        amigos.push(amigoAgregado); // Añade el nombre a la lista de amigos
        actualizarListaAmigos(); // Actualiza la lista de amigos en la interfaz
    }
    return LimpiarCajaTexto(); // Sale de la función y limpia la casilla
}
```

```javascript
function sortearAmigo() {
    let maximo = amigos.length - 1; // Calcula el índice máximo basado en la cantidad de amigos
    let indiceAleatorio; // Variable para almacenar el número aleatorio generado que será el índice del amigo seleccionado
    if (amigos.length < 2) {
        alert("Por favor, agregue al menos dos amigos para realizar el sorteo."); // Mensaje de error si hay menos de dos amigos ya que no tendría sentido sortear
        return;
    }
    indiceAleatorio = Math.floor((Math.random() * (maximo + 1))); // Genera un número secreto aleatorio entre el mínimo = 0 (por eso ya no lo declaro como variable) y el máximo que sería la cantidad de amigos
    let resultado = document.getElementById('resultado'); // Obtiene el elemento donde se mostrará el resultado del sorteo
    resultado.innerHTML = amigos[indiceAleatorio]; // Muestra el nombre del amigo seleccionado aleatoriamente en el elemento resultado
}
```

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

---

## Roadmap

- [x] Añadir lista dinámica de amigos
- [x] Implementar validaciones para entradas duplicadas o vacías
- [x] Crear función de sorteo aleatorio
- [ ] Mejorar estilos visuales (CSS avanzado o framework)
- [ ] Habilitar reinicio de la lista
- [ ] Implementar almacenamiento local (LocalStorage)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

---

## Contribuir

¡Las contribuciones son lo que hace que la comunidad de código abierto sea increíble!  
Si tienes una sugerencia para mejorar este proyecto:

1. Haz un fork del proyecto
2. Crea una rama de feature (`git checkout -b feature/NuevaFeature`)
3. Haz commit de tus cambios (`git commit -m 'Agrega NuevaFeature'`)
4. Haz push a la rama (`git push origin feature/NuevaFeature`)
5. Abre un Pull Request

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

---

## Licencia

Distribuido bajo la licencia MIT. Consulta el archivo `LICENSE.txt` para más información.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

---

## Contacto

Gustavo Berdejo - [LinkedIn](https://www.linkedin.com/in/https://www.linkedin.com/in/gustavoberdejogaray/)

Link del Proyecto: [https://github.com/GusGus0012/juego-amigo-secreto](https://github.com/GusGus0012/juego-amigo-secreto)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

---

## Agradecimientos

* [Cómo escribir un README increíble en tu Github | Alura LATAM](https://www.aluracursos.com/blog/como-escribir-un-readme-increible-en-tu-github)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/GusGus0012/juego-amigo-secreto.svg?style=for-the-badge
[contributors-url]: https://github.com/GusGus0012/juego-amigo-secreto/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/GusGus0012/juego-amigo-secreto.svg?style=for-the-badge
[forks-url]: https://github.com/GusGus0012/juego-amigo-secreto/network/members
[stars-shield]: https://img.shields.io/github/stars/GusGus0012/juego-amigo-secreto.svg?style=for-the-badge
[stars-url]: https://github.com/GusGus0012/juego-amigo-secreto/stargazers
[issues-shield]: https://img.shields.io/github/issues/GusGus0012/juego-amigo-secreto.svg?style=for-the-badge
[issues-url]: https://github.com/GusGus0012/juego-amigo-secreto/issues
[license-shield]: https://img.shields.io/github/license/GusGus0012/juego-amigo-secreto.svg?style=for-the-badge
[license-url]: https://github.com/GusGus0012/juego-amigo-secreto/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/https://www.linkedin.com/in/gustavoberdejogaray/
[product-screenshot]: assets/screenshot.webp