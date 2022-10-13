var highScoresEl = document.getElementById("highScores");
 
let displayScores = "";
 
for (let i = 0; i < localStorage.length; i++) {
    highScoreData = JSON.parse(localStorage.getItem(i+1));
    displayScores = displayScores.concat('</br><div id="highScores">'+ highScoreData.initials + " "+"-"+" " + highScoreData.score +'</div>');
    };
  
    highScoresEl.innerHTML = displayScores;
