fc.area2d.set = function () {
  var self = this;
  fc.set.call(self);
};

fc.area2d.set.prototype = fc.utils.extend(fc.set);

(function () {
  var parameterList = ['label','value','color','showLabel','showValue','dashed','alpha','anchorSides',
  'anchorRadius','anchorBorderColor','anchorBorderThickness','anchorBgColor','anchorAlpha','anchorBgAlpha'];

  $.each(parameterList, function (index, parameter) {
    fc.area2d.set.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
}) ();