var zombie = require('zombie'),
  vows = require('vows'),
  assert = require('assert');

var baseUrl = "http://uw.localhost";

vows.describe('Weapon Test').addBatch({
	'Navigate to Zombieland' : {
		'navigate to zombileand page' : {
			topic : function (){ zombie.visit(baseUrl+'/zombieland', this.callback); },
			'should be on zombieland page' : function (browser) { assert.equal(browser.location, baseUrl+'/zombieland/'); },
			'Car Door - Fail' : {
				topic :  function (browser) { 
					browser.clickLink("Car Door", this.callback);
				},
				'prompted' : function (browser) {
					assert.isTrue(browser.prompted('A car Door? Really, Really?'));
					console.log(browser.onconfirm('A car Door? Really, Really?', true));
console.log(browser.onalert(function(){ console.log('wut?'); }));
				},
				'cancel prompt' : {
					topic :  function (browser) { 
console.log(browser.onalert(function(){ console.log('wut?'); }));
					},
					'prompted' : function (browser) {
						assert.true(browser.prompted('Zombie eats your face.'));
					},

				}

				
			}
		}
	}
}).export(module);
