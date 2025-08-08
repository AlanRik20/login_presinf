import React from "react";
import SidebarItem from "./SidebarItem";
import { useAuth } from "../context/authContext";

const Sidebar = () => {
  const { user } = useAuth(); // Obtenemos el usuario desde el contexto

  if (!user) {
    // Opcional: mostrar algo mientras no hay usuario
    return <div>Cargando usuario...</div>;
  }

  return (
    <aside
      className="bg-primary text-white p-4 d-flex flex-column align-items-center"
      style={{
        minHeight: "100vh",
        width: "250px",
        maxWidth: "250px",
        minWidth: "250px",
        flex: "0 0 250px",
      }}
    >
      {/* Ahora mostrás el correo */}
      <h2 className="h5">{user.email}</h2>
      <span className="mb-4 text-light">{user.role}</span>
      <nav className="w-100">
        <SidebarItem label="Dashboard" path="/" />
        <SidebarItem label="Pacientes" path="/pacientes" />
        <SidebarItem label="Ver Pacientes" path="/viewPacientes" />

        <SidebarItem label="Calendario de Vacunación" path="/calendario" />
        <SidebarItem label="Alertas" path="/alertas" />
        <SidebarItem label="Gráficos Estadísticos" path="/graficos" />
      </nav>
    </aside>
  );
};

export default Sidebar;
