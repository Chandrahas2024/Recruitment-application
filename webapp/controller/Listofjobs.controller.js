sap.ui.define(["com/org/RecruitmentApp/controller/BaseController",
], function (Controller) {
    "use strict";

    return Controller.extend("com.org.RecruitmentApp.controller.jobposting", {
            onInit :function(){
                const oUserModel = this.getOwnerComponent().getModel("userDetails");

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
            const oFirebaseModeldata = this.getOwnerComponent().getModel("firebase").getData();
            oFirebaseModeldata.firestore.collection("project1").get(oDetails);
            },
           
            

    });
});
