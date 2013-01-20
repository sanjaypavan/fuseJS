fc.area2d.TrendLines = function () {
  var self = this;
  fc.Node.call(self, 'trendLines');
};

fc.area2d.TrendLines.prototype = fc.utils.extend(fc.Node);

fc.area2d.TrendLines.prototype.createLineNode = function () {
  var node = new fc.area2d.Line();
  this.addNode(node);
  return node;
};