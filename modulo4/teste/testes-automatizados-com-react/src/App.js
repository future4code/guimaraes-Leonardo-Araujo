import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador((contador) => contador + 1)}>
        Somar
      </button>
    </>
  );
}

export default App;
