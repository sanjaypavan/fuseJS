fc.bar2d.vLine = function () {
  var self = this;
  fc.vline.call(self);
};

fc.bar2d.vLine.prototype = fc.utils.extend(fc.vline);

(function () {
  var parameterList = ['color'];

  $.each(parameterList, function (index, parameter) {
    fc.bar2d.vLine.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
}) ();