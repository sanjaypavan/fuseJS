fc.area2d.Set = function () {
  var self = this;
  fc.Set.call(self);
};

fc.area2d.Set.prototype = fc.utils.extend(fc.Set);

(function () {
  var parameterList = ['label','value','color','showLabel','showValue','dashed','alpha','anchorSides',
  'anchorRadius','anchorBorderColor','anchorBorderThickness','anchorBgColor','anchorAlpha','anchorBgAlpha'];

  $.each(parameterList, function (index, parameter) {
    fc.area2d.Set.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
}) ();