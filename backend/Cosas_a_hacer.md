# 📋 Organización y flujo de mi base de datos de vacunación infantil

## 🧠 Idea general del sistema

Mi base de datos trata sobre un **centro de atención médica infantil**. Ya tengo implementada la funcionalidad para **cargar una persona**, y estoy planeando cómo continuar.

Actualmente tengo las siguientes tablas clave:

- `personas`
- `usuarios` (relacionado con `personas`)
- `roles`
- `pacientes` (relacionado con `personas`)
- `dosis_aplicadas` (requiere un paciente y una vacuna)
- `vacunas`
- `caps` (centros de atención)
- `area_programatica`

---

## ❓ Dudas planteadas

1. **¿Dónde debe estar el `id_paciente`: en `dosis_aplicadas` o en `paciente`?**  
   → Está bien que esté en `dosis_aplicadas`. Es una relación de uno a muchos: un paciente puede tener muchas dosis aplicadas.

2. **¿Por dónde debería continuar el desarrollo?**
   - Ya tengo alta de persona.
   - Para darle un **rol**, debo crear un **usuario**.
   - Los roles posibles son: "Administrador", "Médico", "Enfermero", "Agente Sanitario".
   - También quiero crear vacunas, pero para eso necesito primero tener dosis aplicadas.
   - Para aplicar una dosis necesito tener un paciente.
   - Para dar de alta un paciente necesito:
     - `id_persona`
     - `contacto_tutor`
     - `caps_id`
     - `area_id`

3. **¿Cómo evitar que al seleccionar una persona para registrar como paciente me aparezcan médicos o admins?**
   - Pensé en asignar un rol "Paciente", pero solo el admin puede dar roles.
   - Eso haría que cada vez que un enfermero quiera registrar un paciente, tenga que pedir al admin que le dé el rol.
   - Me gustaría que el paciente se asigne automáticamente, sin intervención del admin.

---

## ✅ Respuestas y guía para continuar

### 1. ¿Dónde debe estar el `id_paciente`?

- ✅ Correcto: `dosis_aplicadas` debe tener un `id_paciente` como clave foránea.
- ❌ Incorrecto: guardar una lista de dosis en la tabla `paciente`.

---

### 2. ¿Cómo registrar un paciente sin afectar a usuarios con roles?

- No es necesario asignar un **rol** de "paciente".
- En lugar de eso, si una persona está en la tabla `paciente`, **automáticamente es considerada un paciente**.
- Por eso, evitá usar roles para esto.

---

### 3. ¿Cómo armar el combo desplegable de pacientes correctamente?

- Cuando muestres la lista de personas para seleccionar como paciente:
  - Solo mostrales las personas **que no estén ya en la tabla `paciente`**.
  - Así evitás que aparezcan médicos, admins o pacientes repetidos.

#### Ejemplo de consulta

```sql
SELECT *
FROM personas per
WHERE per.id_persona NOT IN (SELECT id_persona FROM pacientes);
```

---

### 5. Flujo ideal del sistema

| Acción                        | Quién lo hace         | Requiere rol especial |
|------------------------------|------------------------|------------------------|
| Crear persona                | Cualquier usuario      | No                    |
| Crear usuario + rol         | Admin                  | ✅                    |
| Crear paciente               | Médico o enfermero     | No                    |
| Aplicar dosis                | Médico o enfermero     | ✅ (por seguridad)    |
| Crear vacuna                 | Admin o autorizado     | ✅                    |

---

## 📝 Recomendaciones finales

- No crees un rol de "Paciente".
- Usá la tabla `paciente` como marcador de que esa persona es un paciente.
- Filtrá en tu frontend/backend usando consultas SQL para mostrar solo las personas necesarias.
- Automatizá la creación de pacientes sin intervención del admin.

---

¿Siguiente paso sugerido?  
👉 Crear el formulario para registrar pacientes, con campos:

- Selección de persona (solo personas que no estén en `paciente`)
- Selección de `caps`
- Selección de `área programática`
- `contacto_tutor`
