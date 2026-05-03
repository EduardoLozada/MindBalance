import { MOOD_OPTIONS, RECOMMENDATIONS } from '../data/seed'
import type { EmotionLog, Habit, HabitLog, Recommendation, UserProfile } from '../types'

export function toDateKey(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
    .toISOString()
    .slice(0, 10)
}

export function getDateKeyDaysAgo(daysAgo: number) {
  const date = new Date()
  date.setHours(0, 0, 0, 0)
  date.setDate(date.getDate() - daysAgo)
  return toDateKey(date)
}

export function formatLongDate(dateKey: string) {
  return new Intl.DateTimeFormat('es-CO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date(`${dateKey}T00:00:00`))
}

export function formatShortDate(dateKey: string) {
  return new Intl.DateTimeFormat('es-CO', {
    day: 'numeric',
    month: 'short',
  }).format(new Date(`${dateKey}T00:00:00`))
}

export function getMoodOption(score: number) {
  return MOOD_OPTIONS.find((option) => option.score === score) ?? MOOD_OPTIONS[2]
}

export function getRecommendation(score: number): Recommendation {
  return RECOMMENDATIONS.find((item) => item.score === score) ?? RECOMMENDATIONS[2]
}

export function getUserEmotionLogs(logs: EmotionLog[], userId: string) {
  return logs
    .filter((log) => log.userId === userId)
    .sort((first, second) => second.date.localeCompare(first.date))
}

export function getUserHabits(habits: Habit[], userId: string) {
  return habits
    .filter((habit) => habit.userId === userId && !habit.isArchived)
    .sort((first, second) => second.createdAt.localeCompare(first.createdAt))
}

export function buildLastDays(amount: number) {
  return Array.from({ length: amount }, (_, index) => getDateKeyDaysAgo(amount - index - 1))
}

export function buildMoodSeries(logs: EmotionLog[], userId: string, amount: number) {
  return buildLastDays(amount).map((dateKey) => {
    const log = logs.find((item) => item.userId === userId && item.date === dateKey)
    return {
      dateKey,
      label: formatShortDate(dateKey),
      score: log?.score ?? 0,
    }
  })
}

export function buildHabitSeries(
  habits: Habit[],
  habitLogs: HabitLog[],
  userId: string,
  amount: number,
) {
  const userHabits = getUserHabits(habits, userId)

  return buildLastDays(amount).map((dateKey) => {
    const completed = habitLogs.filter(
      (log) => log.userId === userId && log.date === dateKey && log.completed,
    ).length

    return {
      dateKey,
      label: formatShortDate(dateKey),
      completed,
      total: userHabits.length,
    }
  })
}

export function getTodayHabitStatus(habits: Habit[], habitLogs: HabitLog[], userId: string) {
  const today = toDateKey()
  return getUserHabits(habits, userId).map((habit) => ({
    ...habit,
    completed: habitLogs.some(
      (log) =>
        log.userId === userId &&
        log.habitId === habit.id &&
        log.date === today &&
        log.completed,
    ),
  }))
}

export function getAverageMood(logs: EmotionLog[], userId: string, amount = 7) {
  const lastLogs = getUserEmotionLogs(logs, userId)
    .slice(0, amount)
    .map((log) => log.score)

  if (lastLogs.length === 0) {
    return 0
  }

  const total = lastLogs.reduce((sum, score) => sum + score, 0)
  return Number((total / lastLogs.length).toFixed(1))
}

export function getCheckInStreak(logs: EmotionLog[], userId: string) {
  const userLogs = new Set(getUserEmotionLogs(logs, userId).map((log) => log.date))
  let streak = 0

  for (let offset = 0; offset < 30; offset += 1) {
    const dateKey = getDateKeyDaysAgo(offset)
    if (!userLogs.has(dateKey)) {
      break
    }
    streak += 1
  }

  return streak
}

export function getWeeklyHabitCompletionRate(
  habits: Habit[],
  habitLogs: HabitLog[],
  userId: string,
) {
  const userHabits = getUserHabits(habits, userId)
  if (userHabits.length === 0) {
    return 0
  }

  const lastWeek = buildLastDays(7)
  const completed = habitLogs.filter(
    (log) => log.userId === userId && lastWeek.includes(log.date) && log.completed,
  ).length
  const expected = userHabits.length * 7

  return Math.min(100, Math.round((completed / expected) * 100))
}

export function getVisibleRiskAlert(
  logs: EmotionLog[],
  userId: string,
  user: UserProfile,
) {
  const recent = getUserEmotionLogs(logs, userId).slice(0, 7)
  const lowDays = recent.filter((log) => log.score <= 2)

  if (lowDays.length < 3) {
    return null
  }

  if (user.riskAlertDismissedUntil) {
    const dismissedUntil = new Date(`${user.riskAlertDismissedUntil}T00:00:00`)
    if (dismissedUntil >= new Date()) {
      return null
    }
  }

  return {
    title: 'Patrón de riesgo detectado',
    message:
      'Registraste tres o más días recientes con ánimo bajo. Conviene bajar carga, activar apoyo y revisar tus canales de bienestar.',
    affectedDates: lowDays.map((log) => formatShortDate(log.date)).join(', '),
  }
}

export function getHistoryRangeLabel(range: 'day' | 'week' | 'month') {
  if (range === 'day') {
    return 'Último día'
  }

  if (range === 'week') {
    return 'Últimos 7 días'
  }

  return 'Últimos 30 días'
}

export { MOOD_OPTIONS }
