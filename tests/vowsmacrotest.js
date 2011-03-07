var vows = require('vows'),
  assert = require('assert');

function isEqual(test) {
  var context = {};
  context['topic'] = function () {
    return (new Function("return "+this.context.name))();
  };
  context['is a number'] = function (topic) {
    assert.isNumber(topic);
  };
  context['equals '+test] = function (topic) {
    assert.equal(topic, (new Function("return "+test))());
  };
  return context;
};

vows.describe('Arithmetic Test').addBatch({
  '1+1'    : isEqual("3-1"),
  '3*2'    : isEqual("2+2+2"),
  '12/4'   : isEqual("3/1"),
  '10-5' : isEqual("-5+10"),
}).export(module);
