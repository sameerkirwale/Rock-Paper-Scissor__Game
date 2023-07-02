let compMove ; // COMPUTER MOVE VARIABLE
let yourMove ; // MOVE SELECTED BY USER

// ROCK FUNCTION
let rock =()=> {
    yourMove = 'rock'; 
    compMove = pickCompMove ();

    playGame (yourMove, compMove);
}

// PAPER FUNCTION
let paper =()=> {
    yourMove = 'paper'; 
    compMove = pickCompMove ();

    playGame (yourMove, compMove);
}

// SCISSOR FUNCTION
let scissor =()=> {
    yourMove = 'scissor'; 
    compMove = pickCompMove ();

    playGame (yourMove, compMove);
}

// FUNCTION TO CHOOSE COMPUTER MOVE
let pickCompMove =()=>{
    let x = Math.floor(Math.random() * 3);

    if ( x === 0 ) {
        return 'rock';
    } 

    else if ( x === 1 ) {
        return 'paper';
    }

    else {
        return 'scissor';
    }
}

// STORING RESULT IN OBJECT FORM
let result = {
    win : 'Win',
    lose : 'Lose', 
    tie : 'Tie'
}

// SCORE IN OBJECT FORM
let score = JSON.parse ( localStorage.getItem ('score') ) || {
    win : 0,
    lose : 0,
    tie : 0
}

// ELEMENT TO DISPLAY WIN / LOSE / TIE
let resultElement = document.getElementById('result');

// ELEMENT TO SHOW MOVES
let moveElement = document.getElementById ('show-moves');

// ELEMENT TO UPDATE THE SCORE
let scoreElement = document.getElementById ('update-score');
scoreElement.innerHTML = `Wins: ${score.win},&nbsp; &nbsp; Losses: ${score.lose},&nbsp; &nbsp; Ties: ${score.tie} `;

// FUNCTION TO DISPLAY THE RESULT AND SCORE
let updateScore =( showResult, yourGuess, compGuess)=> {

    // WIN. LOSE. TIE
    if ( showResult === 'Tie') {
        resultElement.innerHTML = `<p> It's a ${showResult} </p>`;
    } else {
        resultElement.innerHTML = `<p> You ${showResult} </p>`;
    }

    // DISPLAY MOVES
    moveElement.innerHTML = `
    <p> 
        You <img src="${yourGuess}.png" class="img"> - &nbsp; 
        Computer <img src="${compGuess}.png" class="img"> 
    </p>`

    // DISPLAY SCORE
    scoreElement.innerHTML = `
        <p> 
            Wins: ${score.win},&nbsp; &nbsp; Losses: ${score.lose},&nbsp; &nbsp; 
            Ties: ${score.tie} 
        </p>`;

    // SETTING THE NEW SCORE IN LOCAL-STORAGE
    localStorage.setItem ('score', JSON.stringify(score));
}

// STORES THE CURRENT RESULT
let currentResult;

// FUNCTION TO CALCULATE RESULT 
let playGame =( yourGuess, compGuess )=> {
    
    if ( yourGuess === compGuess ) {
        score.tie ++ ; 
        currentResult = result.tie;
        updateScore ( currentResult, yourGuess, compGuess );
    }

    else if ( (yourGuess === 'rock') && (compGuess === 'paper') ) {
        score.lose ++ ;
        currentResult = result.lose;
        updateScore ( currentResult, yourGuess, compGuess ) ;
    }

    else if ( (yourGuess === 'rock') && (compGuess === 'scissor') ) {
        score.win ++ ;
        currentResult = result.win;
        updateScore ( currentResult, yourGuess, compGuess ) ;
    }

    else if ( (yourGuess === 'scissor') && (compGuess === 'paper') ) {
        score.win ++ ;
        currentResult = result.win;
        updateScore ( currentResult, yourGuess, compGuess ) ;
    }

    else if ( (yourGuess === 'scissor') && (compGuess === 'rock') ) {
        score.lose ++ ;
        currentResult = result.lose;
        updateScore ( currentResult, yourGuess, compGuess ) ;
    }

    else if ( (yourGuess === 'paper') && (compGuess === 'rock') ) {
        score.win ++ ;
        currentResult = result.win;
        updateScore ( currentResult, yourGuess, compGuess ) ;
    }

    else if ( (yourGuess === 'paper') && (compGuess === 'scissor') ) {
        score.lose ++ ;
        currentResult = result.lose;
        updateScore ( currentResult, yourGuess, compGuess ) ;
    }

}

// FUNCTION TO RESET THE SCORE
let reset =()=> {
    score.win = score.lose = score.tie = 0;
    localStorage.setItem ( 'score', JSON.stringify (score) );

    resultElement.innerHTML = moveElement.innerHTML = '';
    scoreElement.innerHTML = `Wins: ${score.win},&nbsp; &nbsp; Losses: ${score.lose},&nbsp; &nbsp; Ties: ${score.tie} `;
}