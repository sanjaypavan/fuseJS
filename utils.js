fc = {};
fc.Utils = {
	addProperty : function (node, key, value) {
		if (value !== undefined) {
			node.attributes[key] = value;
		} else if (key instanceof Object) {
			$.extend(true,node.attributes,key);
		}
	},
	
	getPropertyString : function (attributes) {
		var propertyString = "";
		$.each(attributes, function(key,value) {
			propertyString += " " + key + "='" + value + "'";
		});
		
		return propertyString;
	}	
};