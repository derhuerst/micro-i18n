'use strict'

const pff = require('pff')

const hasProp = (o, k) => Object.prototype.hasOwnProperty.call(o, k)
const isObj = o => o !== null && 'object' === typeof o && !Array.isArray(o)

const initI18n = (fallbackLocale, translations) => {
	if (!hasProp(translations, fallbackLocale)) throw new Error('invalid fallbackLocale')

	if (!isObj(translations)) throw new Error(`translations must be an object`)
	translations = Object.assign(Object.create(null), translations)

	for (const locale in translations) {
		if (!isObj(translations[locale])) throw new Error(`translations[${locale}] must be an object`)
		const l = translations[locale] = Object.assign(Object.create(null), translations[locale])

		for (const id in l) {
			const s = l[id]

			if (Array.isArray(s)) {
				if (s.length !== 3) throw new Error(`translations[${locale}][${id}] must have zero, one, many`)
				for (let i = 0; i < 3; i++) {
					if ('string' !== typeof s[i]) {
						throw new Error(`translations[${locale}][${id}][${i}] must be a string`)
					}
				}
			} else if ('string' !== typeof s) {
				throw new Error(`translations[${locale}][${id}] must be an array or a string`)
			}
		}
	}

	const fallback = translations[fallbackLocale]
	const t = (locale, id, ...args) => {
		if (!hasProp(translations, locale)) throw new Error(locale + ' is an invalid locale')
		const l = translations[locale]
		let s
		if (hasProp(l, id)) s = l[id]
		else if (hasProp(fallback, id)) s = fallback[id]
		else throw new Error(id + ' is an invalid ID')

		if (!Array.isArray(s)) return pff(s, ...args)

		const count = args[0]
		if ('number' !== typeof count) throw new Error(id + 'is pluralized, missing count param')
		if (count === 0) return pff(s[0], ...args.slice(1))
		if (count === 1) return pff(s[1], ...args.slice(1))
		return pff(s[2], ...args.slice(1))
	}
	return t
}

module.exports = initI18n
