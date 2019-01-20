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

function createRandomString(){
   var possibleChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   var returnString = "";
   for(var i = 0;i < 7;i++){
      returnString += possibleChars[Math.floor(Math.random() * possibleChars.length)];
   }
   return returnString;
}

document.querySelector("div.container > div.shorten > button.shorten").onclick = function(){
   firebase.database().ref().once("value", function(snapshot){
      var shortenedString = createRandomString();
      var urlToShorten = document.querySelector("div.container > div.shorten > input").value;
      if(!urlToShorten.startsWith("https://") || !urlToShorten.startsWith("http://")){
         urlToShorten = "http://" + urlToShorten;
      }
      if(!snapshot.val() || !snapshot.val()[shortenedString]){
         firebase.database().ref(shortenedString).set(urlToShorten);
         document.querySelector("div.container > div.shorten > p.result").innerHTML = "Shortened URL: <a href='https://xtrp.github.io/url_shortener/?" + shortenedString + "'>https://xtrp.github.io/url_shortener/?" + shortenedString + "</a>";
      }else{
         document.querySelector("div.container > div.shorten > button.shorten").onclick();
      }
   });
}