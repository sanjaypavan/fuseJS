fc.bubble.Bubble = function () {
	var self = this;
	fc.Graph.call(self);	
};

fc.bubble.Bubble.prototype = fc.utils.extend(fc.Graph);

(function () {
	var parametersList = ['clipBubbles', 'negativeColor', 'use3DLighting', 'bubbleScale', 'showPlotBorder', 'plotBorderColor',
							'plotBorderThickness', 'plotBorderAlpha', 'plotFillAlpha'];
							
	$.each(parameterList, function (index, parameter) {
    fc.bubble.Bubble.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
})();
