fc.area2d.vLine = function () {
  var self = this;
  fc.vline.call(self);
};

fc.area2d.vLine.prototype = fc.utils.extend(fc.vline);

(function () {
  var parameterList = ['color'];

  $.each(parameterList, function (index, parameter) {
    fc.area2d.vLine.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
}) ();