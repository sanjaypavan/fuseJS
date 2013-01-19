fc.styleApplications = function () {
  var self = this;
  fc.node.call(self, 'application');  
};

fc.styleApplications.prototype = fc.utils.extend(fc.node);

fc.styleApplications.prototype.applyStyles = function (toObject, styles) {
  return self.addNode(new fc.apply(toObject, styles));
};