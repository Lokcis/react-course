// Importamos la librería 'prop-types' para poder validar los tipos de propiedades (props)
// que recibe nuestro componente. Esto ayuda a detectar errores en tiempo de desarrollo.
import PropTypes from "prop-types";

// Definimos un componente funcional de React llamado 'Button'.
// Este componente recibe dos props:
// - text: el texto que se mostrará en el botón (obligatorio)
// - name: un nombre que también se mostrará junto al texto (opcional, con valor por defecto "Some User")
export function Button({ text, name = "Some User" }) {
  return (
    // Renderizamos un botón HTML. Cuando el usuario hace clic en él,
    // se ejecuta una función anónima que muestra "Hola mundo" en la consola del navegador.
    <button onClick={function () {
      console.log("Hola mundo");
    }}>
      {/* Mostramos el contenido del botón, compuesto por el texto y el nombre separados por un guion */}
      {text} - {name}
    </button>
  );
}

// Especificamos los tipos de props esperados usando PropTypes.
// En este caso, 'text' debe ser una cadena (string) y es obligatorio.
// Si no se pasa 'text', React mostrará una advertencia en la consola en modo desarrollo.
Button.propTypes = {
  text: PropTypes.string.isRequired,
};
