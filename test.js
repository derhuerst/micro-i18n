'use strict'

const {strictEqual} = require('assert')
const initI18n = require('.')

const t = initI18n('en', {
	en: {
		'greeting': 'hey %s',
		'messages.new': [
			'inbox zero',
			'one new message',
			'%d new messages'
		],
		'upload': 'uploading %d%% done'
	},
	de: {
		'greeting': 'hallo %s',
		'upload': 'upload-fortschritt %d%'
	}
})

strictEqual(t('en', 'greeting', 'Jannis'), 'hey Jannis')
strictEqual(t('en', 'messages.new', 0), 'inbox zero')
strictEqual(t('en', 'messages.new', 1), 'one new message')
strictEqual(t('en', 'messages.new', 50, 50), '50 new messages')
strictEqual(t('en', 'upload', 50), 'uploading 50% done')

strictEqual(t('de', 'greeting', 'Jannis'), 'hallo Jannis')
strictEqual(t('de', 'messages.new', 0), 'inbox zero')
strictEqual(t('de', 'upload', 50), 'upload-fortschritt 50%')
