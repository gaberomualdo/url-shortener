// Initialize Firebase
var config = {
   apiKey: "AIzaSyCQvL_1u6TnoG3-RVX_cUX7macodu5w53k",
   authDomain: "urlshortener-cf414.firebaseapp.com",
   databaseURL: "https://urlshortener-cf414.firebaseio.com",
   projectId: "urlshortener-cf414",
   storageBucket: "urlshortener-cf414.appspot.com",
   messagingSenderId: "502683443463"
};
firebase.initializeApp(config);

var urlVariable = window.location.search.substring(1);
if(urlVariable != ""){
   firebase.database().ref(urlVariable).once("value", function(snapshot){
      if(snapshot.val()){
         window.open(snapshot.val(), "_self");
      }
   });
}else{
   window.open("shorten.html", "_self");
}