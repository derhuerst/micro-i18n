'use strict'

const initI18n = require('.')

const t = initI18n('en', {
	en: {
		'greeting': 'Hey %s!',
		'messages.new': [
			'Inbox zero. Congratulations!',
			'You have one new message.',
			'You have %d new messages.'
		],
		'upload': 'Uploading is %% done.'
	},
	de: {
		'greeting': 'Hallo %s!',
		'upload': 'Upload-Fortschritt: %d%'
	}
})

console.log(t('de', 'greeting', 'Jannis'))
console.log(t('de', 'messages.new', 0))
console.log(t('de', 'messages.new', 1))
console.log(t('de', 'messages.new', 50, 50))
console.log(t('de', 'upload', 50))
