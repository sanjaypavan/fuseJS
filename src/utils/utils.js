fc = {};
fc.utils = {
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
	},

	extend : function (f) {
		function G() {}
		G.prototype = f.prototype || f;
		return new G();
	},

	getPascalCasedName : function (name) {
		return name.substring(0,1).toUpperCase() + name.substring(1);
	}
};