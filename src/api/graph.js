fc.Graph = function (attributes, childNodes) {
  var self = this;
  fc.StyledChart.call(self, 'graph', attributes, childNodes);
};

fc.Graph.prototype = fc.utils.extend(fc.StyledChart);

(function () {
  var parametersList = ['numberScaleValue', 'bgAngle', 'canvasBorderAlpha', 'showLabels', 'divLineDashLen',
   'labelPadding', 'showLimits', 'chartTopMargin', 'defaultAnimation', 'animation', 'defaultNumberScale',
   'slantLabels', 'zeroPlaneAlpha', 'thousandSeparator', 'borderThickness', 'bgRatio', 'legendPosition',
   'zeroPlaneThickness', 'showBorder', 'legendBorderThickness', 'xAxisNamePadding', 'baseFontSize',
   'canvasBgRatio', 'decimals', 'bgAlpha', 'toolTipBgColor', 'baseFont', 'numDivLines', 'subCaption', 
   'numberScaleUnit', 'baseFontColor', 'bgColor', 'canvasBgAngle', 'legendBorderColor', 'bgSWF',
   'forceDecimals', 'legendScrollBarColor', 'legendShadow', 'bgSWFAlpha', 'seriesNameInToolTip', 
   'canvasBgAlpha', 'alternateHGridAlpha', 'yAxisNamePadding', 'numberPrefix', 'numberSuffix', 'chartLeftMargin', 
   'canvasBorderThickness', 'clickURL', 'divLineDashGap', 'decimalSeparator', 'legendAllowDrag', 'canvasBgColor', 
   'yAxisNameWidth', 'outCnvBaseFontColor', 'formatNumberScale', 'divLineThickness', 'caption', 'yAxisName', 
   'showToolTip', 'legendBorderAlpha', 'inThousandSeparator', 'yAxisValueDecimals', 'labelStep', 
   'zeroPlaneColor', 'divLineColor', 'xAxisName', 'showZeroPlane', 'legendBgAlpha', 'chartRightMargin', 
   'palette', 'borderColor', 'outCnvBaseFontSize', 'yAxisValuesStep', 'showValues', 'yAxisMinValue', 
   'yAxisMaxValue', 'alternateHGridColor', 'legendScrollBgColor', 'setAdaptiveYMin', 'staggerLines', 
   'toolTipSepChar', 'chartBottomMargin', 'toolTipBorderColor', 'adjustDiv', 'canvasBorderColor', 
   'showDivLineValues', 'outCnvBaseFont', 'rotateLabels', 'formatNumber', 'divLineAlpha', 'showYAxisValues', 
   'captionPadding', 'xAxisMaxValue', 'legendScrollBtnColor', 'rotateYAxisName', 'yAxisValuesPadding', 
   'legendBgColor', 'legendPadding', 'divLineIsDashed', 'showAlternateHGridColor', 'labelDisplay', 
   'borderAlpha', 'inDecimalSeparator', 'showLegend', 'xAxisMinValue'];

  $.each(parametersList, function (index, parameter) {
    fc.Graph.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });  
}) ();