import { useState } from "react";

function App() {
  const [formulario, setFormulario] = useState(true);
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    imagen: "",
  });
  const enviarForm = async (e) => {
    e.preventDefault();
    const datos = new FormData();
    datos.append("imagen", datosForm.imagen);
    datos.append("nombre", datosForm.nombre);
    const resp = await fetch("http://localhost:4000/usuarios/registro", {
      method: "POST",
      body: datos,
    });
    if (resp.ok) {
      return setFormulario(false);
    }
    console.log("Algo ha petado");
  };
  const changeDato = (e) => {
    console.log(e.target.files);
    setDatosForm({
      ...datosForm,
      [e.target.id]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };
  return (
    <section className="contenedor">
      {formulario ? (
        <form onSubmit={enviarForm} autoComplete="off">
          <div className="grupo">
            <label htmlFor="nombre">Nombre:</label>
            <input
              id="nombre"
              type="text"
              className="form-control"
              value={datosForm.nombre}
              onChange={changeDato}
            ></input>
          </div>
          <div className="grupo">
            <label htmlFor="imagen" className="custom-file-label">
              Imagen:
            </label>
            <input
              id="imagen"
              type="file"
              className="custom-file-input"
              onChange={changeDato}
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
