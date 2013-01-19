fc.bar2d.line = function () {
  var self = this;
  fc.line.call(self);
};

fc.bar2d.line.prototype = fc.utils.extend(fc.line);

(function () {
  var parameterList = ['showOnTop', 'valueOnRight'];

  $.each(parameterList, function (index, parameter) {
    fc.bar2d.line.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
}) ();