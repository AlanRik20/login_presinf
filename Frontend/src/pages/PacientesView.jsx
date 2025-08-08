import React, { useState, useEffect } from "react";

function PacientesLista() {
  const [pacientes, setPacientes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/persona")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar pacientes");
        return res.json();
      })
      .then((data) => {
        setPacientes(data);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando pacientes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>Listado de Pacientes</h2>
      {pacientes.length === 0 ? (
        <p>No hay pacientes registrados.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #ccc",
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>Nombre</th>
              <th style={thStyle}>Apellido</th>
              <th style={thStyle}>DNI</th>
              <th style={thStyle}>Fecha de Nacimiento</th>
              <th style={thStyle}>Género</th>
              <th style={thStyle}>Localidad</th>
              <th style={thStyle}>Provincia</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((pac, index) => {
              return (
                <tr key={pac.id_persona || index}>
                  <td style={tdStyle}>{pac.p_nombre || 'VACIO'}</td>
                  <td style={tdStyle}>{pac.p_apellido || 'VACIO'}</td>
                  <td style={tdStyle}>{pac.p_dni || 'VACIO'}</td>
                  <td style={tdStyle}>
                    {pac.p_fecha_nacimiento ? 
                      (() => {
                        const fecha = new Date(pac.p_fecha_nacimiento);
                        return fecha.toLocaleDateString('es-AR');
                      })()
                      : 'VACIO'
                    }
                  </td>
                  <td style={tdStyle}>{pac.g_genero || 'N/A'}</td>
                  <td style={tdStyle}>{pac.l_localidad || 'N/A'}</td>
                  <td style={tdStyle}>{pac.pr_provincia || 'N/A'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

const thStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  background: "#f4f4f4",
  textAlign: "left",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "8px",
};

export default PacientesLista;