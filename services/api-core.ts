import { camelCase, trimSlash } from '@/utils/string'

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
  const response = await fetch(
    trimSlash(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${path}?populate=*`)
  )

  const data = await response.json()

  if (!response.ok) {
    throw new Error(JSON.stringify(data.error.message))
  }

  return camelize(data)
}
