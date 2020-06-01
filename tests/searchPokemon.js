module.exports = {
	'Search Pokemon': function (browser) {
		browser
			.url(browser.launchUrl)
			.waitForElementVisible('.links-stores')
			.click('.links-stores a.dragon')
			.assert.urlContains('/store/dragon')
			.pause(5000)
			.saveScreenshot('./testScreenshot/search-pokemon-1.jpg')
		browser
			.waitForElementVisible('input[name=search]')
			.setValue('input[name=search]', 'Dragonite')
			.waitForElementVisible('.item-pokemon:first-child', 5000)
			.assert.containsText('.item-pokemon:first-child', 'Dragonite')
			.saveScreenshot('./testScreenshot/search-pokemon-2.jpg')
		browser.end()
	},
}
