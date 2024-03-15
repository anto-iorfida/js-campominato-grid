// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


// crare il bottone bigbang l'inizio di tutto 

const mainGrid = document.querySelector('.grid');
document.querySelector('#play').addEventListener('click', function() {

    mainGrid.innerHTML = "";
    document.querySelector('.grid').classList.remove('none');
   
    difficultyLevelGrid();
    difficultyLevel();

  });





// FUNCTION 

// Funzione che genera un quadrato
// number -> numero che rappresenta un numero
// return: elemento del dom che rappresenta un quadrato
function generateSquare(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`;

    // Gestione del click su ogni qudrato, aggiunge classe blue
    newSquare.addEventListener('click', function() {
        
            this.classList.add('blue');
            console.log('hai cliccato il', number)
           
    });

    return newSquare;
}

// generare funzione che ad ogni livello cambia il numero di quadrati
function difficultyLevelGrid() {
    // richiamare elementi che servono per la condizione 
    const level = document.querySelector('#livello').value;
    const mainGrid = document.querySelector('.grid');
    
    // aumenta i quadrati in base al level
    if (level === 'easy') {

      for(let i = 1; i <= 100; i++) {
          const newSquare = generateSquare(i);
          mainGrid.append(newSquare);
      }

      } else if (level === 'hard') {

      for(let i = 1; i <= 81; i++) {
           const newSquare = generateSquare(i);
           mainGrid.append(newSquare);
      }
    

      } else if (level === 'crazy') {

      for(let i = 1; i <= 49; i++) {
          const newSquare = generateSquare(i);
          mainGrid.append(newSquare);
           
      }

      } 
    
}

// generare funzione che ad ogni livello selezionato applica una classe differente hai 
function difficultyLevel() {
    // richimare elementi che servono per applicare condizione 
    const level = document.querySelector('#livello').value;
    const squares = document.querySelectorAll('.square'); 

    // Applica la classe in base al level
    if (level === 'easy') {

      for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add('easy');
      }

    } else if (level === 'hard') {

      for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add('hard');
      }

    } else if (level === 'crazy') {
        
      for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add('crazy');
      }

    } 
  }
 
