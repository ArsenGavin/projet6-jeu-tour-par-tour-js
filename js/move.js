var tab1 = [0, 1, 2, 3];
var tab2 = [0, -1, -2, -3];
var tabForWeaponP1 = ["weaponBlockP1"];
var tabForWeaponP2 = ["weaponBlockP2"];
var freeBlock = [];
var axePlayer1 = [];
var axePlayer2 = [];
var axePlayer;
var playerBlock;
var player;
var playerX;
var playerXx;
var playerXt;
var playerY;
var playerYy;
var playerYt;
var nextPlayerPlaying = "player1";
var clickBlock;
var checkWeaponP1 = 0;
var checkWeaponP2 = 0;
var imgWeaponP1;
var imgWeaponP2;
var mapVanish = document.querySelector("#map");
var modeFight = "off";


/* Cette fonction ajoute une classe css au divS accessible au déplacement du joueur*/
function moveView(){
/* nextPlayerPlaying nous sert a savoir quel joueur doit jouer
  playerX contient la valeur de l'attribut x et playerY celle de l'attribut y*/
    if (nextPlayerPlaying == "player1"){
        playerBlock = document.querySelector('.player1Block');
        playerX = playerBlock.getAttribute('x');
        playerY = playerBlock.getAttribute('y');
        nextPlayerPlaying = "player2";
        player = 'player1Block';
    }

    else if (nextPlayerPlaying == "player2"){
        playerBlock = document.querySelector('.player2Block');
        playerX = playerBlock.getAttribute('x');
        playerY = playerBlock.getAttribute('y');
        nextPlayerPlaying = "player1";
        player = 'player2Block';
    }

    for (let i = 0; i < 4; i++){
/* On transforme en Int les valeurs x et y qui était sous forme de chaine de caractère*/
/* PlayerXt est égale a la position x du joueur + tab[i](0,1, 2, ou 3) se qui permet de ciblé
les divS qui nous intérresse*/

        playerXx = parseInt(playerX);
        playerYy = parseInt(playerY);
        playerXt = playerXx + tab1[i];
/* On dit ici que si la valeur playerXt est supérieur au nombre de case dans une colone
alors on initialise playerXt a 0*/
        if ( playerXt > (mapV2.height -1)){
            playerXt = 0;
        }
/* On transforme playerXt en chaine de caractere*/
        playerXt = playerXt + "";
/* move contient une div a laquel il faut ajouté une classe css*/
        let move = document.querySelector(  "[x='"  +  playerXt  +  "'][y='" +playerYy+"']"  );
/* si move contient deja une classe wallBlock alors on sort*/
        if (move.classList.contains("wallBlock")) {
            break;
        }
/*  on l'enleve la classe freeblock et on rajoute freeblockmove*/
        else {
            move.classList.remove("freeBlock");
            move.classList.add("freeBlockMove");
        }
    }

    for (let i = 0; i < 4; i++){

        playerXx = parseInt(playerX);
        playerYy = parseInt(playerY);
        playerXt = playerXx + tab2[i];

        if ( playerXt < 0){
            playerXt = playerXt + mapV2.height;
        }

        playerXt = playerXt + "";

        let move = document.querySelector(  "[x='"  +  playerXt  +  "'][y='" +playerYy+"']"  );

        if (move.classList.contains("wallBlock")) {
            break;
        }
        else {
            move.classList.remove("freeBlock");
            move.classList.add("freeBlockMove");
        }
    }

    for (let i = 0; i < 4; i++){

        playerXx = parseInt(playerX);
        playerYy = parseInt(playerY);
        playerYt = playerYy + tab1[i];

        if ( playerYt > (mapV2.width - 1)){
            playerYt = playerYt - mapV2.width;
        }

        playerYt = playerYt + "";

        let move = document.querySelector(  "[x='"  +  playerXx  +  "'][y='"  +playerYt+   "']"  );

        if (move.classList.contains("wallBlock")) {
            break;
        }

        else {
            move.classList.remove("freeBlock");
            move.classList.add("freeBlockMove");
        }
      }

    for (let i = 0; i < 4; i++){

        playerXx = parseInt(playerX);
        playerYy = parseInt(playerY);
        playerYt = playerYy + tab2[i];

        if ( playerYt < 0){
            playerYt = playerYt + mapV2.width;
        }

        playerYt = playerYt + "";

        let move = document.querySelector(  "[x='"  +  playerXx  +  "'][y='" +playerYt+"']"  );
        if (move.classList.contains("wallBlock")) {
            break;
        }
        else {
            move.classList.remove("freeBlock");
            move.classList.add("freeBlockMove");
        }
    }
}



