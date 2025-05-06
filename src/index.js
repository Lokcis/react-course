// Importamos los módulos necesarios de React:
// - Fragment: permite agrupar elementos JSX sin agregar nodos extra al DOM.
// - useEffect: hook que permite ejecutar efectos secundarios (como logs, llamadas a APIs, etc.).
// - useState: hook para manejar el estado local de un componente funcional.
import React, { Fragment, useEffect, useState } from "react";

// Importamos el método 'createRoot' desde 'react-dom/client' para renderizar la aplicación en el DOM.
import ReactDOM from "react-dom/client";

// Importamos el componente 'Posts' desde otro archivo (aunque en este fragmento no se utiliza).
import { Posts } from "./Posts";

// Creamos la raíz del proyecto React, que se engancha al elemento con id "root" en el HTML.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Definimos un componente funcional llamado 'Counter'.
function Counter() {
  // Declaramos un estado local 'mensaje' para almacenar lo que el usuario escriba en el input.
  const [mensaje, setMensaje] = useState("");

  // Declaramos un estado local 'counter' para contar cuántas veces se presiona el botón "Incrementar".
  const [counter, setCounter] = useState(0);

  // useEffect se ejecuta cada vez que cambia el valor de 'counter'.
  // En este caso, simplemente imprime "render" en la consola.
  useEffect(() => {
    console.log("render");
  }, [counter]);

  // El componente retorna una interfaz con:
  // - Un input de texto
  // - Un botón para mostrar una alerta con el texto ingresado
  // - Un contador con su botón para incrementar
  return (
    <div>
      {/* Input controlado: actualiza el estado 'mensaje' cada vez que cambia el valor */}
      <input onChange={(e) => setMensaje(e.target.value)} />

      {/* Botón que al hacer clic muestra una alerta con el mensaje escrito */}
      <button
        onClick={() => {
          alert("El mensaje es: " + mensaje);
        }}
      >
        Save
      </button>

      <hr />

      {/* Muestra el valor actual del contador */}
      <h1>Counter: {counter}</h1>

      {/* Botón que incrementa el contador en uno al hacer clic */}
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  );
}

// Renderizamos el componente 'Counter' dentro de un Fragment vacío.
// Aunque aquí el Fragment no es estrictamente necesario, es útil si se quiere agregar más componentes hermanos.
root.render(
  <>
    <Counter />
  </>
);
