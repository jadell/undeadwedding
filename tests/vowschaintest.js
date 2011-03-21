var vows = require('vows'),
  assert = require('assert');

vows.describe('Chain Test').addBatch({
	'Parallel A' : {
		topic : 123,
		'in parallel with B' : function (topic) { assert.equal(topic, 123); },

		'subtopic A1' : {
			topic : function (topic) { return topic+1; },
			'after A parallel with A2' : function (topic) { assert.equal(topic, 124); },
		},

		'subtopic A2' : {
			topic : function (topic) { return topic+2; },
			'after A, parallel with A1' : function (topic) { assert.equal(topic, 125); },
		}
	},

	'Parallel B' : {
		topic : 456,
		'in parallel with A' : function (topic) { assert.equal(topic, 456); },  
	}
})
.addBatch({
	'New Batch' : {
		topic : 789,
		'after A and B' : function (topic) { assert.equal(topic, 789); },
	}
}).export(module);
