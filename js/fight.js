var defCheckP1 = "no";
var defCheckP2 = "no";

function fight() {
/* on remplace les cases généré pour la map par deux boutton
un attaque et un def
chaqu'un a une fonction qui lui est attribué*/
    $("#map").html('<div id="arena"><div class="attDef"><button id="buttonAtt" class="btn btn-danger" >Attack</button><button id="buttonDef" class="btn btn-primary" >Block</button></div></div>');
        $('#buttonAtt').on("click",function() {
            if (nextPlayerPlaying == "player2"){
                nextPlayerPlaying = "player1";
                if (defCheckP1 == "yes") {
                    player2Obj.block(player1Obj.damage);
                    defCheckP1 ="no";
                }
                else {
                    player2Obj.attack(player1Obj.damage);
                }
/* on actualise en html les .hp */
                $('.player1Hp').html("Hp : " +player1Obj.hp);
                $('.player2Hp').html("Hp : " +player2Obj.hp);
                $('#text-info-p2').html("<br><br><p>Lightside you need to play.</p>");
                $('#text-info-p1').html("");
                if (player1Obj.hp < 1 || player2Obj.hp < 1){
                    $("#map").html('<div class="win"><p id="congrat">"The Force always win.."</p><img class="img-win" src="./src/250.jpg"></div>');
                }
            }
            else if (nextPlayerPlaying == "player1"){
                nextPlayerPlaying = "player2";
                if (defCheckP2 == "yes") {
                    player1Obj.block(player2Obj.damage);
                    defCheckP2 ="no";
                }
                else {
                    player1Obj.attack(player2Obj.damage);
                }
                $('.player1Hp').html("Hp : " +player1Obj.hp);
                $('.player2Hp').html("Hp : " +player2Obj.hp);
                $('#text-info-p1').html("<br><br><p>Darkside you need to play.</p>");
                $('#text-info-p2').html("");
                if (player1Obj.hp < 1 || player2Obj.hp < 1){
                    $("#map").html('<div class="win"><p id="congrat">"The Force always win.."</p><img class="img-win" src="./src/250.jpg"></div>');
                }
            }
          });
          $('#buttonDef').on("click",function() {
/* si un joueur click sur le bouton Def la prochaine attaque seras divisé par 2 */
              if (nextPlayerPlaying == "player2"){
                  defCheckP2="yes";
                  $('#text-info-p2').html("<br><br><p>Lightside you need to play.</p>");
                  $('#text-info-p1').html("");
                  nextPlayerPlaying = "player1";
              }
              else if (nextPlayerPlaying == "player1"){
                  defCheckP1="yes";
                  $('#text-info-p1').html("<br><br><p>Darkside you need to play.</p>");
                  $('#text-info-p2').html("");
                  nextPlayerPlaying = "player2";
              }
          });
};
