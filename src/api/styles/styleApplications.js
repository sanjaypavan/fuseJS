fc.style.styleApplications = function () {
  var self = this;
  fc.node.call(self, 'application');  
};

fc.style.styleApplications.prototype = fc.utils.extend(fc.node);

fc.style.styleApplications.prototype.applyStyles = function (toObject, styles) {
  return self.addNode(new fc.style.apply(toObject, styles));
};