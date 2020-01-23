function showInfo(){

     document.getElementById('windowPlayer1').style.display="block";
     document.getElementById('windowPlayer2').style.display="block";
     $('.player1').html("Dark Side ");
     $('.player1Hp').html("Hp : " +player1Obj.hp);
     $('.player1Damage').html("Damage : " +player1Obj.damage);
     $('.player1Displacement').html("Action point : " +player1Obj.actionPoint);
     $('.player2').html("Light Side ");
     $('.player2Hp').html("Hp : " +player2Obj.hp);
     $('.player2Damage').html("Damage : " +player2Obj.damage);
     $('.player2Displacement').html("Action point : " +player2Obj.actionPoint);
     alert("The Dark Side always begin");

     /* la partie commmence ici */
     player1Obj.move();
}
