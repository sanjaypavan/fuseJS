fc.bar2d.Line = function () {
  var self = this;
  fc.Line.call(self);
};

fc.bar2d.Line.prototype = fc.utils.extend(fc.Line);

(function () {
  var parameterList = ['showOnTop', 'valueOnRight'];

  $.each(parameterList, function (index, parameter) {
    fc.bar2d.Line.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
}) ();