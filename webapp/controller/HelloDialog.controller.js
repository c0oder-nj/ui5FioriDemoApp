sap.ui.define([
		"sap/ui/base/ManagedObject",
		"sap/ui/core/Fragment"
	],function(ManagedObject,Fragment){
		"use strict";
		
		return ManagedObject.extend("demo_fioriApp.controller.HelloDialog", {
			constructor: function(oView)	{
				this._oView = oView;
			},
			exit: function(){
				delete this._oView;
			},
			open: function(){
				var oView =  this._oView;
				
				// create dialog lazily
				if(!oView.byId("HelloApp_dialog")){
					var oFragmentController = {
						onCloseDialog : function(){
							oView.byId("HelloApp_dialog").close();
						}
					};
					
					// load the fragment asynchronously
					Fragment.loa({
						id : oView.getId(),
						name : "demo_fioriApp.view.HelloApp",
						controller : oFragmentController
					}).then(function(oDialog){
						oView.addDependent(oDialog);
						oDialog.open();
					});
				}
				else{
					oView.byId("HelloApp_dialog").open();
				}
			}
		});
	});