// Importamos la clase 'Component' desde la librería 'react'.
// Esto nos permite crear un componente basado en clases en lugar de funciones.
import { Component } from "react";

// Definimos un componente de clase llamado 'Saludar' que extiende de React.Component.
// Los componentes de clase tienen un método obligatorio llamado 'render' que retorna el JSX a mostrar.
export class Saludar extends Component {
  
  // Método 'render': es el que define lo que se mostrará en la interfaz.
  render() {
    // Retornamos un encabezado <h1> con el texto "Hello world".
    return <h1>Hello world</h1>;
  }
}
