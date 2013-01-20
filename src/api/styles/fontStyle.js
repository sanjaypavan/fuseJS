fc.style.fontStyle = function (styleName) {
  var self = this;
  fc.style.style.call(self, styleName, 'font');
};

fc.style.fontStyle.prototype = fc.utils.extend(fc.style.style);

(function () {
  var parameterList = ['font', 'size', 'bold', 'isHTML', 'face', 'bgColor', 'italic', 'underline', 'borderColor',
    'color', 'leftMargin', 'letterSpacing'];

  $.each(parameterList, function(index, parameter) {
    fc.style.fontStyle.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
}) ();