sap.ui.define([
    "sap/ui/model/json/JSONModel",
    
    
], function(JSONModel) {
    'use strict';
    

    // configuration of firebase
    const firebaseConfig = {
      apiKey: "AIzaSyC_fVkxIwrWvlBzluwzBnYFS4rUuBbJudE",
      authDomain: "recruitmentapp-f8e4e.firebaseapp.com",
      projectId: "recruitmentapp-f8e4e",
      storageBucket: "recruitmentapp-f8e4e.appspot.com",
      messagingSenderId: "645895336261",
      appId: "1:645895336261:web:a5054b8c71633a46da0e2c",
      measurementId: "G-ZYWZS8T8M9"
    };
      return{
      initializeFirebase: function(){
        firebase.initializeApp(firebaseConfig);

        const firestore = firebase.firestore();
        const fireauth = firebase.auth();

        const ofirebase = {
            firestore : firestore,
            fireauth : fireauth
        }
        const fbMOdel = new JSONModel(ofirebase);
        return fbMOdel;
      }
    }
});