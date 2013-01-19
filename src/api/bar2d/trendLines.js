fc.bar2d.trendLines = function () {
  var self = this;
  fc.node.call(self, 'trendLines');
};

fc.bar2d.trendLines.prototype = fc.utils.extend(fc.node);

fc.bar2d.trendLines.prototype.createLineNode = function () {
  var node = new fc.bar2d.line();
  this.addNode(node);
  return node;
};