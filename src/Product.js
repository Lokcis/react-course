// Definimos un componente funcional llamado 'Product'.
// Este componente muestra simplemente un encabezado con el texto "Producto".
// No recibe props ni tiene lógica adicional.
function Product() {
    return (
      <div>
        {/* Título principal del componente */}
        <h1>Producto</h1>
      </div>
    );
  }
  
  // Exportamos un segundo componente funcional llamado 'Navbar'.
  // Este componente representa una barra de navegación simple con texto "navigation".
  // En una aplicación más grande, aquí normalmente se colocarían enlaces o menús.
  export function Navbar() {
    return (
      <nav>
        {/* Texto de navegación */}
        navigation
      </nav>
    );
  }
  
  // Exportamos 'Product' como exportación por defecto del módulo.
  // Esto permite importarlo sin llaves: `import Product from './archivo'`.
  export default Product;
  