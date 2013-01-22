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
		
		return propertyString;l
	},

	extend : function (f) {
		function G() {}
		G.prototype = f.prototype || f;
		return new G();
	},

	getPascalCasedName : function (name) {
		return name.substring(0,1).toUpperCase() + name.substring(1);
	},

	getPropertyMap : function (propertyString) {
		var propertyMap = {};
		var commonPropertyMap = {};
		var specificProperties = {};
		$(propertyString).each(function (index) {
			fc.utils.initializeIfUndefined(commonPropertyMap, this.tagName, 'Object');  
			fc.utils.initializeIfUndefined(specificProperties, this.tagName, 'Object'); 

			var tagName = this.tagName;
			fc.utils.initializeIfUndefined(propertyMap, tagName, 'Object');
			fc.utils.initializeIfUndefined(propertyMap[tagName], '_variable_', 'Object');
			fc.utils.initializeIfUndefined(propertyMap[tagName], '_defaults_', 'Object');

			$.each(this.attributes, function (i, attrib) {
				if (index === 0) {
					commonPropertyMap[tagName][attrib.name] = attrib.value;
				} else if(commonPropertyMap[tagName][attrib.name] === undefined || commonPropertyMap[tagName][attrib.name] !== attrib.value  ) {
					delete commonPropertyMap[tagName][attrib.name];
					specificProperties[tagName][attrib.name] = null;
				}				
			});
			propertyMap[tagName]['_variable_'] = specificProperties[tagName];
			propertyMap[tagName]['_defaults_'] = commonPropertyMap[tagName];
			propertyMap[tagName]['_children_'] = fc.utils.getPropertyMap(this.children);
			
		});
		return propertyMap;
	},

	initializeIfUndefined : function (map,key,type) {
		if(map[key] === undefined) {
			if(type === 'Object') {
				map[key] = {};
			}
			else if (type === 'Array') {
				map[key] = [];
			}
		}
	},

	getTreeView : function(propertyMap) {

		if ($.type(propertyMap) === 'array') {
			var returnString = '<li>';
			$.each(propertyMap, function(idx, data) {
				returnString += '<ul>';
				$.each(data, function (key, value) {
					returnString += '<li>' + key + ' : ' + value + '</li>';
				});
				returnString += '</ul>';			
			});
			return returnString + '</li>';
		} 
		else if ($.type(propertyMap) === 'object') {
			var htmlString = "";
			$.each(propertyMap , function (key, data){
				htmlString += '<ul>';
				
				if($.type(data) === 'array') {
					htmlString += fc.utils.getTreeView(data);	
				} else {
					htmlString += '<li>' + key + ' : ' + fc.utils.getTreeView(data) +'</li>';	
				}
			
				htmlString +='</ul>';
			});	
		} 
		else if ($.type(propertyMap) === 'string') {
			return propertyMap;
		} else {
			console.log(propertyMap + ' : Unsupported type passed as argument.');
		}
		

		return htmlString;
	}
};