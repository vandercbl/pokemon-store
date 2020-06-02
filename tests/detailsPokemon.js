module.exports = {
	'View pokemon details': function (browser) {
		browser
			.url(browser.launchUrl)
			.waitForElementVisible('.links-stores')
			.click('.links-stores a.dragon')
			.assert.urlContains('/store/dragon')
			.waitForElementVisible('.type-store h1')
			.assert.containsText('.type-store h1', 'PokeStore')
			.pause(5000)
			.waitForElementVisible('.item-pokemon:first-child', 10000)
			.click('.item-pokemon:first-child .link-details')
			.pause(5000)
			.waitForElementVisible('.profile-moves', 10000)
			.assert.containsText('.profile-moves p', 'Mooves:')
			.saveScreenshot('./testScreenshot/details-pokemon-1.jpg')
		browser.end()
	},
}
