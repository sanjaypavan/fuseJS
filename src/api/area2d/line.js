fc.area2d.Line = function () {
  var self = this;
  fc.Line.call(self);
};

fc.area2d.Line.prototype = fc.utils.extend(fc.Line);

(function () {
  var parameterList = ['showOnTop', 'valueOnRight'];

  $.each(parameterList, function (index, parameter) {
    fc.area2d.Line.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
}) ();