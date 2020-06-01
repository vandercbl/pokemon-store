module.exports = {
	'View store dragon': function (browser) {
		browser
			.url(browser.launchUrl)
			.waitForElementVisible('.links-stores')
			.click('.links-stores a.dragon')
			.assert.urlContains('/store/dragon')
			.waitForElementVisible('.type-store h1')
			.assert.containsText('.type-store h1', 'PokeStore')
			.pause(5000)
			.saveScreenshot('./testScreenshot/view-store-dragon.jpg')
		browser.end()
	},

	'View store electric': function (browser) {
		browser
			.url(browser.launchUrl)
			.waitForElementVisible('.links-stores')
			.click('.links-stores a.electric')
			.assert.urlContains('/store/electric')
			.waitForElementVisible('.type-store h1')
			.assert.containsText('.type-store h1', 'PokeStore')
			.pause(5000)
			.saveScreenshot('./testScreenshot/view-store-electric.jpg')
			.end()
	},

	'View store fire': function (browser) {
		browser
			.url(browser.launchUrl)
			.waitForElementVisible('.links-stores')
			.click('.links-stores a.fire')
			.assert.urlContains('/store/fire')
			.waitForElementVisible('.type-store h1')
			.assert.containsText('.type-store h1', 'PokeStore')
			.pause(5000)
			.saveScreenshot('./testScreenshot/view-store-fire.jpg')
			.end()
	},

	'View store flying': function (browser) {
		browser
			.url(browser.launchUrl)
			.waitForElementVisible('.links-stores')
			.click('.links-stores a.flying')
			.assert.urlContains('/store/flying')
			.waitForElementVisible('.type-store h1')
			.assert.containsText('.type-store h1', 'PokeStore')
			.pause(5000)
			.saveScreenshot('./testScreenshot/view-store-flying.jpg')
			.end()
	},

	'View store grass': function (browser) {
		browser
			.url(browser.launchUrl)
			.waitForElementVisible('.links-stores')
			.click('.links-stores a.grass')
			.assert.urlContains('/store/grass')
			.waitForElementVisible('.type-store h1')
			.assert.containsText('.type-store h1', 'PokeStore')
			.pause(5000)
			.saveScreenshot('./testScreenshot/view-store-grass.jpg')
			.end()
	},

	'View store ground': function (browser) {
		browser
			.url(browser.launchUrl)
			.waitForElementVisible('.links-stores')
			.click('.links-stores a.ground')
			.assert.urlContains('/store/ground')
			.waitForElementVisible('.type-store h1')
			.assert.containsText('.type-store h1', 'PokeStore')
			.pause(5000)
			.saveScreenshot('./testScreenshot/view-store-ground.jpg')
			.end()
	},

	'View store ice': function (browser) {
		browser
			.url(browser.launchUrl)
			.waitForElementVisible('.links-stores')
			.click('.links-stores a.ice')
			.assert.urlContains('/store/ice')
			.waitForElementVisible('.type-store h1')
			.assert.containsText('.type-store h1', 'PokeStore')
			.pause(5000)
			.saveScreenshot('./testScreenshot/view-store-ice.jpg')
			.end()
	},

	'View store steel': function (browser) {
		browser
			.url(browser.launchUrl)
			.waitForElementVisible('.links-stores')
			.click('.links-stores a.steel')
			.assert.urlContains('/store/steel')
			.waitForElementVisible('.type-store h1')
			.assert.containsText('.type-store h1', 'PokeStore')
			.pause(5000)
			.saveScreenshot('./testScreenshot/view-store-steel.jpg')
			.end()
	},

	'View store water': function (browser) {
		browser
			.url(browser.launchUrl)
			.waitForElementVisible('.links-stores')
			.click('.links-stores a.water')
			.assert.urlContains('/store/water')
			.waitForElementVisible('.type-store h1')
			.assert.containsText('.type-store h1', 'PokeStore')
			.pause(5000)
			.saveScreenshot('./testScreenshot/view-store-water.jpg')
			.end()
	},
}
