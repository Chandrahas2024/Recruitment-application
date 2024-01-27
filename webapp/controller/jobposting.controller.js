sap.ui.define(["com/org/RecruitmentApp/controller/BaseController",
"sap/m/MessageToast"
], function (Controller) {
    "use strict";

    return Controller.extend("com.org.RecruitmentApp.controller.jobposting", {
            onInit :function(){
                const oUserModel = this.getOwnerComponent().getModel("userDetails");
//details
                const oDetails = {
                    jobtitle : "",
                    jobdescription : "",
                    location :"",
                    jobtype : "",
                    RequriedQualificationAndSkills: "",
                    enterdate: "",
                    companyinfo: "",
                    status:"",
                    companyname:""
                }

                oUserModel.setProperty("/jobposting",oDetails);
            },


            onPressPost: function(){
            const oUserModel = this.getOwnerComponent().getModel("userDetails");

            const oDetails = oUserModel.getProperty("/jobposting");
            console.log(oDetails);
            const that = this;
            const oFirebaseModeldata = this.getOwnerComponent().getModel("firebase").getData();
            oFirebaseModeldata.firestore.collection("job_posting_details").add(oDetails);
            },

           messagepass: function(){
            const oFirebaseModeldata = this.getOwnerComponent().getModel("firebase").getData();
            oFirebaseModeldata.firestore.collection("job_posting_details").add(oDetails);
           }
           
          

    });
});
