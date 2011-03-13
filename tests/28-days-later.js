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

var existingVote = null;
var existingCount = null;

vows.describe('Vote Test').addBatch({
	'Not logged in' : {
		'navigate to voting page' : {
			topic : function (){ zombie.visit(baseUrl+'/28-days-later', this.callback); },
			'should be on login page' : function (browser) { assert.equal(browser.location, baseUrl+'/login/'); },
		}
	},

	'Logged in' : {
		topic : logIn,
		'should be on voting page' : function (browser) { assert.equal(browser.location, baseUrl+'/28-days-later/'); },
		'should have an existing vote' : function (browser) {
			var foundVote = browser.window.$('#weapon li:first');
			assert.equal(1, foundVote.length);

			existingVote = foundVote.text().match(/^(.+):/)[1];
			existingCount = parseInt(foundVote.text().match(/:(.+)$/)[1]);
		},

		'vote for existing option' : {
			topic : function (browser) {
				browser
				.fill('#vote', existingVote)
				.pressButton('Vote', this.callback);
			},
			'should have increased count' : function (browser) {
				var foundVote = browser.window.$('#weapon li:first');
				var newCount = parseInt(foundVote.text().match(/:(.+)$/)[1]);
				assert.equal(newCount, existingCount+1);
			}
		},

		'vote for new option' : {
			topic : function (browser) {
				var callback = this.callback;
				browser.fork().visit(baseUrl+'/28-days-later/', function (err, browser) {
					browser
					.fill('#vote', 'Cricket Bat')
					.pressButton('Vote', callback);
				});
			},
			'should have created count' : function (browser) {
				var foundVote = browser.window.$('#weapon li:contains("Cricket Bat")');
				assert.equal(1, foundVote.length);

				var newCount = parseInt(foundVote.text().match(/:(.+)$/)[1]);
				assert.equal(newCount, 1);
			}
		}
	}
}).export(module);
