// Componente 'Greeting':
// Este componente funcional muestra un saludo personalizado en un encabezado <h1>.
// Recibe dos props:
// - title: un texto que se mostrará como el saludo principal (por ejemplo: "Hola", "Bienvenido").
// - name: nombre de la persona que "dice" el saludo (valor por defecto: "User").
export function Greeting({ title, name = "User" }) {
  return (
    <h1>
      {title}, dice {name}
    </h1>
  );
}

// Componente 'UserCard':
// Este componente muestra información detallada de un usuario.
// Recibe los siguientes props:
// - name: el nombre del usuario.
// - amount: una cantidad (puede representar saldo, dinero, etc.).
// - married: valor booleano que indica si el usuario está casado.
// - address: un objeto con los campos 'city' y 'street'.
// - greet: función que se espera pueda ejecutarse (aunque aquí solo se muestra en consola).
export function UserCard({ name, amount, married, address, greet }) {
  // Se imprime en consola el contenido de las props para fines de depuración.
  console.log(name, amount, married, address, greet);

  return (
    <div>
      {/* Se muestra el nombre del usuario en un título */}
      <h1>{name}</h1>

      {/* Se muestra la cantidad con símbolo de dólar */}
      <p>${amount}</p>

      {/* Se muestra el estado civil según el valor booleano */}
      <p>{married ? "married" : "single"}</p>

      {/* Se muestran datos de dirección dentro de una lista no ordenada */}
      <ul>
        <li>City: {address.city}</li>
        <li>Address: {address.street}</li>
      </ul>
    </div>
  );
}
