En este diseño se ha aplicado el patrón Template Method. Este patrón permite definir el esqueleto de un algoritmo en una clase base y delegar la implementación de ciertos pasos a clases derivadas. Es ideal cuando existen varias variaciones de un proceso con una estructura común, como es el caso del control de inventario, donde cada tipo de control sigue los mismos pasos generales, pero con algoritmos específicos.

Diagrama de clases
  Clase abstracta ControlInventario: Define la estructura del proceso con el método gestionarInventario(), que ejecuta en secuencia los pasos comunes:
    cargarDatos()
    analizarInventario()
    aplicarAlgoritmo()
    mostrarResultados()

  Métodos analizarInventario() y aplicarAlgoritmo(): Son abstractos, forzando a las subclases a implementar su propia versión.
  Clases ControlSimple y ControlDeterministico: Implementan las variaciones específicas de analizarInventario() y aplicarAlgoritmo().

Otros patrones (como Strategy) podrían haber sido considerados, pero Template Method es el más adecuado porque:

Encapsula la estructura fija del proceso dentro de gestionarInventario(), evitando código duplicado en las subclases.
Permite flexibilidad: Cada subclase implementa su propia lógica sin modificar la estructura general.

Sin embargo, Template Method es la mejor opción porque define claramente una secuencia de pasos con variaciones específicas en subclases.
