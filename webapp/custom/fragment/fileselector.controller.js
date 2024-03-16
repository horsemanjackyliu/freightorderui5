sap.ui.define(["sap/fe/core/PageController"],
    function (PageController) {
        "use strict";

        return PageController.extend("freightorderattachmgt.custom.fragment.fileselector", {

            onUploadSet: function () {
                console.log("Upload Button Clicked!!!")

                alert("upload set triggered");
                /* TODO:Call to OData */
            },
            onCloseDialog: function () {
                console.log("Close clicked");
                alert("upload set triggered");
                this.pDialog.close();
                this.byId("uploadDialogSet--uploadDialogSet").close();
            },
            onItemRemoved: function () {
                console.log("File Remove/delete Event Fired!!!")
                /* TODO: Clear the already read excel file data */
            },
            onUploadSetComplete: function () {
                console.log("File Uploaded!!!")
                /* TODO: Read excel file data*/
            },

            onBeforeUploadStart: function () {
                console.log("onBeforeUploadStart Event Fired!!!");
            }
        });

    });
