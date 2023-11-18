export function getSessionStorage(key: string, initialValue: any): any {
  try {
    const value = window.sessionStorage.getItem(key)

    return value ? JSON.parse(value) : initialValue
  } catch {
    return initialValue
  }
}

export function setSessionStorage(key: string, value: any): void {
  const jsonValue = () => {
    try {
      return JSON.stringify(value)
    } catch {
      return ''
    }
  }

  window.sessionStorage.setItem(key, jsonValue())
}

export function clearSessionStorage() {
  window.sessionStorage.clear()
}
