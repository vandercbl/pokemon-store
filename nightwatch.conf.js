const chrome = require('chromedriver')

module.exports = {
	src_folders: ['tests'],
	webdriver: {
		start_process: true,
		server_path: chrome.path,
		port: 9515,
	},
	test_settings: {
		default: {
			launch_url: 'http://localhost:3000',
			desiredCapabilities: {
				browserName: 'chrome',
			},
		},
	},
}
