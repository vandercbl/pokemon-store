module.exports = {
	'Buy store dragon': function (browser) {
		browser
			.url(browser.launchUrl)
			.waitForElementVisible('.links-stores')
			.click('.links-stores a.dragon')
			.assert.urlContains('/store/dragon')
			.waitForElementVisible('.type-store h1')
			.assert.containsText('.type-store h1', 'PokeStore')
			.pause(5000)
			.waitForElementVisible('.item-pokemon:first-child', 10000)
			.saveScreenshot('./testScreenshot/buy-store-1.jpg')
		browser
			.click('.item-pokemon > button')
			.saveScreenshot('./testScreenshot/buy-store-2.jpg')
		browser
			.click('.buy')
			.waitForElementVisible('.finish-buy', 3000)
			.assert.containsText('.finish-buy', 'Obrigado!!!')
			.saveScreenshot('./testScreenshot/buy-store-3.jpg')
		browser.end()
	},
}
