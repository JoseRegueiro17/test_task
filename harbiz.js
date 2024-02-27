var entrenadores = [
    { nombre: "A", reputacion: 4.5, plazasDisponibles: 1 },
    { nombre: "B", reputacion: 3.2, plazasDisponibles: 4 },
    { nombre: "C", reputacion: 1.2, plazasDisponibles: 3 },
    { nombre: "D", reputacion: 3.4, plazasDisponibles: 2 },
];
var clientes = [
    { nombre: "q", importanciaReputacion: 2.6 },
    { nombre: "r", importanciaReputacion: 3.7 },
    { nombre: "s", importanciaReputacion: 8.5 },
    { nombre: "t", importanciaReputacion: 9.7 },
    { nombre: "u", importanciaReputacion: 2.6 },
    { nombre: "v", importanciaReputacion: 4.7 },
    { nombre: "w", importanciaReputacion: 5.6 },
    { nombre: "x", importanciaReputacion: 3.7 },
    { nombre: "y", importanciaReputacion: 8.1 },
    { nombre: "z", importanciaReputacion: 2.5 },
];
// Función de asignación
var asignacion = function () {
    // Ordenar entrenadores por reputación de mayor a menor
    entrenadores.sort(function (a, b) { return b.reputacion - a.reputacion; });
    // Ordenar clientes por importancia de reputación de mayor a menor
    clientes.sort(function (a, b) { return b.importanciaReputacion - a.importanciaReputacion; });
    // Iterar sobre cada cliente y asignarlo al mejor entrenador disponible
    clientes.forEach(function (cliente) {
        var mejorEntrenador = null;
        for (var i = 0; i < entrenadores.length; i++) {
            if (entrenadores[i].plazasDisponibles > 0) {
                mejorEntrenador = entrenadores[i];
                break;
            }
        }
        if (mejorEntrenador) {
            // Calcular el nivel de satisfacción en una escala del 1 al 10
            var satisfaccion = Math.min(Math.round((2 * mejorEntrenador.reputacion * 10) / cliente.importanciaReputacion), 10);
            // Asignar cliente con mayor importancia de reputacion al entrenador con mayor reputacion disponible
            console.log("Cliente \u001B[1m".concat(cliente.nombre, "\u001B[0m asignado al entrenador \u001B[1m").concat(mejorEntrenador.nombre, "\u001B[0m.\nNivel de satisfacci\u00F3n del cliente con el entrenador: \u001B[1m").concat(satisfaccion, "/10\u001B[0m\n"));
            // Eliminar una plaza disponible del entrenador asignado.
            mejorEntrenador.plazasDisponibles--;
        }
        else {
            console.log("No hay entrenadores disponibles para el cliente ".concat(cliente.nombre, " por falta de plazas disponibles"));
        }
    });
};
asignacion();
