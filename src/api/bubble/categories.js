fc.bubble.Categories = function () {
  var self = this;
  fc.Categories.call(self);
};

fc.bubble.Categories.prototype = fc.utils.extend(fc.Categories);

(function () {
  var parametersList = ['verticalLineColor', 'verticalLineThickness', 'verticalLineAlpha', 'verticalLineDashed', 'verticalLineDashLen', 'verticalLineDashGap'];
  $.each(parameterList, function (index, parameter) {
    fc.bubble.Categories.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
})();
