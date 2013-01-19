fc.chart = function (attributes, childNodes) {
  var self = this;
  fc.styledChart.call(self, 'chart', attributes, childNodes);
};

fc.chart.prototype = fc.utils.extend(fc.styledChart);

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
    fc.chart.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });  
}) ();