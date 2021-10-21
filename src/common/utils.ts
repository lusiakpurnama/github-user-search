import { Buffer } from 'buffer'

export const encodeBase64 = (str: string): string =>
	Buffer.from(str, 'utf-8').toString('base64')

export const decodeBase64 = (str: string): string =>
	Buffer.from(str, 'base64').toString('utf-8')

export const fetcher = (input: any, init: any) => {
	return fetch(input, init).then((res) => {
		if (!res.ok) return Promise.reject(res.json())
		return res.json()
	})
}
