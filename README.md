# Test Harbiz José Luis Regueiro 

Para resolver el problema de asignación entre entrenadores y clientes, se crearon 2 funciones, una que ordena a los clientes según su importancia de reputación de mayor a menor y a los entrenadores según su reputación, también de mayor a menor.

Luego asigna a cada a cliente con su entrenador buscando que ambos valores sean los más altos disponibles

La segunda función asigna estos clientes, elimina una plaza disponible del entrenador, y evalúa el nivel de satisfacción igualando las escalas numéricas de ambos, sacando un porcentaje de satisfacción y llevándolo a una escala de 10/10.

También verifica en caso de que existan más Clientes que plazas disponibles, y en caso contrario que existan más Plazas que Clientes.

Se utilizó TypeScript y Node.js para realizar el ejercicio

Adicionalmente se agregaron pruebas con Jest para probar los distintos escenarios posibles.



------------

## Para entornos de desarollo (CodeSpace):
**Para ejecutar harviz.ts**

1) Instalar Ts-node:
	**npm install -g ts-node**

2) Ejecutar el proyecto
	**ts-node harbiz.ts**

**Para ejecutar harviz.test.ts** (pruebas con Jest)
	
**	npm test**

------------





## Test Full-Stack DudyFit

Se trata de resolver un problema de asignación entre entrenadores y clientes, en la cual se desea asignar al entrenador un conjunto de clientes en base a las preferencias. 
La solución debe de realizarse en 

Los entrenadores tienen una valoración de su reputación entre 0 y 5 (siendo 5, la valoración
más favorable) y los clientes valoran la importancia de tener un entrenador con una buena
reputación de 0 a 10 (siendo 10, que le dan mucha importancia a que su entrenador esté bien
valorado, y siendo 0 que no les importa nada la valoración de su entrenador).

Los entrenadores también tienen un límite de plazas disponibles para clientes.

El objetivo es que todos los clientes estén asignados a un entrenador de la forma que el
conjunto de clientes tenga el mayor valor de satisfacción. Pudiéndose medir esta satisfacción
como se considere oportuno, siéntete libre de establecer el criterio que consideres.



| Nombre del entrenador | Reputación | Plazas disponibles |
|-----------------------|------------|--------------------|
|           A           |    4.5     |          1         |
|           B           |    3.2     |          4         |
|           C           |    1.2     |          3         |
|           D           |    3.4     |          2         |


| Nombre de cliente  | Importancia de la reputación del entrenador |
|--------------------|---------------------------------------------|
|          q         |                     2.6                     |
|          r         |                     3.7                     |
|          s         |                     8.5                     |
|          t         |                     9.7                     |
|          u         |                     2.6                     |
|          v         |                     4.7                     |
|          w         |                     5.6                     |
|          x         |                     3.7                     |
|          y         |                     8.1                     |
|          z         |                     2.5                     |



Se espera uan resolución de este problema usando Node.js y preferiblemente TypeScript.

(OPCIONAL) Si tienes experiencia con algun Framework de testing puedes añadir algunos test.

La idea es cuando lo completes, nos compartas el código a través de Github para
evaluarlo, o puedes enviarnos un correo con la solución o dudas a borja@harbiz.io

Suerte 🍀 y esperamos tu mejor solución. 
Gracias
