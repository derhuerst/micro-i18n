# micro-i18n

**Yet another string internationalization tool.**

[![npm version](https://img.shields.io/npm/v/derhuerst/micro-i18n.svg)](https://www.npmjs.com/package/@derhuerst/micro-i18n)
[![build status](https://api.travis-ci.org/derhuerst/micro-i18n.svg?branch=master)](https://travis-ci.org/derhuerst/micro-i18n)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/micro-i18n.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installation

```shell
npm install @derhuerst/micro-i18n
```


## Usage

```js
const initI18n = require('@derhuerst/micro-i18n')

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

t('de', 'greeting', 'Jannis') // Hallo Jannis!
t('de', 'messages.new', 0) // Inbox zero. Contratulations!
t('de', 'messages.new', 1) // You have one new message.
t('de', 'messages.new', 50, 50) // You have 50 new messages.
t('de', 'upload', 50) // Upload-Fortschritt: 50%
```


## Contributing

If you have a question or need support using `micro-i18n`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/micro-i18n/issues).
