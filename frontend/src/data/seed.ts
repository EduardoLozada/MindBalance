import type {
  AppData,
  MoodOption,
  Recommendation,
  WellbeingChannel,
} from '../types'

export const MOOD_OPTIONS: MoodOption[] = [
  {
    score: 1,
    emoji: '😞',
    label: 'Muy baja',
    description: 'Día pesado, poca energía y señales claras de saturación.',
  },
  {
    score: 2,
    emoji: '😕',
    label: 'Baja',
    description: 'Tensión alta y dificultad para sostener el ritmo.',
  },
  {
    score: 3,
    emoji: '😐',
    label: 'Estable',
    description: 'Día funcional con margen de mejora.',
  },
  {
    score: 4,
    emoji: '🙂',
    label: 'Buena',
    description: 'Balance sólido y sensación de control.',
  },
  {
    score: 5,
    emoji: '😄',
    label: 'Excelente',
    description: 'Alta energía, claridad y bienestar sostenido.',
  },
]

export const RECOMMENDATIONS: Recommendation[] = [
  {
    score: 1,
    title: 'Detén la escalada del estrés',
    description:
      'Haz una pausa breve, reduce estímulos y prioriza un solo paso alcanzable durante los próximos 10 minutos.',
    action: 'Respiración 4-4-6 + contacto con bienestar estudiantil.',
  },
  {
    score: 2,
    title: 'Recupera estabilidad básica',
    description:
      'Conviene bajar la exigencia del día, hidratarte y revisar si llevas varias jornadas con sobrecarga.',
    action: 'Caminata corta, agua y agenda una conversación de apoyo.',
  },
  {
    score: 3,
    title: 'Consolida tu equilibrio',
    description:
      'Tu estado es funcional. Mantén el registro y protege las rutinas que sí te están funcionando.',
    action: 'Checklist breve de hábitos y cierre del día en 3 líneas.',
  },
  {
    score: 4,
    title: 'Aprovecha la tracción positiva',
    description:
      'Es un buen momento para avanzar en tareas importantes sin descuidar pausas y sueño.',
    action: 'Bloque de enfoque de 25 minutos y revisión de hábitos clave.',
  },
  {
    score: 5,
    title: 'Mantén el impulso saludable',
    description:
      'Tu energía está alta. Identifica qué factores la están favoreciendo para repetirlos.',
    action: 'Documenta detonantes positivos y comparte una acción de autocuidado.',
  },
]

export const WELLBEING_CHANNELS: WellbeingChannel[] = [
  {
    id: 'canal-1',
    name: 'Línea de Bienestar Ibero',
    type: 'Atención prioritaria',
    availability: 'Lunes a viernes · 7:00 a.m. - 7:00 p.m.',
    description:
      'Canal institucional para acompañamiento emocional y orientación de primer nivel.',
    contactLabel: 'Llamar',
    contactValue: '+57 601 555 0199',
    link: 'tel:+576015550199',
  },
  {
    id: 'canal-2',
    name: 'Agenda psicológica',
    type: 'Solicitud de cita',
    availability: 'Respuesta en menos de 24 horas hábiles',
    description:
      'Formulario para agendar seguimiento profesional con el área de bienestar estudiantil.',
    contactLabel: 'Abrir formulario',
    contactValue: 'https://www.mindbalance.local/bienestar',
    link: 'https://www.mindbalance.local/bienestar',
  },
  {
    id: 'canal-3',
    name: 'Chat de acompañamiento',
    type: 'Interacción básica',
    availability: 'Lunes a sábado · 9:00 a.m. - 5:00 p.m.',
    description:
      'Canal rápido para resolver dudas, activar recursos y recibir orientación inmediata.',
    contactLabel: 'Escribir',
    contactValue: 'bienestar@ibero.edu.co',
    link: 'mailto:bienestar@ibero.edu.co',
  },
]

const SAMPLE_USER_ID = 'user-demo-valentina'

function dateKeyDaysAgo(daysAgo: number) {
  const target = new Date()
  target.setHours(0, 0, 0, 0)
  target.setDate(target.getDate() - daysAgo)
  return target.toISOString().slice(0, 10)
}

