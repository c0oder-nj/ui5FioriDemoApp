sap.ui.define([
	"sap/ui/core/mvc/Controller",
	// importing new component from sap mobile library for showing alert 
	"sap/m/MessageToast",
	// importing json model 
	"sap/ui/model/json/JSONModel"
], function(Controller,MessageToast,JSONModel) {
	"use strict";

	return Controller.extend("demo_fioriApp.controller.View1", {
		// we write our business logic for controlling the actions user did in frontend 
		
		// initializing the Json Model -> for this we have a event knows as onInit
		// onInit : function() {
		// 	// set the data model to the view 
		// 	// but first create a data model 
		// 	// var oData = {
		// 	// 	user : {
		// 	// 		name:"Om Ganesh",
		// 	// 		id:"5053"
		// 	// 	}
		// 	// };
			
		// 	// // initializing the JSONModel or Creating New Object of JSONModel
		// 	// var oModel = new JSONModel(oData); // pass the data Model you created or fetched from outside like an oDataService
			
			
		// 	// // Now In order to set this created model (oModel) to view
		// 	// this.getView().setModel(oModel);
		// },
		
		onPress : function (evt){
			// alert("Hey There"); //eslint-disable-line
			
			// Now I can call my MessageToast Here
			// now getting the message value from i18n folder
			MessageToast.show("Hey There");
		}
		
		
	});
});