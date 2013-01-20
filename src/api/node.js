/**
 * Creates an xml node with attributes and childNodes
 * 
 * @constructor
 * @param {String} name Name of the xml node
 * @param {Object} attributes Attributes of the xml node
 * @param {Array} childNodes Children of the xml node
 */
fc.node = function (name, attributes, childNodes) {
	this.name = name || 'set';
	this.attributes = {};
	this.childNodes = [];
	
	//Deep cloning attributes object to ensure no impact on changing attributes elsewhere
	if(attributes !== undefined) {
		$.extend(true, this.attributes, attributes);
	}
		
	if(childNodes !== undefined) {
		var self = this;
		$.each(childNodes, function (index, childNode) {
			self.childNodes.push(childNode);
		});
	}
};

fc.node.prototype = {
	/**
	 * Set a single key value pair as an attribute for the xml node
	 * @param {String} key
	 * @param {String} value
	 */
	setAttribute : function (key, value) {
		this.attributes[key] = value;
		return this;
	},

	setAttributes : function (key, value) {
		if (value !== undefined) {
			this.attributes[key] = value;
		} else if (key instanceof Object) {
			$.extend(true,this.attributes,key);
		}

		return this;
	},
	
	addChildNode : function (node) {
		var self = this;
		if (node instanceof fc.node) {
			self.childNodes.push(node);	
		} else if (node instanceof Array) {
			$.each(node, function(data, index){
				self.childNodes.push(data);	
			});
		}
		
		return this;
	},
	
	addChildNodes : function (name, specificAttributes, defaultAttributes) {
		var self = this;
		$.each(specificAttributes, function (index , attributes) {
			self.addChildNode((new fc.node(name)).setAttributes(defaultAttributes).setAttributes(attributes));
		});		
		return self;	
	},

	addNode : function (node) {
		return this.addChildNode(node);
	},

	addNodes : function (name, specificAttributes, defaultAttributes) {
		return this.addChildNodes(name, specificAttributes, defaultAttributes);
	},

	addVarChildNodes : function () {
		var self = this;
		$.each(arguments, function (idx, argument) {
			self.addChildNode(argument);
		});
		return self;
	},
	
	generateXml : function (level) {
		var chartXml = "";
		var self = this;

		var indentationString = "";
		for (var i=0; i<level; i++) {
			indentationString += "\t";
		}
		level++;
		
		var nodeTag = indentationString + "<" + self.name + fc.utils.getPropertyString(self.attributes) + ">" + ((this.childNodes.length !== 0)?"\n":"");	
		chartXml += nodeTag;			
		
		$.each(self.childNodes, function (index, node) {			
			chartXml += node.generateXml(level);			
		});
		
		chartXml += "</"+self.name+">\n";		
		return chartXml;
	},
	
	toXml : function() {
		return this.generateXml(0);
	}
};
