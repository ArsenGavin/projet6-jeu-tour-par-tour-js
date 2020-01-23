class Map {
  constructor(height, width){
    this.height=height;
    this.width=width;
  }
  mapBuild(){
/* On récupere les arguments rentré en paramettre
"heiht" et "widht" pour définir la taille de la map*/
    const $map = $("#map");
    $map.css("height",(this.height*47)+"px");
    $map.css("width",(this.width*47)+"px");
    var grille = [];
    var axe = 0;


/* On déclare des variables et on leur attribu un numéro random comprit
entre 0 et (height * width) pour tout les "éléments" a placer sur la map*/
    this.player1 = Math.floor(Math.random()*(this.height*this.width));
    this.player2 = Math.floor(Math.random()*(this.height*this.width));
    this.weapon1 = Math.floor(Math.random()*(this.height*this.width));
    this.weapon2 = Math.floor(Math.random()*(this.height*this.width));
    this.weapon3 = Math.floor(Math.random()*(this.height*this.width));
    this.weapon4 = Math.floor(Math.random()*(this.height*this.width));


    const route = [this.weapon1, this.weapon2, this.weapon3, this.weapon4, this.player1, this.player2];
    var way1 = 0;
    var way2 = 0;

/* on vérifie ic que les variables du tableau route n'on pas le même numéro
sinon on génére un nouveau numéro pour cette variable*/
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
/* on vérifie maintenant que les variables player1 et players2 ne sont pas
amener a etre sur des cases adjacente sinon on random le numéro players 2*/
    while (route[5] == this.player1 || route[5] == (this.player1 + 1) || route[5] == (this.player1 - 1) ||
    route[5] == (this.player1 + 10) || route[5] == (this.player1 - 10)|| route[5] == (this.player1 + 9) ||
    route[5] == (this.player1 - 9) || route[5] == (this.player1 + 11) || route[5] == (this.player1 - 11) ||
    route[5] == this.weapon1 || route[5] == this.weapon2 || route[5] == this.weapon3 || route[5] == this.weapon4) {
        route[5] = Math.floor(Math.random()*100);
    }


/* C'est ici qu'on genere la map a l'aide des numéro random
chaque case créée possede un attribut "axe" "x" "y" d'une valeur unique
X pour la hauteur,   y pour la largeur,
axe quand a lui, nous sert a placé les élément du tableau route[]
*/
    for (let i = 0; i < this.height; i++){

        for (let l = 0; l < this.width; l++){
            let numRandom = Math.floor(Math.random()*100);
            if (axe == route[0]){
                grille.push({axe: axe, x: i, y: l, type: 'weapon1', name: "Windu"});
                $map.append("<div class='weaponBlock1 block' axe='"+axe+"' x='"+i+"' y='"+l+"'></div>");
                axe++;
            }
            else if (axe == route[1]){
                grille.push({axe: axe, x: i, y: l, type: 'weapon2', name: "Darkvador"});
                $map.append("<div class='weaponBlock2 block' axe='"+axe+"' x='"+i+"' y='"+l+"'></div>");
                axe++;
            }
            else if (axe == route[2]){
                grille.push({axe: axe, x: i, y: l, type: 'weapon3', name: "Yoda"});
                $map.append("<div class='weaponBlock3 block' axe='"+axe+"' x='"+i+"' y='"+l+"'></div>");
                axe++;
            }
            else if (axe == route[3]){
                grille.push({axe: axe, x: i, y: l, type: 'weapon4', name: "Obiwan"});
                $map.append("<div class='weaponBlock4 block' axe='"+axe+"' x='"+i+"' y='"+l+"'></div>");
                axe++;
            }
            else if (axe == route[4]){
                grille.push({axe: axe, x: i, y: l, type: 'player1'});
                $map.append("<div class='player1Block block weaponBlockP1' axe='"+axe+"' x='"+i+"' y='"+l+"'></div>");
                axe++;
            }
            else if (axe == route[5]){
                grille.push({axe: axe, x: i, y: l, type: 'player2'});
                $map.append("<div class='player2Block block weaponBlockP2' axe='"+axe+"' x='"+i+"' y='"+l+"'></div>");
                axe++;
            }
            else if (axe != route[0] && axe != route[1] && axe != route[2]
              && axe != route[3] && axe != route[4] && axe != route[5] && numRandom > 70){
                grille.push({axe: axe, x: i, y: l, type: 'wall'});
                $map.append("<div class='wallBlock block' axe='"+axe+"' x='"+i+"' y='"+l+"'></div>");
                axe++;
            }
            else {
                grille.push({axe: axe, x: i, y: l, type: 'free'});
                $map.append("<div class='freeBlock block' axe='"+axe+"' x='"+i+"' y='"+l+"'></div>");
                axe++;
            }
        }
    }
  };

}

var mapV2 = new Map(10,15);

/* On lance ici la méthode mapBuild de la class mapV2 qui génére la map */
mapV2.mapBuild();
