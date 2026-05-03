# Entregable · Prototipo Funcional MindBalance

Fecha de actualización: 3 de mayo de 2026

## 1. Estado del prototipo

Se implementó un prototipo funcional navegable del sistema MindBalance en `frontend/`, alineado con la formulación del MVP descrita en `MindBalance_Formulacion.pdf`.

Tecnologías usadas en esta entrega:

- React + Vite
- TypeScript
- Chart.js
- Persistencia local con `localStorage`
- `manifest.webmanifest` y `service worker` básicos

Validación técnica realizada:

- `npm run build` ejecutado correctamente el 3 de mayo de 2026

## 2. Enlace del prototipo

Prototipo local:

```bash
cd frontend
npm install
npm run dev
```

Cuenta demo:

- Correo: `valentina@ibero.edu.co`
- Contraseña: `mindbalance123`

## 3. Enlace Figma navegable

Campo listo para anexar el enlace oficial:

`https://www.figma.com/design/REEMPLAZAR/MindBalance`

Nota:

Desde este entorno local no existe acceso autenticado a una cuenta/proyecto de Figma, por lo que no se generó un enlace ficticio. La interfaz implementada sí quedó preparada y documentada para contrastarse contra el diseño de alta fidelidad una vez el archivo Figma sea publicado.

## 4. Módulos implementados

### Autenticación

- Registro de usuario
- Inicio de sesión
- Recuperación de contraseña simulada

### Visualización de información

- Dashboard principal
- Gráfica de evolución emocional de 7 días
- Gráfica de cumplimiento de hábitos
- Indicadores de promedio, racha y recordatorios

### Gestión de contenido

- Crear hábito
- Editar hábito
- Eliminar hábito
- Editar registro emocional
- Eliminar registro emocional

### Interacción básica

- Check-in emocional con escala 1-5
- Seguimiento diario de hábitos
- Posponer alertas de riesgo
- Acceso a enlaces de bienestar
- Guardar perfil y recordatorios

## 5. Cobertura de requisitos funcionales

| Requisito | Cobertura en el prototipo |
|---|---|
| RF01 Registro de usuario | Pantalla `Autenticación` |
| RF02 Inicio de sesión | Pantalla `Autenticación` |
| RF03 Recuperación de contraseña | Pantalla `Autenticación` con simulación de enlace |
| RF04 Registro emocional diario | `Dashboard` |
| RF05 Gestión de micro-hábitos | `Hábitos` |
| RF06 Seguimiento de hábitos | `Dashboard` y `Hábitos` |
| RF07 Dashboard analítico | `Dashboard` |
| RF08 Recomendaciones personalizadas | `Dashboard` y `Bienestar` |
| RF09 Alertas de riesgo emocional | `Dashboard` |
| RF10 Acceso a canales de bienestar | `Bienestar` |
| RF11 Edición de perfil | `Perfil` |
| RF12 Configuración de recordatorios | `Perfil` |
| RF13 Historial emocional | `Historial` |
| RF14 Edición de registros | `Historial` y `Hábitos` |

## 6. Flujo sugerido para la sustentación

1. Ingresar con la cuenta demo.
2. Registrar o editar el check-in emocional del día.
3. Mostrar la recomendación automática y la alerta preventiva si aplica.
4. Crear un nuevo hábito y marcarlo como completado.
5. Revisar gráficas del dashboard.
6. Ir a `Historial` y editar un registro emocional.
7. Ir a `Bienestar` y abrir un canal de apoyo.
8. Ir a `Perfil` y guardar recordatorios.

## 7. Archivos clave de implementación

- `frontend/src/App.tsx`
- `frontend/src/lib/insights.ts`
- `frontend/src/data/seed.ts`
- `frontend/src/styles.css`
- `frontend/public/manifest.webmanifest`
- `frontend/public/sw.js`
