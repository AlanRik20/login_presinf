# PresInF - Sistema de Gestión de Pacientes y Vacunas

Sistema integral de gestión de pacientes, vacunas y control epidemiológico desarrollado con NestJS y React. Diseñado para centros de atención primaria de salud (CAPS) para el seguimiento y administración de vacunas.

## 📋 Características Principales

- **Gestión de Pacientes**: Registro y seguimiento completo de pacientes
- **Control de Vacunas**: Administración de dosis aplicadas y esquemas de vacunación
- **Dashboard Analítico**: Visualización de datos mediante gráficos y estadísticas
- **Sistema de Alertas**: Notificaciones automáticas para seguimiento
- **Calendario Integrado**: Programación de citas y seguimiento de aplicaciones
- **Datos Antropométricos**: Registro del crecimiento y desarrollo
- **Gestión de Usuarios**: Sistema de roles y permisos
- **Auditoría**: Trazabilidad completa de las operaciones

## 🏗️ Arquitectura del Proyecto

### Backend (NestJS + TypeORM + PostgreSQL)
```
backend/
├── src/
│   ├── pacientes/           # Gestión de pacientes
│   ├── vacunas/            # Catálogo de vacunas
│   ├── dosis_aplicada/     # Registro de aplicaciones
│   ├── datos_antropometricos/ # Medidas antropométricas
│   ├── notificaciones/     # Sistema de alertas
│   ├── areas_programaticas/ # Áreas de salud
│   ├── centro_caps/        # Centros de atención
│   ├── user/              # Gestión de usuarios
│   ├── roles/             # Sistema de permisos
│   ├── auditoria/         # Trazabilidad
│   ├── localidades/       # Ubicaciones geográficas
│   ├── provincia/         # Provincias
│   └── generos/           # Catálogo de géneros
```

### Frontend (React + Vite + Tailwind CSS)
```
Frontend/
├── src/
│   ├── pages/
│   │   ├── Dashboard.jsx      # Panel principal con métricas
│   │   ├── Pacientes.jsx      # Gestión de pacientes
│   │   ├── Calendario.jsx     # Programación de citas
│   │   ├── Alertas.jsx        # Centro de notificaciones
│   │   ├── Graficos.jsx       # Análisis estadístico
│   │   └── Configuracion.jsx  # Configuración del sistema
│   └── components/
│       └── Sidebar.jsx        # Navegación lateral
```

## 🚀 Tecnologías Utilizadas

### Backend
- **NestJS**: Framework de Node.js para aplicaciones escalables
- **TypeORM**: ORM para TypeScript y JavaScript
- **PostgreSQL**: Base de datos relacional
- **Class Validator**: Validación de datos
- **Jest**: Framework de testing

### Frontend
- **React 19**: Biblioteca de interfaz de usuario
- **Vite**: Herramienta de construcción rápida
- **Tailwind CSS**: Framework de CSS utilitario
- **Chart.js**: Librería de gráficos
- **FullCalendar**: Componente de calendario
- **React Router**: Enrutamiento del lado del cliente
- **React Icons**: Iconografía

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js (v18 o superior)
- PostgreSQL (v12 o superior)
- npm o yarn

### Configuración del Backend

1. **Clonar el repositorio**:
```bash
git clone https://github.com/Ticii18/PresInF-1.git
cd PresInF-1/backend
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Configurar base de datos**:
   - Crear una base de datos PostgreSQL
   - Configurar las variables de entorno para la conexión

4. **Ejecutar el servidor de desarrollo**:
```bash
npm run start:dev
```

El backend estará disponible en `http://localhost:3000`

### Configuración del Frontend

1. **Navegar al directorio del frontend**:
```bash
cd ../Frontend
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Ejecutar el servidor de desarrollo**:
```bash
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

## 📊 Funcionalidades del Sistema

### Dashboard
- Métricas de pacientes atendidos
- Estadísticas de vacunación
- Gráficos de cobertura por área programática
- Indicadores de rendimiento del CAPS

### Gestión de Pacientes
- Registro completo de datos personales
- Historial médico y vacunal
- Datos antropométricos (peso, talla, IMC)
- Vinculación con tutores y contactos

### Control de Vacunación
- Esquemas de vacunación por edad
- Registro de dosis aplicadas
- Alertas de vencimientos y próximas dosis
- Trazabilidad de lotes y fechas

### Sistema de Alertas
- Notificaciones automáticas
- Recordatorios de citas
- Alertas de esquemas incompletos
- Seguimiento de pacientes en riesgo

### Calendario
- Programación de citas
- Visualización de agenda diaria/semanal/mensual
- Integración con sistema de alertas

## 🗃️ Modelo de Datos

El sistema maneja las siguientes entidades principales:

- **Pacientes**: Información personal y médica
- **Vacunas**: Catálogo de vacunas disponibles
- **Dosis Aplicada**: Registro de aplicaciones
- **Datos Antropométricos**: Mediciones de crecimiento
- **Notificaciones**: Sistema de alertas
- **Usuarios**: Gestión de acceso al sistema
- **Centros CAPS**: Centros de atención
- **Áreas Programáticas**: División territorial sanitaria

## 🔐 Sistema de Seguridad

- Autenticación de usuarios
- Sistema de roles y permisos
- Auditoría completa de operaciones
- Validación de datos de entrada
- Cors configurado para el frontend

## 📝 Scripts Disponibles

### Backend
```bash
npm run start        # Iniciar en producción
npm run start:dev    # Iniciar en desarrollo con watch
npm run build        # Compilar el proyecto
npm run test         # Ejecutar tests
npm run lint         # Verificar código con ESLint
```

### Frontend
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Compilar para producción
npm run preview      # Previsualizar build de producción
npm run lint         # Verificar código con ESLint
```

## 🤝 Contribución

Este proyecto está en desarrollo activo. Para contribuir:

1. Fork del repositorio
2. Crear una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de los cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear un Pull Request

## 📋 Estado del Proyecto

**En Desarrollo** - Versión 0.0.1

### Completado ✅
- Estructura base del backend y frontend
- Entidades principales (pacientes, vacunas, usuarios)
- Sistema de localidades y provincias
- Dashboard con métricas básicas
- Interfaz de usuario responsiva

### En Desarrollo 🔄
- Sistema de autenticación completo
- Módulo de persona (pendiente de finalización)
- Validaciones avanzadas
- Tests unitarios y de integración

### Próximas Funcionalidades 📅
- Sistema de reportes
- Exportación de datos
- Notificaciones por email/SMS
- Módulo de inventario de vacunas
- API REST completa

## 📄 Licencia

Este proyecto es privado y no tiene licencia pública.

## 👨‍💻 Autor

**Ticii18** - [GitHub](https://github.com/Ticii18)

---

> 💡 **Nota**: Este sistema está diseñado específicamente para centros de atención primaria de salud y sigue las normativas sanitarias locales para el control de vacunación.
