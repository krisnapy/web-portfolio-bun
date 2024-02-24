export function snakeCase(str: string): string {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
}

export function camelCase(str: string): string {
  return str.replace(/[-_]([a-z])/g, (_, letter) => letter.toUpperCase())
}

export function truncate(text: string, length = 0): string {
  if (!text.length) return ''

  return `${text.substring(0, length)}${text.length > length ? '...' : ''}`
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function trimSlash(path: string): string {
  return path.replace(/\/{2,}/g, '/')
}
