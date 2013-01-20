fc.bar2d.VLine = function () {
  var self = this;
  fc.VLine.call(self);
};

fc.bar2d.VLine.prototype = fc.utils.extend(fc.VLine);

(function () {
  var parameterList = ['color'];

  $.each(parameterList, function (index, parameter) {
    fc.bar2d.VLine.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
}) ();