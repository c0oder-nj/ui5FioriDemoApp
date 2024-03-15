sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"demo_fioriApp/model/models",
	"./controller/HelloDialog"
], function(UIComponent, Device, models,HelloDialog) {
	"use strict";

	return UIComponent.extend("demo_fioriApp.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
		
			
			this.setModel(models.createJsonModel());
			
			
			// set dialog
			this._helloDialog = new HelloDialog(this.getRootControl());
			// _ -> is used for declaring Private members
		},
		
		exit : function(){
			this._helloDialog.destroy();
			delete this._helloDialog;
		},
		
		openHelloDialog : function(){
			this._helloDialog.open();
		}
	});
});