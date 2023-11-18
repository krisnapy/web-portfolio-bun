import { camelCase } from '@/utils/string'

export type CamelizeArray = Record<string, any> | Array<Record<string, any>>
export type KeyValuePairs = Record<string, any>

function camelizeKeys(data: KeyValuePairs): KeyValuePairs {
  const keys = Object.keys(data)
  const result: KeyValuePairs = {}

  keys.forEach((key) => {
    const value = data[key]
    const newKey = camelCase(key)

    if (typeof value === 'object' && value !== null) {
      return (result[newKey] = camelize(value))
    } else if (Array.isArray(value)) {
      return (result[newKey] = camelizeArray(value))
    } else {
      result[newKey] = value
    }
  })

  return result
}

function camelizeArray(data: KeyValuePairs[]): KeyValuePairs[] {
  if (data.every((item: any) => typeof item !== 'object')) return data

  return data.map((item) => camelizeKeys(item))
}

export function camelize(data: CamelizeArray): CamelizeArray {
  if (Array.isArray(data)) return camelizeArray(data)

  return camelizeKeys(data)
}

export async function getData(path: string): Promise<KeyValuePairs> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${path}?populate=*`)

  if (!response.ok) {
    throw new Error('Failed to fetch API!')
  }

  const data = await response.json()

  return camelize(data)
}
