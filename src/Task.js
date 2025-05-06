// Importamos el archivo de estilos CSS donde están definidas las clases visuales como 'card', 'bg-red' y 'bg-green'.
import "./task.css";

// Definimos un componente funcional llamado 'TaskCard'.
// Este componente recibe una prop booleana llamada 'ready' que indica si la tarea está lista o no.
export function TaskCard({ ready }) {
  return (
    // Usamos la clase 'card' (definida en el CSS) para aplicar un fondo oscuro, color de texto claro y padding.
    <div className="card">
      
      {/* Título estático de la tarjeta */}
      <h1>Mi primer tarea</h1>

      {/* 
        Mostramos un mensaje de estado dentro de un <span>, 
        el cual cambia tanto su texto como su color de fondo según el valor de 'ready':
        - Si 'ready' es true: muestra "Tarea realizada" con fondo verde.
        - Si 'ready' es false: muestra "Tarea pendiente" con fondo rojo.
      */}
      <span className={ready ? 'bg-green' : 'bg-red'}>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}
