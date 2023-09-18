// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array From Letters
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach((letter) => {
  // Create Span
  let span = document.createElement("span");

  // Create Letter Text Node
  let theLetter = document.createTextNode(letter);

  // Append The Letter To Span
  span.appendChild(theLetter);

  // Add class On Span
  span.className = "letter-box";

  // Append Span To The Letters Container
  lettersContainer.appendChild(span);
});

// Object Of Words + Categories
const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

// Get Random Property

let allKeys = Object.keys(words);

// Random Number Depend On Keys Length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// Category
let randomPropName = allKeys[randomPropNumber];

// Category Words
let randomPropValue = words[randomPropName];

// Random Number Depend On words
let randomValueNumbers = Math.floor(Math.random() * randomPropValue.length);

// The Chosen Word
let randomValue = randomPropValue[randomValueNumbers];

// Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// Select Letters Guess Container
let lettersGuessContainer = document.querySelector(".letters-guess");

// Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValue);

// Create Spans Depends On Word
lettersAndSpace.forEach((letter) => {
  // Create Empty Span
  let emptySpan = document.createElement("span");

  // If Letters Is Space
  if (letter === "") {
    // Add Class To The Span
    emptySpan.className = "with-space";
  }

  // Append Span To Letters Guess Container
  lettersGuessContainer.appendChild(emptySpan);
});

// Select Guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");

// Set Wrong Attempts
let wrongAttempts = 0;

// Set Success Attempts
let successAttempts = 0;

// Select The Draw Element
let theDraw = document.querySelector(".hangman-draw");

// Handle Clicking On Letters
document.addEventListener("click", (e) => {
  // Set The Chose Status
  let theStatus = false;

  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    // Get Clicked Letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    // The Chosen Word
    let theChosenWord = Array.from(randomValue.toLowerCase());

    theChosenWord.forEach((wordLetter, wordindex) => {
      // If The Clicked Letter Equal To One Of The Chosen Word Letter

      if (theClickedLetter === wordLetter) {
        // Set Status To Correct
        theStatus = true;

        // Loop On All Guess Spans
        guessSpans.forEach((span, spanIndex) => {
          if (wordindex === spanIndex) {
            span.innerHTML = theClickedLetter;
            successAttempts++;
          }
        });
      }
    });

    // Outside Loop

    // If Letter Is Wrong
    if (theStatus !== true) {
      // Increase The Wrong Attempts
      wrongAttempts++;

      // Add Class Wrong To The Draw Element
      theDraw.classList.add(`wrong-${wrongAttempts}`);

      // Play Fail Sound
      document.getElementById("fail").play();

      if (wrongAttempts === 8) {
        endGame();

        lettersContainer.classList.add("finished");
      }
    } else {
      // Play Success Sound
      document.getElementById("success").play();
      if (successAttempts == Array.from(randomValue).length && wrongAttempts < 4) {
      
         // Create Popup Div
  let popup = document.createElement("div");

  // Create Text
  let popupText = document.createTextNode(
    `Congtratlation, The Word Is ${randomValue}.
    
    You Have ${wrongAttempts} Mistakes.
    
    Your Level: Exellent.`
  );

  // Append Text To The Popup
  popup.appendChild(popupText);

  // Add Class At Popup Div
  popup.className = "popup";

  // Append To The Body
  document.body.appendChild(popup);

  lettersContainer.classList.add("finished")


  setTimeout(() => {
    location.reload();
  }, 4000);

  } else if(successAttempts == Array.from(randomValue).length && wrongAttempts >= 4 && wrongAttempts <= 6) {

         // Create Popup Div
         let popup = document.createElement("div");

         // Create Text
         let popupText = document.createTextNode(
           `Congtratlation, The Word Is ${randomValue}.
           
           You Have ${wrongAttempts} Mistakes.
           
           Your Level: Intermidiate.`
         );
       
         // Append Text To The Popup
         popup.appendChild(popupText);
       
         // Add Class At Popup Div
         popup.className = "popup";
       
         // Append To The Body
         document.body.appendChild(popup);

         lettersContainer.classList.add("finished")


         setTimeout(() => {
          location.reload();
        }, 4000);

  } else if(successAttempts == Array.from(randomValue).length && wrongAttempts > 6) {
    
         // Create Popup Div
         let popup = document.createElement("div");

         // Create Text
         let popupText = document.createTextNode(
           `Congtratlation, The Word Is ${randomValue}.
           
           You Have ${wrongAttempts} Mistakes.
           
           Your Level: Not Bad.`
         );
       
         // Append Text To The Popup
         popup.appendChild(popupText);
       
         // Add Class At Popup Div
         popup.className = "popup";
       
         // Append To The Body
         document.body.appendChild(popup);
         
         lettersContainer.classList.add("finished")



         setTimeout(() => {
          location.reload();
        }, 4000);
        

  }
    
     
}
}
  }

)

function endGame() {
    // Create Popup Div
    let popup = document.createElement("div");

    // Create Text
    let popupText = document.createTextNode(
      `Game Over, The Word Is "${randomValue}".`
      
  
    );
  
    // Append Text To The Popup
    popup.appendChild(popupText);
  
    // Add Class At Popup Div
    popup.className = "popup";
  
    // Append To The Body
    document.body.appendChild(popup);

    lettersContainer.classList.add("finished")
}
