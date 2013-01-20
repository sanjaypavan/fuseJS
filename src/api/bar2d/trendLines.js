fc.bar2d.TrendLines = function () {
  var self = this;
  fc.Node.call(self, 'trendLines');
};

fc.bar2d.TrendLines.prototype = fc.utils.extend(fc.Node);

fc.bar2d.TrendLines.prototype.createLineNode = function () {
  var node = new fc.bar2d.Line();
  this.addNode(node);
  return node;
};