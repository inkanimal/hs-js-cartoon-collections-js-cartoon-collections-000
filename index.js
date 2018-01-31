 
function dwarfRollCall(dwarves) {
  var newDwarves = [];
  for (var i = 0; i < dwarves.length; i++){
    newDwarves.push(`${i + 1}. ${dwarves[i]} `);
  }

  return newDwarves.join("");

}


function summonCaptainPlanet(planeteerCalls){

  var newPlanet = [];
 for(var i = 0; i < planeteerCalls.length; i++){
    newPlanet.push(planeteerCalls[i].toUpperCase()+ "!");
   // planteteerCalls[i] = planterterCalls[i].toUpperCase();
  //var newPlanet = planeteerCalls.map((val, i, planeteerCalls)=>{
  //return val.toUpperCase()});
 
 }
 return newPlanet;
}


function longPlaneteerCalls(words) {
  for(var i =0; i < words.length; i++){
    if(words[i].length > 4){
      return true
    }else
    return false
  }
}

function findTheCheese (foods) {

  for( var i=0; i < foods.length; i++){


   if(foods[i]==="cheddar"||
   foods[i]==="gouda"||
   foods[i]==="camembert"){

   

    return foods[i];
    }
    }
    return "no cheese!";
}  

function wordWithB(words){
  for(var i =0; i < words.length; i++){
    //looking for words that start with "b" return all "b"words
    // else return []}
words[i].startsWith"b")
  

}

  
}
