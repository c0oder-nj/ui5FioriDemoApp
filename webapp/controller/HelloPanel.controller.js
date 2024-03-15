sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"sap/ui/core/Fragment"
	],function(Controller,MessageToast,Fragment){
		"use strict";
		
		return Controller.extend("demo_fioriApp.controller.HelloPanel",{
			onPress : function(){
				MessageToast.show("Hello I am in Nested View");
			},
			
			
			// writing the logic to invoke the fragement we created in HelloApp.fragement.xml
			onPressDialog : function(){
				// var oView = this.getView();
				
				// // create the dialog lazily
				// // why we write if not exist wala logic
				// // because when it first load then the fragment is not there then we check if dialog is loaded or not by referencing the id of the dialog and if 
				// // it does not loaded then what we do we just simply load the fragment in our dom and get the dialog in variable oDialog
				
				// if(!this.byId("HelloApp_dialog")){
				// 	// load XML Fragment Asynchronously
				// 	Fragment.load({
				// 		id : oView.getId(),
				// 		name : "demo_fioriApp.view.HelloApp",
				// 		controller : this
				// 	}).then(function(oDialog){
				// 		// oDialog referred to the Fragment we just loaded now it contains the value fragment gives to us and that is the dialog
						
				// 		// Now renders the dialog to the root view in which we want to render it that is my HelloPanelView 
				// 		// the variable for HelloPanelView I created earlier and stored in oView
				// 		oView.addDependent(oDialog);
				// 		oDialog.open();
				// 	});
				// }
				// else{
				// 	this.byId("HelloApp_dialog").open();
				// }
				
				this.getOwnerComponent().openHelloDialog();                         
			},
			
			onClose : function(){
				this.byId("HelloApp_dialog").close();
			}
		});
	});