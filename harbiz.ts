export interface Entrenador {
    nombre: string;
    reputacion: number;
    plazasDisponibles: number;
}

 export interface Cliente {
    nombre: string;
    importanciaReputacion: number;
    entrenador?: Entrenador;
    satisfaccion?: number;
}

export const entrenadores: Entrenador[] = [
    {nombre:"A", reputacion: 4.5, plazasDisponibles: 1},
    {nombre:"B", reputacion: 3.2, plazasDisponibles: 4},
    {nombre:"C", reputacion: 1.2, plazasDisponibles: 3},
    {nombre:"D", reputacion: 3.4, plazasDisponibles: 2},
];

export const clientes: Cliente[] = [
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

 export const asignarCliente = (entrenador: Entrenador, cliente: Cliente) => {
    // Calcular el nivel de satisfaccion en escala de 10/10
    const satisfaccion = Math.min(Math.round((2 * entrenador.reputacion * 10) / cliente.importanciaReputacion), 10);
    // Eliminar una plaza disponible
    entrenador.plazasDisponibles--;
    // Asignar cliente
    console.log(`Cliente \x1b[1m${cliente.nombre}\x1b[0m asignado al entrenador \x1b[1m${entrenador.nombre}\x1b[0m.\nNivel de satisfacción del cliente con el entrenador: \x1b[1m${satisfaccion}/10\x1b[0m\n`);
    return satisfaccion;
    
    
  }
  
  export const asignacion = (clientes: Cliente[], entrenadores: Entrenador[]) => {
    // Ordenar entrenadores por reputación de mayor a menor
    entrenadores.sort((a, b) => b.reputacion - a.reputacion);
  
    // Ordenar clientes por importancia de reputación de mayor a menor
    clientes.sort((a, b) => b.importanciaReputacion - a.importanciaReputacion);
  
    // Iterar sobre cada cliente y buscar el mejor entrenador disponible
    clientes.forEach(cliente => {
      const mejorEntrenador = entrenadores.find(entrenador => entrenador.plazasDisponibles > 0);
      if (mejorEntrenador) {
        asignarCliente(mejorEntrenador, cliente);
      } else {
        console.log(`No hay entrenadores disponibles para el cliente ${cliente.nombre} por falta de plazas disponibles`);
      }
    });

      // Si existen más plazas que clientes.
    const plazasSinClientes = entrenadores.filter(entrenador => entrenador.plazasDisponibles > 0);
    if (plazasSinClientes.length > 0){
      console.log(`Hay ${plazasSinClientes.length} plazas disponibles sin clientes.`)
    }
  };

  
  asignacion(clientes, entrenadores);