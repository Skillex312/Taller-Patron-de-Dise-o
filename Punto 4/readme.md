El patrón Chain of Responsibility permite que una solicitud pase a través de una cadena de manejadores (objetos que procesan la solicitud). Cada manejador puede:
🔹 Procesar la solicitud y detener la cadena (si ya se resolvió).
🔹 Pasar la solicitud al siguiente manejador (si no puede resolverla).

El problema planteado en el ejercicio consiste en manejar una serie de verificaciones sobre una transacción bancaria, como la validación de límites de retiro, detección de lavado de dinero y autorización de transacciones.
Dado que estas validaciones deben realizarse en un orden específico y no todas las transacciones requieren las mismas validaciones, el patrón Cadena de Responsabilidad es ideal porque:

✅ Encapsula cada validación en un objeto independiente.
✅ Permite agregar o modificar validaciones sin afectar el código principal.
✅ Facilita la flexibilidad y extensibilidad si en el futuro se agregan más verificaciones.
✅ Evita una gran estructura de condicionales (if-else anidados).

Otros patrones que podríamos haber considerado:

Strategy: útil si solo necesitáramos aplicar una validación a la vez (pero aquí se necesita una secuencia).
Decorator: adecuado si solo agregáramos características a un objeto, pero aquí las verificaciones son condicionales y en secuencia.

Este patrón permite un flujo dinámico donde las transacciones pasan por múltiples controles sin acoplamiento fuerte entre ellos.

