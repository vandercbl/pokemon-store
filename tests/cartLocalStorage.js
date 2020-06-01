module.exports = {
	'Cart LocalStorage': function (browser) {
		browser
			.url(browser.launchUrl)
			.waitForElementVisible('.links-stores')
			.click('.links-stores a.dragon')
			.assert.urlContains('/store/dragon')
			.waitForElementVisible('.type-store h1')
			.assert.containsText('.type-store h1', 'PokeStore')
			.waitForElementVisible('.item-pokemon:nth-of-type(1)', 10000)
			.click('.item-pokemon > button.add-cart')
			.refresh()
			.waitForElementVisible('.list-cart li:nth-of-type(1)', 10000)
			.assert.elementPresent('.list-cart li:nth-of-type(1)')
			.saveScreenshot('./testScreenshot/cart-localStorage.jpg')
		browser.end()
	},
}
