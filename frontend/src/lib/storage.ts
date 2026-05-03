import { createSeedAppData } from '../data/seed'
import type { AppData } from '../types'

const STORAGE_KEY = 'mindbalance-prototype-v1'

export function createId(prefix: string) {
  return `${prefix}-${crypto.randomUUID()}`
}

export function loadAppData() {
  if (typeof window === 'undefined') {
    return createSeedAppData()
  }

  const saved = window.localStorage.getItem(STORAGE_KEY)

  if (!saved) {
    return createSeedAppData()
  }

  try {
    return JSON.parse(saved) as AppData
  } catch {
    return createSeedAppData()
  }
}

export function saveAppData(data: AppData) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}
