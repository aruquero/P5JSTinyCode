# P5.js TinyCode

![N|Solid](https://i.gyazo.com/818c382f4fae05309f047120ee4ed15b.png)

# Indice

  - Introducción
  - La aplicación
  - Decisiones de diseño
  - Tutorial
  - Gif sobre el funcionamiento

# Informe

**Introducción**:

En esta octava práctica hemos centrado nuestros esfuerzos en el aprendizaje y conocimiento de una nueva plataforma y código para programar llamado "P5.js". Si bien es verdad que presenta muchas similitudes con lo ya visto en processing, hemos tenido la oportunidad de profundizar brevemente en esta nueva variante.

**La aplicación**:

Nuestro pequeño proyecto de muestra se fundamenta en un barrido de pantalla que cambia el color del fondo.
Este barrido de basa en una recta que actualiza su posición en cada iteración del draw, así mismo para el relleno del fondo tenemos un cuadrado, el cual, uno de sus lados va en función a la posición de la recta previamente mencionada. Con esto conseguimos que se actualice al mismo tiempo.
Por último, tenemos tres variables asignadas al RGB, las cuales se actualizan de manera aleatoria cada vez que se completa un barrido de la pantalla.

![N|Solid](https://i.gyazo.com/99472f119f3cb1f28528eacc4fabd626.png)

**Decisiones de diseño**:

Se ha decidido jugar con el barrido del fondo, las variables random para los colores RGB y las figuras primitivas que presenta el lenguaje para intentar simbolizar un barrido de colores a la vez que avanza la línea del fondo.
Se ha decidido implementar tres teclas de manejo al usuario para fomentar la interacción y dar una capa más enriquecedora a la aplicación, permitiendo así un flujo más interactivo con el usuario.


**Tutorial**

Nuestra aplicación permite intercambiar mediante tres teclas el modo de barrido:

  -Flecha superior: Barrido de la pantalla hacia la dirección que apunta la flecha(arriba).
  
  -Flecha inferior: Barrido de la pantalla hacia la dirección que apunta la flecha(abajo).
  
  -BackSpace(Tecla de borrar): Detiene el barrido de la pantalla, para volver a iniciarlo hay que pulsar alguna de las dos teclas anteriores.


**Gif sobre el funcionamiento**


![Alt Text](https://i.gyazo.com/b0852ee34342d0022a432a8d4ca0d91f.gif)
