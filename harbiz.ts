interface Entrenador {
    nombre: string;
    reputacion: number;
    plazasDisponibles: number;
}

interface Cliente {
    nombre: string;
    importanciaReputacion: number;
}

const entrenadores: Entrenador[] = [
    {nombre:"A", reputacion: 4.5, plazasDisponibles: 1},
    {nombre:"B", reputacion: 3.2, plazasDisponibles: 4},
    {nombre:"C", reputacion: 1.2, plazasDisponibles: 3},
    {nombre:"D", reputacion: 3.4, plazasDisponibles: 2},
];

const clientes: Cliente[] = [
    {nombre: "q", importanciaReputacion: 2.6},
    {nombre: "r", importanciaReputacion: 3.7},
    {nombre: "s", importanciaReputacion: 8.5},
    {nombre: "t", importanciaReputacion: 9.7},
    {nombre: "u", importanciaReputacion: 2.6},
    {nombre: "v", importanciaReputacion: 4.7},
    {nombre: "w", importanciaReputacion: 5.6},
    {nombre: "x", importanciaReputacion: 3.7},
    {nombre: "y", importanciaReputacion: 8.1},
    {nombre: "z", importanciaReputacion: 2.5},
];


const asignacion = () => {
    // Ordenar entrenadores por reputación de mayor a menor
    entrenadores.sort((a, b) => b.reputacion - a.reputacion);

    // Ordenar clientes por importancia de reputación de mayor a menor
    clientes.sort((a, b) => b.importanciaReputacion - a.importanciaReputacion);

    // Iterar sobre cada cliente y asignarlo al mejor entrenador disponible
    clientes.forEach(cliente => {
        let mejorEntrenador: Entrenador | null = null;
        for (let i = 0; i < entrenadores.length; i++) {
            if (entrenadores[i].plazasDisponibles > 0) {
                mejorEntrenador = entrenadores[i];
                break;
            }
        }

        if (mejorEntrenador) {
            // Calcular el nivel de satisfaccion en una escala del 1 al 10
            const satisfaccion = Math.min(Math.round((2 * mejorEntrenador.reputacion * 10) / cliente.importanciaReputacion), 10);
            
            // Asignar cliente con mayor importancia de reputacion al entrenador con mayor reputacion disponible
            console.log(`Cliente \x1b[1m${cliente.nombre}\x1b[0m asignado al entrenador \x1b[1m${mejorEntrenador.nombre}\x1b[0m.\nNivel de satisfacción del cliente con el entrenador: \x1b[1m${satisfaccion}/10\x1b[0m\n`);
            // Eliminar una plaza disponible del entrenador asignado.
            mejorEntrenador.plazasDisponibles--;

        } else {
            console.log(`No hay entrenadores disponibles para el cliente ${cliente.nombre} por falta de plazas disponibles`);
        }
    });
};

asignacion();
