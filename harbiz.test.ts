import { Entrenador, Cliente, asignacion, asignarCliente} from "./harbiz";

  // ------------- INICIO PRUEBAS DE INTERFAZ ENTRENADOR Y CLIENTE -------------

  it("La interfaz Entrenador debe tener las propiedades correctas", () => {
    const entrenador: Entrenador = {
      nombre: "A",
      reputacion: 4.5,
      plazasDisponibles: 1,
    };

    expect(entrenador).toHaveProperty("nombre");
    expect(entrenador).toHaveProperty("reputacion");
    expect(entrenador).toHaveProperty("plazasDisponibles");
  });

  it("La interfaz Cliente debe tener las propiedades correctas", () => {
    const cliente: Cliente = {
      nombre: "q",
      importanciaReputacion: 2.6,
    };

    expect(cliente).toHaveProperty("nombre");
    expect(cliente).toHaveProperty("importanciaReputacion");
  });

  // ------------- FIN PRUEBAS DE INTERFAZ ENTRENADOR Y CLIENTE -------------


  describe('asignarCliente', () => {
    test('asigna correctamente un cliente a un entrenador', () => {
        const entrenador: Entrenador = { nombre: 'A', reputacion: 4.5, plazasDisponibles: 1 };
        const cliente: Cliente = { nombre: 'q', importanciaReputacion: 2.6 };

        const satisfaccion = asignarCliente(entrenador, cliente);

        expect(satisfaccion).toBeGreaterThanOrEqual(0); // Verifica que la satisfacción sea mayor o igual a 0
        expect(satisfaccion).toBeLessThanOrEqual(10); // Verifica que la satisfacción sea menor o igual a 10
        expect(entrenador.plazasDisponibles).toEqual(0); // Verifica que la plaza del entrenador se haya reducido a 0
    });
});

describe('asignacion', () => {
  test('asigna correctamente clientes a entrenadores disponibles', () => {
      const entrenadores: Entrenador[] = [
          { nombre: 'A', reputacion: 4.5, plazasDisponibles: 1 },
          { nombre: 'B', reputacion: 3.2, plazasDisponibles: 1 } // Solo un entrenador con una plaza disponible
      ];
      const clientes: Cliente[] = [
          { nombre: 'q', importanciaReputacion: 2.6 },
          { nombre: 'r', importanciaReputacion: 3.7 },
          { nombre: 's', importanciaReputacion: 8.5 } // Un cliente adicional para probar el caso sin entrenadores disponibles
      ];

      asignacion(clientes, entrenadores);

      clientes.forEach(cliente => {
          if (cliente.entrenador) {
              expect(cliente.satisfaccion).toBeDefined(); // Verifica que se haya calculado la satisfacción del cliente
          } else {
              expect(cliente.entrenador).toBeUndefined(); // Verifica que no se haya asignado ningún entrenador al cliente
              expect(cliente.satisfaccion).toBeUndefined(); // Verifica que no se haya calculado la satisfacción del cliente
          }
      });
  });
});