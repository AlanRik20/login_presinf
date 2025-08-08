import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import { useAuth } from "../context/authContext";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const { logout } = useAuth(); // TRAE la función logout del contexto

  // Datos para gráfico de barras (Vacunas aplicadas)
  const barData = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Vacunas Aplicadas",
        data: [300, 450, 400, 550, 600, 700],
        backgroundColor: "rgba(54, 162, 235, 0.7)",
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Vacunas Aplicadas por Mes" },
    },
  };

  // Datos para gráfico de pastel (Cobertura por edad)
  const pieData = {
    labels: ["0-5 años", "6-12 años", "13-18 años", "19-50 años", "50+ años"],
    datasets: [
      {
        label: "Cobertura",
        data: [25, 20, 15, 25, 15],
        backgroundColor: [
          "#007bff",
          "#28a745",
          "#ffc107",
          "#dc3545",
          "#17a2b8",
        ],
        hoverOffset: 30,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: { position: "right" },
      title: { display: true, text: "Cobertura de Vacunas por Edad" },
    },
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-end py-2">
        <button className="btn btn-danger" onClick={logout}>
          Cerrar sesión
        </button>
      </div>
      {/* Cartas resumen */}
      <div className="row my-4 g-3">
        <div className="col-md-3">
          <div className="card text-white bg-info h-100">
            <div className="card-body">
              <h5 className="card-title">Total Pacientes</h5>
              <h2>1,245</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-warning h-100">
            <div className="card-body">
              <h5 className="card-title">Vacunas Aplicadas</h5>
              <h2>3,820</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-danger h-100">
            <div className="card-body">
              <h5 className="card-title">Alertas</h5>
              <h2>27</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-info h-100">
            <div className="card-body">
              <h5 className="card-title">Cobertura de Vacunas</h5>
              <h2>87%</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Gráficos */}
      <div className="row my-4 g-3">
        <div className="col-md-7">
          <div className="card h-100">
            <div className="card-header">Gráfico de Vacunas Aplicadas</div>
            <div className="card-body">
              <Bar data={barData} options={barOptions} />
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="card h-100">
            <div className="card-header">Gráfico de Cobertura por Edad</div>
            <div className="card-body">
              <Pie data={pieData} options={pieOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Tablas */}
      <div className="row my-4 g-3">
        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-header">Alertas de Vacunas</div>
            <div className="card-body p-0">
              <table className="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>Alerta</th>
                    <th>Paciente</th>
                    <th>Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Vacuna Hepatitis B</td>
                    <td>Juan Pérez</td>
                    <td>2025-07-25</td>
                  </tr>
                  <tr>
                    <td>Refuerzo DTP</td>
                    <td>María López</td>
                    <td>2025-07-27</td>
                  </tr>
                  <tr>
                    <td>Vacuna SRP</td>
                    <td>Carlos Gómez</td>
                    <td>2025-08-01</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100">
            <div className="card-header">Pacientes Recientes</div>
            <div className="card-body p-0">
              <table className="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>DNI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ana</td>
                    <td>Martínez</td>
                    <td>30.123.456</td>
                  </tr>
                  <tr>
                    <td>Pedro</td>
                    <td>García</td>
                    <td>27.654.321</td>
                  </tr>
                  <tr>
                    <td>Lucía</td>
                    <td>Fernández</td>
                    <td>33.987.654</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
