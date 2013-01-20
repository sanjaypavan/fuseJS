fc.Chart = function (attributes, childNodes) {
  var self = this;
  fc.StyledChart.call(self, 'chart', attributes, childNodes);
};

fc.Chart.prototype = fc.utils.extend(fc.StyledChart);

(function () {
  var parametersList = ['numberScaleValue', 'bgAngle', 'showLabels', 'chartTopMargin', 'defaultAnimation', 
  'animation', 'defaultNumberScale', 'thousandSeparator', 'borderThickness', 'bgRatio', 'showBorder', 
  'baseFontSize', 'decimals', 'bgAlpha', 'toolTipBgColor', 'baseFont', 'subCaption', 'numberScaleUnit', 
  'baseFontColor', 'bgColor', 'forceDecimals', 'bgSWF', 'bgSWFAlpha', 'numberPrefix', 'numberSuffix', 
  'chartLeftMargin', 'clickURL', 'decimalSeparator', 'formatNumberScale', 'caption', 'showToolTip', 
  'inThousandSeparator', 'chartRightMargin', 'palette', 'borderColor', 'showValues', 'toolTipSepChar', 
  'chartBottomMargin', 'toolTipBorderColor', 'formatNumber', 'captionPadding', 'borderAlpha', 
  'inDecimalSeparator'];

  $.each(parametersList, function (index, parameter) {
    fc.Chart.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });  
}) ();