/* La function qui permet un déplacement au clic sur une div contenant la classe "freeblockmove"
mais également de modifier "l'arme" si on clic sur une divS
qui les classes "freeBlockMove" et "weapon"*/

function moveClick() {
    clickBlock = event.target;
/* clickWeapon contient la div sur lequel le joueur a cliqué */
    var clickWeapon = clickBlock.classList.value;
/*  si clickWeapon contient une class weapon alors */
    if (clickWeapon == 'weaponBlock1 block freeBlockMove' || clickWeapon == 'block weaponBlock1 freeBlockMove'){
/* on rajoute la classe de l'arme en premier dans un tableau pour pouvoir s'en servir plus tard*/
        if (nextPlayerPlaying == "player1") {
            tabForWeaponP2.unshift("weaponBlock1");
        }
        if (nextPlayerPlaying == "player2") {
            tabForWeaponP1.unshift("weaponBlock1");
        }
/* on supprime classe "player" de la div sur laquel se trouve le joueur "avant le déplacement"*/
        playerBlock.classList.remove(player);

        if (nextPlayerPlaying == "player2") {
/* on retire l'avant derniere class ajouté au tableau d'arme du joueur
(l'arme qu'il possedais avant le click)
et on rajoute la class de l'arme sur laquel le joueur vien de clické*/
        playerBlock.classList.remove(tabForWeaponP1[1]);
        clickBlock.classList.add(tabForWeaponP1[0]);
        checkWeaponP1 = 1;
/* On remplace les valeurs .hp et .damage de l'ancienne arme par la nouvelle*/
        player1Obj.hp = windu.hp;
        player1Obj.damage = windu.damage;
/* On actualise également en html les valeurs pour un affichage direct*/
        $('.player1Hp').html("Hp : " +player1Obj.hp);
        $('.player1Damage').html("Damage : " +player1Obj.damage);
        }

        if (nextPlayerPlaying == "player1") {
        playerBlock.classList.remove(tabForWeaponP2[1]);
        clickBlock.classList.add(tabForWeaponP2[0]);
        checkWeaponP2 = 1;
        player2Obj.hp = windu.hp;
        player2Obj.damage = windu.damage;
        $('.player2Hp').html("Hp : " +player2Obj.hp);
        $('.player2Damage').html("Damage : " +player2Obj.damage);
        }
        clickBlock.classList.add(player);
    }
    else if (clickWeapon == 'weaponBlock2 block freeBlockMove' || clickWeapon == 'block weaponBlock2 freeBlockMove'){
        if (nextPlayerPlaying == "player1") {
          tabForWeaponP2.unshift("weaponBlock2");
        }
        if (nextPlayerPlaying == "player2") {
          tabForWeaponP1.unshift("weaponBlock2");
        }
        playerBlock.classList.remove(player);
        if (nextPlayerPlaying == "player2") {
        playerBlock.classList.remove(tabForWeaponP1[1]);
        clickBlock.classList.add(tabForWeaponP1[0]);
        checkWeaponP1 = 1;
        player1Obj.hp = obiwan.hp;
        player1Obj.damage = obiwan.damage;
        $('.player1Hp').html("Hp : " +player1Obj.hp);
        $('.player1Damage').html("Damage : " +player1Obj.damage);
        }
        if (nextPlayerPlaying == "player1") {
        playerBlock.classList.remove(tabForWeaponP2[1]);
        clickBlock.classList.add(tabForWeaponP2[0]);
        checkWeaponP2 = 1;
        player2Obj.hp = obiwan.hp;
        player2Obj.damage = obiwan.damage;
        $('.player2Hp').html("Hp : " +player2Obj.hp);
        $('.player2Damage').html("Damage : " +player2Obj.damage);
        }
        clickBlock.classList.add(player);
    }
    else if (clickWeapon == 'weaponBlock3 block freeBlockMove' || clickWeapon == 'block weaponBlock3 freeBlockMove'){
        if (nextPlayerPlaying == "player1") {
          tabForWeaponP2.unshift("weaponBlock3");
        }
        if (nextPlayerPlaying == "player2") {
          tabForWeaponP1.unshift("weaponBlock3");
        }
        playerBlock.classList.remove(player);
        if (nextPlayerPlaying == "player2") {
        playerBlock.classList.remove(tabForWeaponP1[1]);
        clickBlock.classList.add(tabForWeaponP1[0]);
        checkWeaponP1 = 1;
        player1Obj.hp = darkvador.hp;
        player1Obj.damage = darkvador.damage;
        $('.player1Hp').html("Hp : " +player1Obj.hp);
        $('.player1Damage').html("Damage : " +player1Obj.damage);
        }
        if (nextPlayerPlaying == "player1") {
            playerBlock.classList.remove(tabForWeaponP2[1]);
            clickBlock.classList.add(tabForWeaponP2[0]);
            checkWeaponP2 = 1;
            player2Obj.hp = darkvador.hp;
            player2Obj.damage = darkvador.damage;
            $('.player2Hp').html("Hp : " +player2Obj.hp);
            $('.player2Damage').html("Damage : " +player2Obj.damage);
        }
        clickBlock.classList.add(player);
    }
    else if (clickWeapon == 'weaponBlock4 block freeBlockMove' || clickWeapon == 'block weaponBlock4 freeBlockMove'){
        if (nextPlayerPlaying == "player1") {
          tabForWeaponP2.unshift("weaponBlock4");
        }
        if (nextPlayerPlaying == "player2") {
          tabForWeaponP1.unshift("weaponBlock4");
        }
        playerBlock.classList.remove(player);
        if (nextPlayerPlaying == "player2") {
          playerBlock.classList.remove(tabForWeaponP1[1]);
          clickBlock.classList.add(tabForWeaponP1[0]);
          checkWeaponP1 = 1;
          player1Obj.hp = yoda.hp;
          player1Obj.damage = yoda.damage;
          $('.player1Hp').html("Hp : " +player1Obj.hp);
          $('.player1Damage').html("Damage : " +player1Obj.damage);
        }
        if (nextPlayerPlaying == "player1") {
          playerBlock.classList.remove(tabForWeaponP2[1]);
          clickBlock.classList.add(tabForWeaponP2[0]);
          checkWeaponP2 = 1;
          player2Obj.hp = yoda.hp;
          player2Obj.damage = yoda.damage;
          $('.player2Hp').html("Hp : " +player2Obj.hp);
          $('.player2Damage').html("Damage : " +player2Obj.damage);
        }
        clickBlock.classList.add(player);
    }

/* Ici on enleve la class weeapon de la div ou le joueur est (avant le déplacement)
et on l'ajoute sur la div click */
    else if (clickBlock != playerBlock){
        if (nextPlayerPlaying == "player1") {
          clickBlock.classList.add(tabForWeaponP2[0]);
          playerBlock.classList.remove(tabForWeaponP2[0]);
          if (checkWeaponP2 == 1) {
              playerBlock.classList.add(tabForWeaponP2[1]);
              checkWeaponP2 = 0;
            }
        }
        if (nextPlayerPlaying == "player2") {
          clickBlock.classList.add(tabForWeaponP1[0]);
          playerBlock.classList.remove(tabForWeaponP1[0]);
          if (checkWeaponP1 == 1) {
              playerBlock.classList.add(tabForWeaponP1[1]);
              checkWeaponP1 = 0;
            }
        }
/* Ici on enleve la class "player" de la div ou le joueur est (avant le déplacement)
et on l'ajoute sur la div clic */
        clickBlock.classList.remove("freeBlock");
        clickBlock.classList.add(player);
        playerBlock.classList.remove(player);
        playerBlock.classList.add("freeBlockMove");
    }


    axePlayer = clickBlock.getAttribute('axe');
/* on ajoute dans des tableau l'axe des joueurs afin de les comparé
et savoir si ils sont sur des cases adjacente si oui alors on passe a la phase combat*/
    if (nextPlayerPlaying == "player2"){
        axePlayer1.unshift(axePlayer);
    }

    if (nextPlayerPlaying == "player1"){
        axePlayer2.unshift(axePlayer);
    }

/* on vérifie ici si les joueurs sont sur des cases adjacente */
    if (axePlayer1[0] == axePlayer2[0] || axePlayer1[0] == (axePlayer2[0] + 1) || axePlayer1[0] == (axePlayer2[0] - 1) ||
     axePlayer1[0] == (axePlayer2[0] + mapV2.width) || axePlayer1[0] == (axePlayer2[0] - mapV2.width) ||
     axePlayer2[0] == (axePlayer1[0] + 1) || axePlayer2[0] == (axePlayer1[0] - 1) ||
      axePlayer2[0] == (axePlayer1[0] + mapV2.width) || axePlayer2[0] == (axePlayer1[0] - mapV2.width)){
       modeFight = "on";
     }


/* fonction clean qui permet d'enlever les freeBlockMove d'un joueur
pour pouvoir ajouter proprement les freeBlockMove du joueur suivant
c'est aussi ici qu'on change l'image "profil" a gauche ou a droite de la page html
en fonciton de class weapon que possede les joueurs */
    for (i=0; i < (mapV2.height * mapV2.width); i++){
      let caseClean = document.querySelector("[axe='"  +  i  +  "']");
      caseClean.classList.remove("freeBlockMove");
      caseClean.classList.add("freeBlock");
    }

    imgWeaponP1 = document.querySelector(".playersImage1");
    imgWeaponP2 = document.querySelector(".playersImage2");

    if (tabForWeaponP1[0] == "weaponBlock1"){
      imgWeaponP1.classList.remove("imgWeapon01");
      imgWeaponP1.classList.remove("imgWeapon2");
      imgWeaponP1.classList.remove("imgWeapon3");
      imgWeaponP1.classList.remove("imgWeapon4");
      imgWeaponP1.classList.add("imgWeapon1");
    }

    if (tabForWeaponP1[0] == "weaponBlock2"){
      imgWeaponP1.classList.remove("imgWeapon01");
      imgWeaponP1.classList.remove("imgWeapon1");
      imgWeaponP1.classList.remove("imgWeapon3");
      imgWeaponP1.classList.remove("imgWeapon4");
      imgWeaponP1.classList.add("imgWeapon2");
    }

    if (tabForWeaponP1[0] == "weaponBlock3"){
      imgWeaponP1.classList.remove("imgWeapon01");
      imgWeaponP1.classList.remove("imgWeapon1");
      imgWeaponP1.classList.remove("imgWeapon2");
      imgWeaponP1.classList.remove("imgWeapon4");
      imgWeaponP1.classList.add("imgWeapon3");
    }

    if (tabForWeaponP1[0] == "weaponBlock4"){
      imgWeaponP1.classList.remove("imgWeapon01");
      imgWeaponP1.classList.remove("imgWeapon1");
      imgWeaponP1.classList.remove("imgWeapon2");
      imgWeaponP1.classList.remove("imgWeapon3");
      imgWeaponP1.classList.add("imgWeapon4");
    }

    if (tabForWeaponP2[0] == "weaponBlock1"){
      imgWeaponP2.classList.remove("imgWeapon02");
      imgWeaponP2.classList.remove("imgWeapon2");
      imgWeaponP2.classList.remove("imgWeapon3");
      imgWeaponP2.classList.remove("imgWeapon4");
      imgWeaponP2.classList.add("imgWeapon1");
    }

    if (tabForWeaponP2[0] == "weaponBlock2"){
      imgWeaponP2.classList.remove("imgWeapon02");
      imgWeaponP2.classList.remove("imgWeapon1");
      imgWeaponP2.classList.remove("imgWeapon3");
      imgWeaponP2.classList.remove("imgWeapon4");
      imgWeaponP2.classList.add("imgWeapon2");
    }

    if (tabForWeaponP2[0] == "weaponBlock3"){
      imgWeaponP2.classList.remove("imgWeapon02");
      imgWeaponP2.classList.remove("imgWeapon1");
      imgWeaponP2.classList.remove("imgWeapon2");
      imgWeaponP2.classList.remove("imgWeapon4");
      imgWeaponP2.classList.add("imgWeapon3");
    }

    if (tabForWeaponP2[0] == "weaponBlock4"){
      imgWeaponP2.classList.remove("imgWeapon02");
      imgWeaponP2.classList.remove("imgWeapon1");
      imgWeaponP2.classList.remove("imgWeapon2");
      imgWeaponP2.classList.remove("imgWeapon3");
      imgWeaponP2.classList.add("imgWeapon4");
    }
};
