// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella,
//  la cella cliccata si colora di azzurro 
//  ed emetto un messaggio in console con il numero della cella cliccata.

                        //TRACCIA 2
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
//  Attenzione: nella stessa cella può essere posizionata al massimo una bomba, 
//  perciò nell'array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
//  - abbiamo calpestato una bomba -
//   la cella si colora di rosso e la partita termina.
//    Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti
//  (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Errata corrige: rendere le caselle "non cliccabili" e far finire la partita è un superbonus, non è richiesto dalla consegna!
// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.     


/****************************************** *
 *               ON LOAD                    *
 *                                          *
 * *****************************************/
//recupero gli elementi dall HTML
const buttonEl = document.getElementById("start_button")
const gridContainerEl = document.getElementById("grid_container")


// creo un array di 16 numeri casuali(che non si ripetono)
const arrayNumbersBomb = []
 while(arrayNumbersBomb.length < 16) {
           let randomNumber = Math.floor(Math.random() * 100) + 1
            if(!arrayNumbersBomb.includes(randomNumber)){
            arrayNumbersBomb.push(randomNumber)
        }
    }


/****************************************** *
 *               ON CLICK                   *
 *                                          *
 * *****************************************/

//genero la griglia al "click"
buttonEl.addEventListener(
    "click",
    function(){
        gridGenerate(gridContainerEl) 
       
}
)




/****************************************** *
 *               FUNCTION                   *
 *                                          *
 * *****************************************/
//creo una funzione che mi genera una griglia
function gridGenerate (grid){
     grid.innerHTML = "";  // svuoto l' HTML per un'altra partita
     let tentativi = 0
     
     for(let i = 0; i < 100; i++){ // creo 100 div
        const gridBox = document.createElement("div") // creo un div
        gridBox.classList.add("box_easy") // accedo alla classlist di "div" aggiungo la classe "box"
        gridBox.append ([i + 1])  // inserisco il numero progressivo nel box
        
        gridBox.addEventListener(
            "click",
            function (){
                
     for(let i = 0; i < arrayNumbersBomb.length; i++)
     {
         currentBombNUmber = arrayNumbersBomb[i]
         if(this.innerHTML == currentBombNUmber){
               this.classList.add("bomb")
               // alert("hai perso")
            } else {
                this.classList.add("active")
           }
        }
                       }
        )

        grid.append(gridBox) // inserisco il "div" nella griglia
    }

}
