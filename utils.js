fc = {};
fc.Utils = {
	addProperty : function (node, key, value) {
		if (value !== undefined) {
			node.properties[key] = value;
		} else if (key instanceof Object) {
			$.extend(true,node.properties,key);
		}
	},
	
	getPropertyString : function (properties) {
		var propertyString = "";
		$.each(properties, function(key,value) {
			propertyString += " " + key + "='" + value + "'";
		});
		
		return propertyString;
	}	
	
};