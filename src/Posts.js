// Importamos el ícono 'VscGlobe' desde la librería 'react-icons'.
// Este ícono se mostrará dentro del botón como elemento decorativo.
import { VscGlobe } from "react-icons/vsc";

// Definimos un componente funcional de React llamado 'Posts'.
// Este componente no recibe props y su principal función es hacer una petición HTTP al hacer clic en un botón.
export const Posts = () => {
  return (
    // Renderizamos un botón HTML. Al hacer clic en él, se ejecuta una función flecha.
    <button
      onClick={() => {
        // Usamos la función 'fetch' para hacer una solicitud GET a una API pública (jsonplaceholder).
        // Esta API devuelve un listado simulado de publicaciones (posts).
        fetch("https://jsonplaceholder.typicode.com/posts")
          // Convertimos la respuesta a formato JSON.
          .then((response) => response.json())
          // Imprimimos los datos obtenidos en la consola del navegador.
          .then((data) => console.log(data))
          // En caso de error durante la solicitud, lo capturamos e imprimimos en la consola.
          .catch((error) => console.error(error));
      }}
    >
      {/* Mostramos el ícono importado antes del texto del botón */}
      <VscGlobe />
      {/* Texto del botón que indica la acción que se realizará */}
      Traer datos
    </button>
  );
};
