fc.area2d.trendLines = function () {
  var self = this;
  fc.node.call(self, 'trendLines');
};

fc.area2d.trendLines.prototype = fc.utils.extend(fc.node);

fc.area2d.trendLines.prototype.createLineNode = function () {
  var node = new fc.area2d.line();
  this.addNode(node);
  return node;
};