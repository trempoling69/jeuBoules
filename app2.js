class PartySettings{
    constructor(){
        this.score = score;
        this.time = time
    }
}

class Partie{

    constructor(temps){ //defini les variables de l'object Partie 
        this.score = 0; //Voir si on peut supprimer 
        this.time = temps;
    }

    // get timeleft() {
    //     return this.temps; //
    // }

    addCircle(score){
        //fontion qui regarde si l'on clique sur le cercle et le fait bouger
        let element = document.getElementById("btn");
        element.addEventListener("click", function() {
            var y = (Math.random()*500);
            var x = (Math.random()*500);
            element.style.position = "relative";
            element.style.left = y + "px";
            element.style.top = x + "px";
            score += 1;
            PartySettings.score = score; //récupère  le score et le met dans la class partysettings
            console.log('Score: ' + score);
        })
    }

    endGame(end){
        if (end) alert('Votre score est de ' + PartySettings.score); //alert de fin de partie
    }

    tempo(){
        return setInterval(() => {
            let minutes = parseInt(this.temps / 60, 10) //transformation des milliseconde en minute
            let secondes = parseInt(this.temps % 60, 10) //transformation des milliseconde en seconde
          
            minutes = minutes < 10 ? "0" + minutes : minutes //rajoute des zero devant
            secondes = secondes < 10 ? "0" + secondes : secondes
            
          
            document.getElementById("timer").innerText = `${minutes}:${secondes}` //affiche le timer 

            this.temps = this.temps <= 0 ? 0 : this.temps - 1 //empeche le chrono d'aller en négatif
            this.endGame(this.temps == 0) //condition qui devient vrai quand temps = 0
        }, 1000);
    }
    startGame(){
        this.temps = this.time * 60; //transforme les milliseconde en seconde
        this.addCircle(this.score) //lance la fonction qui permet de bouger le cercle
    }
    
}

// function main(){
//     const test = new Partie(0.5);
//     test.startGame()
// }

function start(){ //fonction qui lance les fonctions de la class
    const test = new Partie(1); // defini un nouvel object  
    test.startGame() //lance la fonction principal
    test.tempo(true) //lance le timer
    document.getElementById('start_btn').style.display='none'; // supprime le bouton au lancement
}
