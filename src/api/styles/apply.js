fc.style.apply = function (toObject, styles) {
  var self = this;
  fc.node.call(self, 'apply');

  self.setAttribute('toObject', toObject);
  self.setAttribute('styles', styles);
};

fc.style.apply.prototype = fc.utils.extend(fc.node);