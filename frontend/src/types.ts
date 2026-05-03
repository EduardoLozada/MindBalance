export type ReminderFrequency = 'Diario' | 'Lunes a viernes' | 'Personalizado'
export type ReminderChannel = 'Push' | 'Correo'
export type HabitFrequency = 'Diario' | 'Lunes a viernes' | '3 veces por semana'

export interface UserProfile {
  id: string
  email: string
  password: string
  displayName: string
  avatarTone: string
  university: string
  career: string
  reminderEnabled: boolean
  reminderTime: string
  reminderFrequency: ReminderFrequency
  reminderChannel: ReminderChannel
  riskAlertDismissedUntil?: string
  createdAt: string
}

export interface EmotionLog {
  id: string
  userId: string
  date: string
  score: number
  note: string
}

export interface Habit {
  id: string
  userId: string
  title: string
  frequency: HabitFrequency
  cue: string
  color: string
  isArchived: boolean
  createdAt: string
}

export interface HabitLog {
  id: string
  habitId: string
  userId: string
  date: string
  completed: boolean
}

export interface Recommendation {
  score: number
  title: string
  description: string
  action: string
}

export interface WellbeingChannel {
  id: string
  name: string
  type: string
  availability: string
  description: string
  contactLabel: string
  contactValue: string
  link: string
}

export interface MoodOption {
  score: number
  emoji: string
  label: string
  description: string
}

export interface AppData {
  users: UserProfile[]
  currentUserId: string | null
  emotionLogs: EmotionLog[]
  habits: Habit[]
  habitLogs: HabitLog[]
  passwordResetRequests: string[]
}
