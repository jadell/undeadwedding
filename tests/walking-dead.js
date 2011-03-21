var zombie = require('zombie'),
  vows = require('vows'),
  assert = require('assert');

var baseUrl = "http://uw.localhost";

vows.describe('Weapon Test').addBatch({
	'Navigate to Walking Dead' : {
		topic : function (){ zombie.visit(baseUrl+'/walking-dead', this.callback); },
		'should be on walking dead page' : function (browser) { assert.equal(browser.location, baseUrl+'/walking-dead/'); },
		'shoot zombie - alot' : {
			topic :  function (browser) { 
				browser.setMaxListeners(130);
				var i = 0;
				for(i=0;i<=120;i++){
					browser.fire('click', browser.querySelector('ul#zombies li:first'), this.callback);
				}
			},
			'no ammo' : function (browser) {
				var count = browser.window.$('#ammo').html();
				assert.isTrue(count == 0);
				assert.isTrue(browser.prompted('Click click. Crap. Zombie eats your face!!'));
			}
		}
	},
	'Navigate to Walking Dead - 2' : {
		topic : function (){ zombie.visit(baseUrl+'/walking-dead', this.callback); },
		'should be on walking dead page' : function (browser) { assert.equal(browser.location, baseUrl+'/walking-dead/'); },
		'shoot zombie - once' : {
			topic :  function (browser) { 
				browser.fire('click', browser.querySelector('ul#zombies li:first'), this.callback);
			},
			'less ammo' : function (browser) {
				var count = browser.window.$('#ammo').html();
				assert.isTrue(count == 55);
				var rel = browser.window.$('ul#zombies li:first').attr('rel');
				assert.isTrue(rel == 78);
			}
		}
	},
}).export(module);
