fc.bar2d = {};
fc.bar2d.bar2D = function () {
  var self = this;
  fc.chart.call(self);
};

fc.bar2d.bar2D.prototype = fc.utils.extend(fc.chart);

(function () {
  var parameterList = ['showLimits', 'showDivLineValues', 'yAxisValuesStep', 'showShadow', 'adjustDiv', 
  'rotateYAxisName', 'yAxisNameWidth', 'yAxisMinValue', 'yAxisMaxValue', 'setAdaptiveYMin', 'xAxisName', 
  'yAxisName', 'canvasBgColor', 'canvasBgAlpha', 'canvasBgRatio', 'canvasBgAngle', 'canvasBorderColor', 
  'canvasBorderThickness', 'canvasBorderAlpha', 'useRoundEdges', 'showPlotBorder', 'plotBorderColor', 
  'plotBorderThickness', 'plotBorderAlpha', 'plotBorderDashed', 'plotBorderDashLen', 'plotBorderDashGap', 
  'plotFillAngle', 'plotFillRatio', 'plotFillAlpha', 'plotGradientColor', 'numDivLines', 'divLineColor', 
  'divLineThickness', 'divLineAlpha', 'divLineIsDashed', 'divLineDashLen', 'divLineDashGap', 'zeroPlaneColor', 
  'zeroPlaneThickness', 'zeroPlaneAlpha', 'showAlternateHGridColor', 'alternateHGridColor', 
  'alternateHGridAlpha', 'yAxisValueDecimals', 'outCnvBaseFont', 'outCnvBaseFontSize', 'outCnvBaseFontColor', 
  'xAxisNamePadding', 'yAxisNamePadding', 'yAxisValuesPadding', 'labelPadding', 'valuePadding', 
  'plotSpacePercent'];

  $.each(parameterList, function (index, parameter) {
    fc.bar2d.bar2D.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
}) ();