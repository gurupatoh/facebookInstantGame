console.log("hello punny")
// https://www.facebook.com/embed/instantgames/1191001378311434/player?game_url=https://localhost:8080
FBInstant.initializeAsync() 
  .then(function() {
     var progress=0;
    var  interval = setInterval(function(){
        progress+=3
        FBInstant.setLoadingProgress(progress);
        if (progress>95){
          clearInterval(interval)
          FBInstant.startGameAsync()
                  .then(function() {
                    console.log("game has been started")
        })}
     },100)
}); 