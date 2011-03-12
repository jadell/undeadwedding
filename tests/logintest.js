var zombie = require('zombie'),
  vows = require('vows'),
  assert = require('assert');

var baseUrl = "http://uw.localhost";

vows.describe('Login Test').addBatch({
	'Valid login' : {
		'Navigate to login page' : {
			topic : function (){ zombie.visit(baseUrl+'/login', this.callback); },
			'should have login form' : function (browser) {
				assert.isNotNull(browser.css('#loginForm'));
			},
			'enter valid credentials' : {
				topic : function (browser) {
					browser
					.fill('#username', 'shaun')
					.fill('#password', 'winchester')
					.pressButton('Login', this.callback);
				},
				'should be on main page' : function (browser) { assert.equal(browser.location, baseUrl+'/'); },
				'should be not see login link' : function (browser) { assert.isUndefined(browser.link('login')); },
				'should be see logout link' : function (browser) { assert.isObject(browser.link('logout')); },
			}
		}
	},

	'Invalid login' : {
		'Navigate to login page' : {
			topic : function (){ zombie.visit(baseUrl+'/login', this.callback); },
			'should have login form' : function (browser) {
				assert.isNotNull(browser.css('#loginForm'));
			},
			'enter invalid credentials' : {
				topic : function (browser) {
					browser
					.fill('#username', 'ed')
					.fill('#password', 'cornetto')
					.pressButton('Login', this.callback);
				},
				'should be on login page' : function (browser) { assert.equal(browser.location, baseUrl+'/login/'); },
				'should see error message' : function (browser) { assert.include(browser.text('div.error'), "You've got red on you"); },
				'should be not see logout link' : function (browser) { assert.isUndefined(browser.link('logout')); },
				'should be see login link' : function (browser) { assert.isObject(browser.link('login')); },
			}
		}
	}																																																						,
}).export(module);
