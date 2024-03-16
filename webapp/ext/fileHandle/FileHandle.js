// sap.ui.define(["sap/ui/core/mvc/ControllerExtension","sap/ui/core/Fragment"
 sap.ui.define(["sap/ui/core/Fragment"
], function(Fragment) {
    'use strict';

        return  {
         pDialog : null,
     
      uploadfiles: function(oEvent) {
            if (!this.pDialog) {
                Fragment.load({
                    id: "uploadDialogSet",
                    name: "freightorderattachmgt.custom.fragment.fileselector",
                    type: "XML",
                    controller: this
                }).then((oDialog) => {
                    var oFileUploader = Fragment.byId("uploadDialogSet", "uploadSet");
                    oFileUploader.removeAllItems();
                    this.pDialog = oDialog;
                    this.pDialog.open();
                }).catch(error=>alert(error.message));
            }else{
                var oFileUploader = Fragment.byId("uploadDialogSet", "uploadSet");
                oFileUploader.removeAllItems();
                this.pDialog.open();

            }

        },
        onUploadSet: function(oEvent) {
            console.log("Upload Button Clicked!!!")
            alert("upload set triggered");
            /* TODO:Call to OData */
        },
        onCloseDialog: function (oEvent) {           
            console.log("Close clicked")  ;
            alert("upload set triggered");
            this.pDialog.close();
            this.byId("uploadDialogSet--uploadDialogSet").close();
        },
        onItemRemoved:function (oEvent) {
            console.log("File Remove/delete Event Fired!!!")  
            /* TODO: Clear the already read excel file data */          
        },
        onUploadSetComplete: function (oEvent) {
            console.log("File Uploaded!!!")
            /* TODO: Read excel file data*/
        },
        onItemRemoved:function (oEvent) {
            console.log("File Remove/delete Event Fired!!!")  
            /* TODO: Clear the already read excel file data */          
         }
    }} );

