import React, { useState, useEffect } from "react";

const Pacientes = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    dni: "",
    sexo: "",
    domicilio: "",
    localidad: "",
    provincia: "",
  });
  const [localidades, setLocalidades] = useState([]);
  const [provincias, setProvincias] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const paciente = {
      nombre: form.nombre,
      apellido: form.apellido,
      fecha_nacimiento: form.fechaNacimiento,
      dni: form.dni.toString(), 
      domicilio: form.domicilio,
      id_genero: parseInt(form.sexo),
      id_localidad: parseInt(form.localidad),
      id_provincia: parseInt(form.provincia),
    };

    try {
      const response = await fetch("http://localhost:3000/persona", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paciente),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Paciente registrado exitosamente!");
        setForm({
          nombre: "",
          apellido: "",
          fechaNacimiento: "",
          dni: "",
          sexo: "",
          domicilio: "",
          localidad: "",
          provincia: "",
        });
      } else {
        alert("Error al registrar paciente: " + (data.message || ""));
        console.error("Error del backend:", data);
      }
    } catch (error) {
      alert("Error de conexión con el servidor");
      console.error("Error de red:", error);
    }
  };
  useEffect(() => {
    fetch("http://localhost:3000/localidades")
      .then((res) => res.json())
      .then((data) => {
        setLocalidades(data);
      })
      .catch((err) => console.error("Error al traer localidades:", err));
    fetch("http://localhost:3000/provincia")
      .then((res) => res.json())
      .then((data) => {
        setProvincias(data);
      })
      .catch((err) => console.error("Error cargando provincias:", err));
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Registro de Paciente</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control"
                name="apellido"
                value={form.apellido}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Fecha de Nacimiento</label>
              <input
                type="date"
                className="form-control"
                name="fechaNacimiento"
                value={form.fechaNacimiento}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">DNI</label>
              <input
                type="number"
                className="form-control"
                name="dni"
                value={form.dni}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Sexo</label>
              <select
                className="form-select"
                name="sexo"
                value={form.sexo}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione</option>
                <option value="1">Masculino</option>
                <option value="2">Femenino</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Domicilio</label>
              <input
                type="text"
                className="form-control"
                name="domicilio"
                value={form.domicilio}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Localidad</label>
              <select
                className="form-select"
                name="localidad"
                value={form.localidad}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione una localidad</option>
                {localidades.map((loc) => (
                  <option key={loc.id_localidad} value={loc.id_localidad}>
                    {loc.localidad}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Provincia</label>
              <select
                className="form-select"
                name="provincia"
                value={form.provincia}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione una provincia</option>
                {provincias.map((prov) => (
                  <option key={prov.id_provincia} value={prov.id_provincia}>
                    {prov.provincia}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Registrar Paciente
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pacientes;
