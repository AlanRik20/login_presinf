import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const vacunasProximas = [
  { nombre: 'Hepatitis B', paciente: 'Juan Pérez', fecha: '2025-08-10' },
  { nombre: 'Triple Viral', paciente: 'Lucía Gómez', fecha: '2025-08-12' },
];

const vacunasVencidas = [
  { nombre: 'BCG', paciente: 'Ana López', fecha: '2025-07-30' },
  { nombre: 'Antigripal', paciente: 'Carlos Ruiz', fecha: '2025-07-28' },
];

const Alertas = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-dark"> Alertas de Vacunas</h2>

      {/* Vacunas Próximas */}
      <div className="card mb-4">
        <div className="border card-header bg-primary text-white fw-bold">
          Vacunas Próximas a Aplicarse
        </div>
        <div className="card-body p-0">
          <table className="table table-striped mb-0">
            <thead className="table-light">
              <tr>
                <th>Paciente</th>
                <th>Vacuna</th>
                <th>Fecha Programada</th>
              </tr>
            </thead>
            <tbody>
              {vacunasProximas.map((v, i) => (
                <tr key={i}>
                  <td>{v.paciente}</td>
                  <td>{v.nombre}</td>
                  <td>{v.fecha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Vacunas Vencidas */}
      <div className="card">
        <div className="card-header bg-danger text-white fw-bold">
          Vacunas Vencidas
        </div>
        <div className="card-body p-0">
          <table className="table table-striped mb-0">
            <thead className="table-light">
              <tr>
                <th>Paciente</th>
                <th>Vacuna</th>
                <th>Fecha de Vencimiento</th>
              </tr>
            </thead>
            <tbody>
              {vacunasVencidas.map((v, i) => (
                <tr key={i}>
                  <td>{v.paciente}</td>
                  <td>{v.nombre}</td>
                  <td>{v.fecha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Alertas;