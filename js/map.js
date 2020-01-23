const $map = $("#map");

var grille = [];

var player1 = Math.floor(Math.random()*100);
var player2 = Math.floor(Math.random()*100);
var weapon1 = Math.floor(Math.random()*100);
var weapon2 = Math.floor(Math.random()*100);
var weapon3 = Math.floor(Math.random()*100);
var weapon4 = Math.floor(Math.random()*100);

const route = [weapon1, weapon2, weapon3, weapon4, player1, player2];
var way1 = 0;
var way2 = 0;


while (way1 < route.length){
  way2 = 0;
    while (way2 < route.length){
        if (route[way1] == route[way2] && way1 != way2){
            route[way2] = Math.floor(Math.random()*100);
            }
        way2++;
    }
    way1++;
};

while (route[5] == player1 || route[5] == (player1 + 1) || route[5] == (player1 - 1) ||
route[5] == (player1 + 10) || route[5] == (player1 - 10)|| route[5] == (player1 + 9) ||
route[5] == (player1 - 9) || route[5] == (player1 + 11) || route[5] == (player1 - 11) ||
route[5] == weapon1 || route[5] == weapon2 || route[5] == weapon3 || route[5] == weapon4) {
    route[5] = Math.floor(Math.random()*100);
}

for (let i = 0; i < 10; i++){

    for (let l = 0; l < 10; l++){
        var axe = parseInt(String(i)+ String(l));
        let numRandom = Math.floor(Math.random()*100);
        if (axe == route[0]){
            grille.push({axe: axe, x: i, y: l, type: 'weapon1', name: "Windu"});
            $map.append("<div class='weaponBlock1 block' axe='"+axe+"' x='"+i+"' y='"+l+"'></div>");
        }
        else if (axe == route[1]){
            grille.push({axe: axe, x: i, y: l, type: 'weapon2', name: "Darkvador"});
            $map.append("<div class='weaponBlock2 block' axe='"+axe+"' x='"+i+"' y='"+l+"'></div>");
        }
        else if (axe == route[2]){
            grille.push({axe: axe, x: i, y: l, type: 'weapon3', name: "Yoda"});
            $map.append("<div class='weaponBlock3 block' axe='"+axe+"' x='"+i+"' y='"+l+"'></div>");
        }
        else if (axe == route[3]){
            grille.push({axe: axe, x: i, y: l, type: 'weapon4', name: "Obiwan"});
            $map.append("<div class='weaponBlock4 block' axe='"+axe+"' x='"+i+"' y='"+l+"'></div>");
        }
        else if (axe == route[4]){
            grille.push({axe: axe, x: i, y: l, type: 'player1'});
            $map.append("<div class='player1Block block weaponBlockP1' axe='"+axe+"' x='"+i+"' y='"+l+"'></div>");
        }
        else if (axe == route[5]){
            grille.push({axe: axe, x: i, y: l, type: 'player2'});
            $map.append("<div class='player2Block block weaponBlockP2' axe='"+axe+"' x='"+i+"' y='"+l+"'></div>");
        }
        else if (axe != route[0] && axe != route[1] && axe != route[2]
          && axe != route[3] && axe != route[4] && axe != route[5] && numRandom > 70){
            grille.push({axe: axe, x: i, y: l, type: 'wall'});
            $map.append("<div class='wallBlock block' axe='"+axe+"' x='"+i+"' y='"+l+"'></div>");
        }
        else {
            grille.push({axe: axe, x: i, y: l, type: 'free'});
            $map.append("<div class='freeBlock block' axe='"+axe+"' x='"+i+"' y='"+l+"'></div>");
        }
    }
}
