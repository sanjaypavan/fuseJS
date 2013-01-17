fc.Node = function (name, properties, childNodes) {
	this.name = name || 'set';
	this.properties = {};
	this.childNodes = [];
	
	if(properties !== undefined) {
		this.properties = properties;
	}
		
	if(childNodes !== undefined) {
		this.childNodes = childNodes;
	}
};

//Chart funciton which renders the final chart
fc.Node.prototype = {
	addProperty : function (key, value) {
		fc.Utils.addProperty(this, key, value);
		return this;
	},
	
	addChildNode : function (node) {
		var self = this;
		if (node instanceof fc.Node) {
			self.childNodes.push(node);	
		} else if (node instanceof Array) {
			$.each(node, function(data, index){
				self.childNodes.push(data);	
			});
		}
		
		return this;
	},
	
	addChildNodes : function (name, values, defaultProperties) {
		//Values will be arrays of maps
		var self = this;
		$.each(values, function (index , node) {
			self.addChildNode( (new fc.Node(name)).addProperty(defaultProperties).addProperty(node));
		});		
		return self;	
	},
	
	generateXml : function () {
		var chartXml = "";
		var self = this;
		
		//Add chart Properties 
				
		var nodeTag = "<" + self.name + fc.Utils.getPropertyString(self.properties) + ">\n";	
		chartXml += nodeTag;			
		
		$.each(self.childNodes, function (index, node) {
			chartXml += node.generateXml();			
		});
		
		chartXml += "</"+self.name+">";
		
		return chartXml;
	},
	
	toString : function() {
		return this.generateXml();
	}
};