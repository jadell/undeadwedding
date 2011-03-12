var zombie = require('zombie'),
  vows = require('vows'),
  assert = require('assert');

var baseUrl = "http://uw.localhost";

function logIn() {
	callback = this.callback;
	zombie.visit(baseUrl+'/login', function (err, browser) {
		browser
		.fill('#username', 'shaun')
		.fill('#password', 'winchester')
		.pressButton('Login', function (err, browser) {
			browser.clickLink('28 Days Later', callback);
		});
	});
};


vows.describe('Vote Test').addBatch({
	'Not logged in' : {
		'Navigate to voting page' : {
			topic : function (){ zombie.visit(baseUrl+'/28-days-later', this.callback); },
			'should be on login page' : function (browser) { assert.equal(browser.location, baseUrl+'/login/'); },
		}
	},

	'Logged in' : {
		topic : logIn,
		'should be on voting page' : function (browser) { assert.equal(browser.location, baseUrl+'/28-days-later/'); },
	}
}).export(module);
