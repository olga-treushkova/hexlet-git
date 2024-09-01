import readlineSync from 'readline-sync';

function proGame() {
    const userName = readlineSync.question('May I have your name? ');
 console.log(`Hello, ${userName}!`);
    console.log("What number is missing in the progression?");
    
    for (let i = 0; i < 3; i+=1) {
        
        const first = Math.floor(Math.random() * 10) + 1;
        const step = Math.floor(Math.random() * 10) + 1;
        const length = 10;

        const progression = '';
        let hiddenNumber = null;
              
        const hiddenIndex = Math.floor(Math.random() * length);

        for (let j = 0; j < length; j++) {
            const currentNumber = first + j * step;
            if (j === hiddenIndex) {
                progression += '.. '; 
                hiddenNumber = currentNumber; 

            } else {
                progression += currentNumber + ' ';  
            }
        }

        
        console.log(`Question: ${progression.trim()}`);
        
       
        const userAnswer = String(("Your answer:"), 10);
        
     
        if (userAnswer === hiddenNumber) {
            console.log("Correct!");

        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }
    
    console.log(`Congratulations, ${userName}!`);
}

export default proGame;