import React, { useEffect } from 'react';
import { Chart } from 'chart.js/auto';

const datos = [
  {
    id: 'grafico1',
    titulo: 'Vacunación 1 año',
    etiquetas: ['ROTAVIRUS 1 D', 'ANTIHEB', 'MENINGOCOCO 1D'],
    datos: [80, 90, 85]
  },
  {
    id: 'grafico2',
    titulo: 'Vacunación 12-18 meses',
    etiquetas: ['Neumococo', 'Triple bacteriana', 'Hepatitis A'],
    datos: [75, 70, 80]
  },
  {
    id: 'grafico3',
    titulo: 'Vacunación 6 años',
    etiquetas: ['Triple bacteriana', 'Polio'],
    datos: [88, 82]
  },
  {
    id: 'grafico4',
    titulo: 'Vacunación 11 años',
    etiquetas: ['HPV', 'Meningococo'],
    datos: [70, 60]
  },
  {
    id: 'grafico5',
    titulo: 'Vacunación embarazadas',
    etiquetas: ['Triple bacteriana acelular', 'Influenza'],
    datos: [65, 75]
  }
];

export default function Graficos() {
  useEffect(() => {
    datos.forEach(({ id, etiquetas, datos }) => {
      const ctx = document.getElementById(id);
      if (ctx) {
        if (Chart.getChart(id)) {
          Chart.getChart(id).destroy(); // evitar error de canvas en uso
        }

        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: etiquetas,
            datasets: [
              {
                label: 'Porcentaje de vacunación',
                data: datos,
                backgroundColor: 'rgba(0, 123, 255, 0.5)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: { display: true }
            },
            scales: {
              y: { beginAtZero: true, max: 100 }
            }
          }
        });
      }
    });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Cobertura de Vacunación por Grupo</h2>
      <div id="carouselGraficos" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {datos.map((grafico, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={grafico.id}>
              <div className="text-center">
                <h5>{grafico.titulo}</h5>
                <canvas id={grafico.id} width="400" height="200"></canvas>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselGraficos" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselGraficos" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}