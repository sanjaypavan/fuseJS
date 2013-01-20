fc.style.styleApplications = function () {
  var self = this;
  fc.Node.call(self, 'application');  
};

fc.style.styleApplications.prototype = fc.utils.extend(fc.Node);

fc.style.styleApplications.prototype.applyStyles = function (toObject, styles) {
  return self.addNode(new fc.style.apply(toObject, styles));
};