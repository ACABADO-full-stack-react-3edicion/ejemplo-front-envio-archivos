import { useState } from "react";

function App() {
  const [formulario, setFormulario] = useState(true);
  const enviarForm = (e) => {
    e.preventDefault();
  };
  return (
    <section className="contenedor">
      {formulario ? (
        <form onSubmit={enviarForm} autoComplete="off">
          <div className="grupo">
            <label htmlFor="nombre">Nombre:</label>
            <input id="nombre" type="text" className="form-control"></input>
          </div>
          <div className="grupo">
            <label htmlFor="imagen" className="custom-file-label">
              Imagen:
            </label>
            <input
              id="imagen"
              type="file"
              className="custom-file-input"
            ></input>
          </div>
          <div className="grupo">
            <button type="submit">Enviar</button>
          </div>
        </form>
      ) : (
        <p>Datos enviados</p>
      )}
    </section>
  );
}

export default App;
