fc.blurStyle = function (styleName) {
  var self = this;
  fc.style.call(self, styleName, 'blur');
};

fc.blurStyle.prototype = fc.utils.extend(fc.style);

(function () {
  var parameterList = ['blurX', 'blurY', 'quality'];

  $.each(parameterList, function(index, parameter) {
    fc.blurStyle.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
}) ();