<h1> Análisis y Reflexión <h1>

<h4>

>_Los tres tienen muchas similitudes, pero al mismo tiempo muchas diferencias, ya que cada proyecto requerirá una complejidad diferente y, por lo tanto, dependerá de cada desarrollador cuál usar. Desde este punto de vista, la elección entre jQuery, GSAP o Anime.js depende de la complejidad de las animaciones necesarias y de la importancia de mantener la integridad del ciclo de vida de los componentes de React._


>_Para proyectos complejos y animaciones fluidas, GSAP y Anime.js son las opciones preferibles. Sin embargo, para una máxima consistencia y simplicidad, el React puro sigue siendo la mejor opción en escenarios menos exigentes. En mi opinión, me gusta usar más React puro, ya que me da más libertad para hacer lo que quiero._

<h4>


# Trabajo Práctico Nro 4: Programación Dinámica

## Propósito de Enseñanza
Que los estudiantes profundicen en la implementación de efectos y animaciones en aplicaciones React, utilizando librerías JavaScript avanzadas como jQuery, GSAP y Anime.js, y comprendan cómo estas herramientas optimizan las interacciones visuales.

## Objetivo de Aprendizaje
Se espera que los estudiantes puedan implementar animaciones complejas y efectos avanzados en React usando librerías JavaScript, y que sean capaces de analizar y comprender las ventajas y limitaciones de estas librerías en un entorno React.

## Carácter
Obligatoria, asincrónica e individual.

## Duración
Disponible desde el **lunes 14/10/2024** hasta el **20/10/2024 23:59hs**.

## Pasos para llevar a cabo la actividad

### 1. Manipulación del DOM con jQuery en React
- **Tarea:** Implementar un botón en React que, al ser clicado, cambie el color de fondo de un párrafo utilizando jQuery. 
  - **Requisito:** Integrar la manipulación del DOM de jQuery dentro del ciclo de vida de un componente de React (investigar cómo integrarlos adecuadamente).
  
- **Tarea adicional:** Crear otro botón que oculte o revele un elemento (imagen o párrafo) con un efecto de fade in/out, también utilizando jQuery, asegurándose de coordinar correctamente con los estados de React.

### 2. Animaciones con GSAP en React
- **Tarea:** Implementar una animación que haga que un elemento (como un cuadro) cambie de tamaño, color y posición en secuencia usando GSAP.
  - **Requisito:** La animación debe estar controlada por un botón en React y debe utilizar GSAP para manejar tanto la interpolación de las propiedades como las transiciones suaves.
  
- **Control de animación:** Añadir control de la animación con los hooks de estado de React (activar/desactivar animación con un estado booleano).

### 3. Animaciones en serie con Anime.js en React
- **Tarea:** Utilizar Anime.js para crear una animación en la que varios elementos de una lista aparezcan uno por uno de manera secuencial, con un efecto de rebote al final de cada animación.
  - **Requisito:** Los elementos deben ser generados dinámicamente a partir de un estado en React y animados con Anime.js.

### 4. Optimización
- **Tarea:** Investigar y aplicar buenas prácticas para la optimización de animaciones dentro de React utilizando GSAP y Anime.js.
  - **Ejemplo de optimización:** Utilizar `requestAnimationFrame`, evitar renders innecesarios, etc.

### 5. Análisis y Reflexión
- **Tarea:** Escribir un análisis comparando el uso de jQuery, GSAP y Anime.js dentro de React. 
  - **Preguntas a reflexionar:** ¿Cómo la integración de estas librerías afecta al ciclo de vida de los componentes de React? ¿Hay casos en los que sea preferible usar React puro para manejar efectos y animaciones?

## Medio de entrega de la Actividad
- Subir a la plataforma un archivo comprimido que contenga todos los archivos que utilizaron para la resolución de la consigna (tanto para React como para JavaScript nativo).
- Incluir un documento de texto (docx/txt/pdf...) con el análisis y reflexión de la actividad.

## Criterios de Evaluación
- Se tendrá en cuenta la entrega en tiempo y forma, y su correcta resolución.

## Acciones del tutor para esta actividad
- Estarán a disposición el foro de consultas, y los encuentros sincrónicos programados en el cronograma para evacuar dudas respecto a la actividad.
