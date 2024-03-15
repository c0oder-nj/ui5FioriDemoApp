sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}, 
		
		
		createJsonModel : function(){
			// set the data model 
			var oData = {
				user : {
					name:"Om Ganesh",
					id:"5053"
				}
			};
			var oModel = new JSONModel(oData);
			return oModel;
		}

	};
});