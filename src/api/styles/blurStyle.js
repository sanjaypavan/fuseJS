fc.style.blurStyle = function (styleName) {
  var self = this;
  fc.style.style.call(self, styleName, 'blur');
};

fc.style.blurStyle.prototype = fc.utils.extend(fc.style.style);

(function () {
  var parameterList = ['blurX', 'blurY', 'quality'];

  $.each(parameterList, function(index, parameter) {
    fc.style.blurStyle.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
}) ();