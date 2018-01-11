$( document ).ready(function(){
  //Random number
  var Random=Math.floor(Math.random()*101+19)
    $('#random-number').text(Random);
    
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  $('#number-wins').text(wins);
  $('#number-losses').text(losses);
  
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#random-number').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
        
  //wins
  function win(){
  alert("You won!");
    wins++; 
    $('#number-wins').text(wins);
    reset();
  }
  //losses
  function loss(){
  alert ("You lose!");
    losses++;
    $('#number-losses').text(losses);
    reset()
  }

  $('#one').click(function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          loss();
        }   
  })  
  $('#two').click(function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          loss();
        } 
  })  
  $('#three').click(function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
//sets win/lose conditions
          if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          loss();
        } 
  })  
  $('#four').click(function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          loss();
        }
  });   
}); 