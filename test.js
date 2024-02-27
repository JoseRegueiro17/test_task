import { asignacion } from './harbiz';

describe('Función asignacion', () => {
  it('debería asignar clientes a entrenadores y calcular el nivel de satisfacción', () => {
    // Simular datos de entrenadores y clientes
    const entrenadores = [
      {nombre:"A", reputacion: 4.5, plazasDisponibles: 1},
      {nombre:"B", reputacion: 3.2, plazasDisponibles: 4},
      {nombre:"C", reputacion: 1.2, plazasDisponibles: 3},
      {nombre:"D", reputacion: 3.4, plazasDisponibles: 2},
    ];

    const clientes = [
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

    // Llama a la función de asignación
    const resultado = asignacion(entrenadores, clientes);

    // Verificar que todos los clientes han sido asignados a un entrenador
    const clientesAsignados = resultado.filter(({ entrenador }) => entrenador !== undefined);
    expect(clientesAsignados.length).toBe(clientes.length);

    // Verificar que el nivel de satisfacción se ha calculado correctamente para cada cliente asignado
    clientesAsignados.forEach(({ cliente, satisfaccion }) => {
      expect(satisfaccion).toBeGreaterThan(0);
      expect(satisfaccion).toBeLessThanOrEqual(10);
    });
  });
});
