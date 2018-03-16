counter = 0;
corectAnswer = 0;

var resultScreen = document.querySelector('.result');
var game = document.querySelector('.game');


function showModal () {
    var modal = document.querySelector('.modal');
    modal.style.display = 'block';

}

function closeModal () {
    var modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

function startGame () {

    game.style.display = 'block';
    var sing = '';

    if ( counter < 5 ) {
        var a = Math.floor( Math.random() * 100 ) + 1;
        var b = Math.floor( Math.random() * 100 ) + 1;


        var val = Math.floor( Math.random() * 1000 );
        var singValue = Math.floor( Math.random() * 75 ) + 1;

        var a1 = Math.floor( Math.random() * 10 ) + 1;
        var a2 = Math.floor( Math.random() * 20 ) + 1;


        if ( val <= 500 && singValue <= 25){
            sing = '+';
            var lowerLimit = a + b -5;
            var upperLimit = a + b + 5;
            var answer = Math.floor( Math.random() *( upperLimit - lowerLimit + 1 ) + upperLimit );
            var sum = a + b;
        }
        else if (val <= 333 && singValue >= 25 && singValue <= 50) {
            sing = '-';
            var lowerLimit = b - a2 -5;
            var upperLimit = b - a2 + 5;
            var answer = Math.floor( Math.random() *( upperLimit - lowerLimit + 1 ) + upperLimit );
            var sum = b - a2;
        }
        else if (val <= 333 && singValue >= 50 && singValue <= 75) {
            sing = '*';
            var lowerLimit = a1 * b - 5;
            var upperLimit = a1 * b + 5;
            var answer = Math.floor( Math.random() *( upperLimit - lowerLimit + 1 ) + upperLimit );
            var sum = a1 * b;

        }


        if ( val >333 && singValue <= 25) {
            var answer = a + b;
            sing = '+';
            var sum = a + b;
        }
        else if (val > 333 && singValue >= 25 && singValue <= 50) {
            var answer = b - a2;
            sing = '-';
            var sum = b - a2;
        }
        else if (val > 333 && singValue >= 50 && singValue <= 75) {
            var answer = a1 * b;
            sing = '*';
            var sum = a1 * b;
        }

        if (sing == '+'){
            var confirmationMessage = "Da li je " + a + sing + b + "=" + answer;
            var question = document.querySelector('.question');
            question.innerHTML = confirmationMessage;
        } else if (sing == '-'){
            var confirmationMessage = "Da li je " + b + sing + a2 + "=" + answer;
            var question = document.querySelector('.question');
            question.innerHTML = confirmationMessage;
        } else {
            var confirmationMessage = "Da li je " + b + sing + a1 + "=" + answer;
            var question = document.querySelector('.question');
            question.innerHTML = confirmationMessage;
        }


        var resultMessage = corectAnswer + ' / 5';
        var result = document.querySelector('.currentState');
        result.innerHTML = resultMessage;


        document.querySelector('.yes').onclick = function() {
            if ( answer == sum ){
                console.log('tacan odgovor');
                counter++;
                corectAnswer++;
                startGame ();
            } else {
                console.log('pogresan odgovor');
                counter++;
                startGame ();
            }
        };

        document.querySelector('.no').onclick = function () {
            if( answer != sum ){
                console.log('tacan odgovor');
                counter++;
                corectAnswer++;
                startGame ();
            } else {
                console.log('pogresan odgovor');
                counter++;
                startGame ();
            }
        };

    } else {
        var resultMessage1 = 'Vas rezultat je : ' + corectAnswer + ' / 5';
        var result1 = document.querySelector('.sum');

        resultScreen.style.display = 'block';
        result1.innerHTML = resultMessage1;
    }
}

function restartGame () {
    counter = 0;
    corectAnswer=0;

    resultScreen.style.display = 'none';
    game.style.display = 'block';

    startGame ();

}

function quitGame () {
    counter = 0;
    corectAnswer=0;

    resultScreen.style.display = 'none';
    game.style.display = 'none';
}


