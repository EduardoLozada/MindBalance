# MindBalance

Plataforma web progresiva (PWA) orientada a la gestión del bienestar emocional y hábitos saludables en estudiantes universitarios.

## Descripción

**MindBalance** es una solución tecnológica diseñada para apoyar a estudiantes universitarios en el seguimiento de su estado emocional, la construcción de micro-hábitos saludables y la identificación temprana de patrones de riesgo emocional.

La plataforma busca ofrecer una experiencia accesible, privada e intuitiva, permitiendo que los usuarios registren su estado de ánimo, consulten estadísticas, reciban recomendaciones personalizadas y accedan a canales de bienestar estudiantil desde cualquier dispositivo. El proyecto fue planteado como una **PWA** con enfoque **mobile-first**, usando **React, Node.js y Supabase**.  

## Problema que resuelve

Muchos estudiantes universitarios enfrentan estrés, ansiedad, burnout y dificultades para mantener hábitos saludables. En muchos casos, no cuentan con herramientas accesibles para:

- registrar su estado emocional,
- identificar patrones negativos a tiempo,
- dar seguimiento a hábitos positivos,
- acceder rápidamente a apoyo institucional.

**MindBalance** nace como una respuesta digital a esta necesidad, promoviendo el autocuidado y la prevención desde una plataforma moderna y fácil de usar.

## Objetivo general

Desarrollar una aplicación web progresiva (PWA) de registro emocional y seguimiento de hábitos para fomentar el bienestar mental, la gestión del tiempo y la construcción de prácticas saludables en estudiantes universitarios.

## Funcionalidades principales (MVP)

- Registro e inicio de sesión seguro
- Recuperación de contraseña
- Registro emocional diario con escala de ánimo y notas opcionales
- Gestión de micro-hábitos personalizables
- Seguimiento diario de hábitos
- Dashboard analítico con gráficas
- Recomendaciones personalizadas según el estado emocional
- Alertas preventivas ante patrones de riesgo emocional
- Historial emocional por día, semana y mes
- Edición de perfil
- Configuración de recordatorios
- Acceso a canales de bienestar estudiantil
- Soporte PWA con funcionalidades offline básicas y notificaciones push

## Requisitos funcionales destacados

El sistema contempla funcionalidades como autenticación, registro emocional diario, gestión de hábitos, dashboard analítico, recomendaciones, alertas de riesgo, historial emocional, edición de registros y configuración de recordatorios. :contentReference[oaicite:2]{index=2}

## Requisitos no funcionales

- Seguridad mediante **JWT** y políticas **Row Level Security (RLS)** en Supabase
- Disponibilidad en la nube
- Interfaz intuitiva bajo principios **Material Design**
- Enfoque **mobile-first**
- Tiempo de carga optimizado
- Privacidad de los datos emocionales
- Escalabilidad para crecimiento del número de usuarios :contentReference[oaicite:3]{index=3}

## Arquitectura del sistema

MindBalance sigue una arquitectura **Cliente-Servidor** tipo **SPA** con API RESTful.

### Capas principales

- **Frontend:** React.js + Tailwind CSS + Chart.js
- **Backend / API:** Node.js + Express.js
- **Base de datos:** PostgreSQL mediante Supabase
- **Autenticación:** Supabase Auth
- **Almacenamiento:** Supabase Storage
- **Despliegue:** Vercel + Supabase Cloud

Supabase actúa como backend-as-a-service, mientras que Node.js funciona como capa intermedia para la lógica de negocio, recomendaciones y alertas de riesgo. :contentReference[oaicite:4]{index=4}

## Stack tecnológico

| Capa | Tecnología |
|------|------------|
| Frontend | React.js + Tailwind CSS + Chart.js |
| Backend | Node.js + Express.js |
| Base de datos | PostgreSQL (Supabase) |
| Autenticación | Supabase Auth |
| Almacenamiento | Supabase Storage |
| Despliegue | Vercel + Supabase Cloud |
| Diseño | Figma |
| Gestión | Jira + GitHub |

## Modelado principal

El sistema se apoya en las siguientes entidades principales:

- **User / Profile**
- **EmotionLog**
- **Habit**
- **HabitLog**
- **Recommendation**

Estas entidades permiten gestionar la información del usuario, sus registros emocionales, hábitos, cumplimiento y recomendaciones personalizadas. :contentReference[oaicite:5]{index=5}

## Historias de usuario destacadas

- Como estudiante, quiero registrarme con mi correo para respaldar mi progreso.
- Como usuario, quiero recuperar mi contraseña si la olvido.
- Como estudiante, quiero registrar mi estado de ánimo rápidamente.
- Como usuario, quiero ver gráficas de mi evolución emocional.
- Como estudiante, quiero acceder a canales de bienestar.
- Como usuario, quiero recibir recomendaciones personalizadas.
- Como usuario, quiero que el sistema detecte patrones de riesgo y me alerte. :contentReference[oaicite:6]{index=6}

## Estructura esperada del proyecto

```bash
MindBalance/
│── frontend/              # Aplicación React
│── backend/               # API con Node.js y Express
│── documentation/         # Documentación del proyecto
│── README.md