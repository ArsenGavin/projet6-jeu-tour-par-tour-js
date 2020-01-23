
class Joueur {
    constructor(){
        this.hp=100;
        this.damage=10;
        this.actionPoint=3;
    }
    attack(pointdown){
        this.hp -= pointdown;
    }
    block(pointdown){
        this.hp -= (pointdown / 2);
    }

    move(){
        moveView();
        $('.block').off("click");
        $('.freeBlockMove').on("click",function() {
            moveClick();
            if (nextPlayerPlaying == "player2"){
                player2Obj.move();
                nextPlayerPlaying = "player1";
                $('#text-info-p2').html("<br><br><p>The Force change of side.<br>DarkSide you need to play.</p>");
                $('#text-info-p1').html("");
                if (modeFight == "on") {
                  fight();
                }
            }
            else if (nextPlayerPlaying == "player1"){
                player1Obj.move();
                nextPlayerPlaying = "player2";
                $('#text-info-p1').html("<br><br><p>The Force change of side.<br>LightSide you need to play.</p>");
                $('#text-info-p2').html("");
                if (modeFight == "on") {
                  fight();
                }
            }
        });
    }
}

var player1Obj = new Joueur();
var player2Obj = new Joueur();
