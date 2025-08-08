import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Dashboard from './pages/Dashboard';
import Pacientes from './pages/Pacientes';
import Calendario from './pages/Calendario';
import Alertas from './pages/Alertas';
import Graficos from './pages/Graficos';
import PacientesLista from './pages/PacientesView';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import { AuthProvider, useAuth } from './context/authContext';
import ProtectedRoute from './components/ProtectedRoute';

const AppContent = () => {
  const { user } = useAuth();  // obtenemos el usuario del contexto

  return (
    <>
      <div className="col-md-3 col-lg-2 bg-white border-end px-0">
        <Sidebar user={user} />
      </div>

      <main className="col-md-9 col-lg-10 py-4 px-4">
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pacientes"
            element={
              <ProtectedRoute>
                <Pacientes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/calendario"
            element={
              <ProtectedRoute>
                <Calendario />
              </ProtectedRoute>
            }
          />
          <Route
            path="/alertas"
            element={
              <ProtectedRoute>
                <Alertas />
              </ProtectedRoute>
            }
          />
          <Route path="/graficos" element={<Graficos />} />
          <Route path="/viewPacientes" element={<PacientesLista />} />
        </Routes>
      </main>
    </>
  );
};

const App = () => {
  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="row">
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </div>
    </div>
  );
};

export default App;
