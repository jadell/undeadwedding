var zombie = require('zombie'),
  vows = require('vows'),
  assert = require('assert');

var baseUrl = "http://uw.localhost";

vows.describe('Weapon Test').addBatch({
	'Navigate to Zombieland - false' : {
		'navigate to zombileand page' : {
			topic : function (){ zombie.visit(baseUrl+'/zombieland', this.callback); },
			'should be on zombieland page' : function (browser) { assert.equal(browser.location, baseUrl+'/zombieland/'); },
			'Car Door - Fail' : {
				topic :  function (browser) { 
					browser.onconfirm('A car Door? Really, Really?', false);
					browser.clickLink("Car Door", this.callback);
				},
				'prompted' : function (browser) {
					assert.isTrue(browser.prompted('A car Door? Really, Really?'));
				},
				'cancel prompt' : {
					topic :  function (browser) { 
						return browser
					},
					'prompted' : function (browser) {
						assert.isTrue(browser.prompted('Zombie eats your face.'));
					},

				}

				
			}
		}
	},
	'Navigate to Zombieland - true' : {
		'navigate to zombileand page' : {
			topic : function (){ zombie.visit(baseUrl+'/zombieland', this.callback); },
			'should be on zombieland page' : function (browser) { assert.equal(browser.location, baseUrl+'/zombieland/'); },
			'Car Door - True' : {
				topic :  function (browser) { 
					browser.onconfirm('A car Door? Really, Really?', true);
					browser.clickLink("Car Door", this.callback);
				},
				'prompted' : function (browser) {
					assert.isTrue(browser.prompted('A car Door? Really, Really?'));
				},
				'cancel prompt' : {
					topic :  function (browser) { 
						return browser
					},
					'prompted' : function (browser) {
						assert.isTrue(browser.prompted('ThummPMPmpp!!! It really is the little things.'));
					},

				}

				
			}
		}
	},
	'Assault Rifle' : {
		'navigate to zombileand page' : {
			topic : function (){ zombie.visit(baseUrl+'/zombieland', this.callback); },
			'should be on zombieland page' : function (browser) { assert.equal(browser.location, baseUrl+'/zombieland/'); },
			'Assault Rifle' : {
				topic :  function (browser) { 
					browser.clickLink("#assault-rifle", this.callback);
				},
				'prompted' : function (browser) {
					assert.isTrue(browser.prompted('No ammo. Zombie eats your face.'));
				}
			}
		}
	},
	'Fire!!' : {
		'navigate to zombileand page' : {
			topic : function (){ zombie.visit(baseUrl+'/zombieland', this.callback); },
			'should be on zombieland page' : function (browser) { assert.equal(browser.location, baseUrl+'/zombieland/'); },
			'I choose you fire!' : {
				topic :  function (browser) { 
					browser.clickLink("#fire", this.callback);
				},
				'prompted' : function (browser) {
					assert.isTrue(browser.prompted('Sweet sweet seared zombie flesh.'));
				}
			}
		}
	},
}).export(module);
