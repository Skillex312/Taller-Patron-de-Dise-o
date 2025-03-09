El patrón Factory Method es ideal cuando se necesita delegar la creación de objetos a una subclase en lugar de instanciarlos directamente en el código principal.

Si en el futuro se agregan más tipos de tarjetas, el código de la fábrica puede ampliarse sin modificar el código de SimuladorCompra, promoviendo el Principio de Abierto/Cerrado de SOLID.

Podrían haberse considerado otros patrones, pero no serían tan adecuados:
Strategy podría haber sido una alternativa si se quisiera intercambiar dinámicamente estrategias de cálculo de cuotas, pero la clave aquí es la creación de objetos, no la variación de comportamiento.