export function createSeedAppData(): AppData {
  return {
    users: [
      {
        id: SAMPLE_USER_ID,
        email: 'valentina@ibero.edu.co',
        password: 'mindbalance123',
        displayName: 'Valentina Lozano',
        avatarTone: '#f59e0b',
        university: 'Corporación Universitaria Iberoamericana',
        career: 'Ingeniería de Software',
        reminderEnabled: true,
        reminderTime: '20:30',
        reminderFrequency: 'Diario',
        reminderChannel: 'Push',
        createdAt: dateKeyDaysAgo(21),
      },
    ],
    currentUserId: null,
    emotionLogs: [
      {
        id: 'emo-1',
        userId: SAMPLE_USER_ID,
        date: dateKeyDaysAgo(6),
        score: 3,
        note: 'Muchos pendientes, pero logré ordenar el día.',
      },
      {
        id: 'emo-2',
        userId: SAMPLE_USER_ID,
        date: dateKeyDaysAgo(5),
        score: 4,
        note: 'La rutina de mañana me ayudó a empezar mejor.',
      },
      {
        id: 'emo-3',
        userId: SAMPLE_USER_ID,
        date: dateKeyDaysAgo(4),
        score: 2,
        note: 'Dormí poco y sentí ansiedad antes de clase.',
      },
      {
        id: 'emo-4',
        userId: SAMPLE_USER_ID,
        date: dateKeyDaysAgo(3),
        score: 2,
        note: 'Se acumuló trabajo; me costó concentrarme.',
      },
      {
        id: 'emo-5',
        userId: SAMPLE_USER_ID,
        date: dateKeyDaysAgo(2),
        score: 4,
        note: 'Hice pausas activas y la tarde fue más ligera.',
      },
      {
        id: 'emo-6',
        userId: SAMPLE_USER_ID,
        date: dateKeyDaysAgo(1),
        score: 5,
        note: 'Buen descanso y avance consistente en el proyecto.',
      },
    ],
    habits: [
      {
        id: 'habit-1',
        userId: SAMPLE_USER_ID,
        title: 'Tomar agua antes de la primera clase',
        frequency: 'Diario',
        cue: 'Botella visible en el escritorio',
        color: '#0f766e',
        isArchived: false,
        createdAt: dateKeyDaysAgo(20),
      },
      {
        id: 'habit-2',
        userId: SAMPLE_USER_ID,
        title: 'Pausa de respiración 4-4-6',
        frequency: 'Lunes a viernes',
        cue: 'Antes de abrir el correo',
        color: '#f97316',
        isArchived: false,
        createdAt: dateKeyDaysAgo(18),
      },
      {
        id: 'habit-3',
        userId: SAMPLE_USER_ID,
        title: 'Revisión rápida de agenda',
        frequency: '3 veces por semana',
        cue: 'Al cerrar la jornada',
        color: '#7c3aed',
        isArchived: false,
        createdAt: dateKeyDaysAgo(17),
      },
    ],
    habitLogs: [
      { id: 'habit-log-1', habitId: 'habit-1', userId: SAMPLE_USER_ID, date: dateKeyDaysAgo(6), completed: true },
      { id: 'habit-log-2', habitId: 'habit-2', userId: SAMPLE_USER_ID, date: dateKeyDaysAgo(6), completed: true },
      { id: 'habit-log-3', habitId: 'habit-1', userId: SAMPLE_USER_ID, date: dateKeyDaysAgo(5), completed: true },
      { id: 'habit-log-4', habitId: 'habit-3', userId: SAMPLE_USER_ID, date: dateKeyDaysAgo(5), completed: true },
      { id: 'habit-log-5', habitId: 'habit-1', userId: SAMPLE_USER_ID, date: dateKeyDaysAgo(4), completed: false },
      { id: 'habit-log-6', habitId: 'habit-2', userId: SAMPLE_USER_ID, date: dateKeyDaysAgo(4), completed: true },
      { id: 'habit-log-7', habitId: 'habit-1', userId: SAMPLE_USER_ID, date: dateKeyDaysAgo(3), completed: true },
      { id: 'habit-log-8', habitId: 'habit-2', userId: SAMPLE_USER_ID, date: dateKeyDaysAgo(2), completed: true },
      { id: 'habit-log-9', habitId: 'habit-3', userId: SAMPLE_USER_ID, date: dateKeyDaysAgo(1), completed: true },
    ],
    passwordResetRequests: [],
  }
}
