fc.area2d = {};
fc.area2d.Area2D = function () {
  var self = this;
  fc.Chart.call(self);
};

fc.area2d.Area2D.prototype = fc.utils.extend(fc.Chart);

(function () {
  var parameterList = ['canvasBorderAlpha', 'showPlotBorder', 'plotBorderColor', 'plotBorderThickness', 
  'plotBorderAlpha', 'plotBorderDashed', 'plotBorderDashLen', 'plotBorderDashGap', 'plotFillAngle', 
  'plotFillRatio', 'plotFillAlpha', 'plotGradientColor', 'showShadow', 'plotFillColor', 'drawAnchors', 
  'anchorSides', 'anchorRadius', 'anchorBorderColor', 'anchorBorderThickness', 'anchorBgColor', 'anchorAlpha', 
  'anchorBgAlpha', 'numDivLines', 'divLineColor', 'divLineThickness', 'divLineAlpha', 'divLineIsDashed', 
  'divLineDashLen', 'divLineDashGap', 'zeroPlaneColor', 'zeroPlaneThickness', 'zeroPlaneAlpha', 
  'showAlternateHGridColor', 'alternateHGridColor', 'alternateHGridAlpha', 'numVDivLines', 'vDivLineColor', 
  'vDivLineThickness', 'vDivLineAlpha', 'vDivLineIsDashed', 'vDivLineDashLen', 'vDivLineDashGap', 
  'showAlternateVGridColor', 'alternateVGridColor', 'alternateVGridAlpha', 'yAxisValueDecimals', 
  'outCnvBaseFont', 'outCnvBaseFontSize', 'outCnvBaseFontColor', 'xAxisNamePadding', 'yAxisNamePadding', 
  'yAxisValuesPadding', 'labelPadding', 'valuePadding', 'canvasPadding'];

  $.each(parameterList, function (index, parameter) {
    fc.area2d.Area2D.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
}) ();