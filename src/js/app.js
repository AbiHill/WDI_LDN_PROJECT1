//Variables
let playersAnswer = '';
let currentAnswer = '';
let randomIndexNumber = 0;
let randomSoundIndexNumber = 0;
let score = 0;
let toys = [];
let gameInPlay = false;
let time = 30;


//Toys Object Array Level One
const allToys = [{
  name: 'ball',
  image: '/images/ball.png',
  answer: 'ball'
}, {
  name: 'acid',
  image: '/images/acid.png',
  answer: 'acid'

}, {
  name: 'fish',
  image: '/images/fish.png',
  answer: 'fish'
}, {
  name: 'spock',
  image: '/images/spock.png',
  answer: 'spock'
}, {
  name: 'apple',
  image: '/images/apple.png',
  answer: 'apple'
}, {
  name: 'clock',
  image: '/images/clock.png',
  answer: 'clock'
}, {
  name: 'controller',
  image: '/images/controller.png',
  answer: 'controller'
}, {
  name: 'dinner',
  image: '/images/dinner.png',
  answer: 'dinner'
}, {
  name: 'lavalamp',
  image: '/images/lavalamp.png',
  answer: 'lavalamp'
}, {
  name: 'penguin',
  image: '/images/penguin.png',
  answer: 'penguin'
}, {
  name: 'pokemon',
  image: '/images/pokemon.png',
  answer: 'pokemon'
}, {
  name: 'science',
  image: '/images/science.png',
  answer: 'science'
}, {
  name: 'slipper',
  image: '/images/slipper.png',
  answer: 'slipper'
}, {
  name: 'teddy',
  image: '/images/teddy.png',
  answer: 'teddy'
}, {
  name: 'vader',
  image: '/images/vader.png',
  answer: 'vader'
},
{
  name: 'spaceship',
  image: '/images/spaceship.png',
  answer: 'spaceship'
},
{
  name: 'mathposter',
  image: '/images/mathposter.png',
  answer: 'mathposter'
}, {
  name: 'bin',
  image: '/images/bin.png',
  answer: 'bin'
}];

//Toys Object Array Level Two
const allToysLevelTwo = [{
  name: 'book',
  image: '/images/level-two-toys/book.png',
  answer: 'book'
}, {
  name: 'bottle',
  image: '/images/level-two-toys/bottle.png',
  answer: 'bottle'

}, {
  name: 'clock-two',
  image: '/images/level-two-toys/clock.png',
  answer: 'clock-two'
}, {
  name: 'cup',
  image: '/images/level-two-toys/cup.png',
  answer: 'cup'
}, {
  name: 'cusion',
  image: '/images/level-two-toys/cusion.png',
  answer: 'cusion'
}, {
  name: 'pot',
  image: '/images/level-two-toys/pot.png',
  answer: 'pot'
}, {
  name: 'slipper-two',
  image: '/images/level-two-toys/slipper.png',
  answer: 'slipper-two'
}, {
  name: 'soap',
  image: '/images/level-two-toys/soap.png',
  answer: 'soap'
}, {
  name: 'sock',
  image: '/images/level-two-toys/sock.png',
  answer: 'sock'
}, {
  name: 'spatu',
  image: '/images/level-two-toys/spatu.png',
  answer: 'spatu'
}, {
  name: 'sugar',
  image: '/images/level-two-toys/sugar.png',
  answer: 'sugar'
}, {
  name: 'vase',
  image: '/images/level-two-toys/vase.png',
  answer: 'vase'
}];


$(() => {
  console.log('JS Working');

  //get DOM elements
  const $currentToy = $('#currentToy');
  const $timer = $('#timer');
  const $go = $('#go');
  const $items = $('.items');
  const $score = $('#score');
  const $threeTwoOne = $('#three-two-one');
  const $startModal = $('#start-modal');
  const $game = $('#game');
  const $scoreModal = $('#score-modal');
  const $endScore = $('#endScore');
  const $playAgain = $('#play-again');
  const $endTitle = $('#end-title');
  const $playAgainButton = $('#play-again');
  const $scoreEnough = $('#scoreEnough');
  const $gameTune = $('#game-tune')[0];
  const $timeGlobe = $('#timeGlobe');
  const $soundOne = $('#sound-one')[0];
  const $soundTwo = $('#sound-two')[0];
  const $soundThree = $('#sound-three')[0];
  const $goSound = $('#goSound')[0];
  const $levelTwo = $('#level-two');
  const $body = $('body');
  const $itemsLevelTwo = $('#items-level-two');
  const $playAgainTwo = $('#play-again-two');
  const $scoreBox = $('.score-box');
  const $pointer = $('#pointer');
  const $levelTwoSound = $('#levelTwoSound')[0];
  const $popOne = $('#pop-one')[0];
  const $popTwo = $('#pop-two')[0];
  const $popThree = $('#pop-three')[0];
  const $winnerSound = $('#winner-sound')[0];
  const $scoreP = $('#scoreP');

  //Dom Variables
  const soundsOne = [$soundOne, $soundTwo, $soundThree];
  const soundsTwo = [$popOne, $popTwo, $popThree];

  //Random Sound Generator for the noise when you've selected the correct item
  function randomSoundGenerator(sounds){
    randomSoundIndexNumber = Math.floor(Math.random()*sounds.length);
    const currentSound = sounds[randomSoundIndexNumber];
    //play the currently selected sound
    currentSound.play();
  }

  // Three Two One count down function in the globe for level one
  function threeTwoOne(){
    //set the font color to be red and font size to be 15px
    $timer.css('color','#D20010', 'font-size', '15px');
    //variable to be start and display at 3 seconds
    let start = 3;

    //this runs every 0.8 seconds
    const startRunning = setInterval(() => {
      //start is equal to start minus 1
      start -= 1;
      //when start hits 0
      if (start === 0) {
        //play the go sound
        $goSound.play();
        //set the game to be in play so the user can click the next button
        gameInPlay = true;
        //randomly generate a toy
        randomToyGenerator();
        //start text is equal to 'GO'
        start = 'GO!';
        //stop the startRunning interval
        clearInterval(startRunning);
        //start the count down timer from 30 seconds
        startTimer();
        //in 1 second hide the threetwoone text
        setTimeout(() => $threeTwoOne.css('display','none'),1000);
      }
      $timer.text(start);
    }, 800);
  }


  // 30 seconds count down Function

  function startTimer(){
    //timer font to be black
    $timer.css('color','black');
    //every 1 second carry out the below actions ...
    const timerRunning = setInterval(() => {
      //minus 1 from the timer
      time -= 1;
      //if the time is equal to 10 then...
      if (time === 10) {
        //add the class of 'shake' which is an animation
        $timeGlobe.addClass('shake');
        //timer text to be red
        $timer.css('color','red');
        //if the time is equal to 0
      } if (time === 0) {
        //stop the timer
        clearInterval(timerRunning);
        //check if the score is equal to or greater than 12 - 12 is the win criteria
        if (score >= 12) {
          //if it is then display the score modal and say time is up, and display the congrats text
          $endTitle.text('TIME\'S UP');
          $scoreModal.css('display','flex');
          $scoreEnough.text('CONGRATS! You scored more than 12. Head to the next level!');
          //hide the play again button
          $playAgainButton.css('display','none');
          //show the level two button
          $levelTwo.css('display','block');
          //display the final score
          $endScore.text(score);
          //hide level two play again button
          $playAgainTwo.css('display','none');
          //hide the play again button for level one
          $playAgainButton.css('display','none');
        } else {
          //if they have not scored 12 and above then...
          //display the score modal, display time's up and 'try again pal' messaging
          $endTitle.text('TIME\'S UP');
          $scoreModal.css('display','flex');
          $scoreEnough.text('Try again Pal! You need to find more than 12 to get to the next level');
          //hide level two play again button
          $playAgainTwo.css('display','none');
          //show the score button
          $endScore.text(score);
          //hide level two button
          $levelTwo.css('display','none');
        }
        // if the length of the toy array is equal to 0 then stop the timer
      } if (toys.length === 0) {
        clearInterval(timerRunning);
      }
      $timer.text(time);
    }, 1000);
  }

  //Skip Button - if the user clicks the toy in the top left corner it will skip to the next toy
  $currentToy.on('click', randomToyGenerator);

  //Random Toy Generator Function - shows what the toy has been generated in the top right
  function randomToyGenerator(){
    //this prevents the user clicking the skip button and therefore a new toy being generated
    if(!gameInPlay)return false;
    randomIndexNumber = Math.floor(Math.random()*toys.length);
    const currentToyImage = toys[randomIndexNumber].image;
    $currentToy.attr('src', currentToyImage);
    currentAnswer = toys[randomIndexNumber].answer;
  }

  //Play Game Function - when the user clicks the play button
  $go.on('click',startGame);
  function startGame() {
    //create a new array of the level one toys
    toys = allToys.slice(0);
    //run the three two one count down timer
    threeTwoOne();
    //display the game
    $game.css('display', 'block');
    //hide the start modal
    $startModal.css('display','none');
    //play the level music
    $gameTune.play();
  }

  //When an item is clicked, check the answer
  $items.children().on('click', checkAnswer);

  function checkAnswer(e) {
    //so the user can't start before the game begins
    if(!gameInPlay)return false;
    playersAnswer = $(e.target).attr('class');
    //if the player is correct
    if(currentAnswer === playersAnswer) {
      //one of the random correct sounds runs
      randomSoundGenerator(soundsOne);
      //add an image to the div that containes the correct toy to show
      $(e.target).css({
        backgroundImage: 'url(/images/bam.png)',
        backgroundRepeat: 'no-repeat'
      });
      //remove the toy from the array once it's found
      toys.splice(randomIndexNumber, 1);
      //increase the score by 1
      score++;
      //display the new score
      $score.text(score);
      //when the array of toys is empty...
      if (toys.length === 0) {
        //disaply the modal
        $scoreModal.css('display','flex');
        //display a congrats message
        $endTitle.text('YOU DID IT WITH ' + time + ' SECONDS REMAINING!');
        //display 'head to the next level'
        $scoreEnough.text('Head to the next level!');
        //hide the play again button
        $playAgainButton.css('display','none');
        //hide level two play again button
        $playAgainTwo.css('display','none');
        //show the final score
        $endScore.text(score);
      } else {
        //if the array is not empty then random generate another toy
        randomToyGenerator();
      }
    }
  }

  //Click play Again button
  $playAgain.on('click',playAgain);

  //Click play Again Reset all functions and varaiables
  function playAgain(){
    //reset necessary Variables back to 0
    gameInPlay = false;
    time = 30;
    score = 0;
    //star the game again
    startGame();
    //hide the modal
    $scoreModal.css('display','none');
    //put the score back to 0 on the screen
    $score.text(0);
    //remove the shake class from the timer
    $timeGlobe.removeClass('shake');
    //remove all of the images on the toy divs
    $items.children().css({
      backgroundImage: 'none'
    });
    //reset the toys array
    toys = allToys.slice(0);
    //put the questionmark image back on the top left
    $currentToy.attr('src', '/images/question-mark.png');
  }

  //-------------------- Level Two Go ------------------------------------
  $levelTwo.on('click', runLevelTwo);

  //Run Level Two Function
  function runLevelTwo(){
    //play level two music
    $levelTwoSound.play();
    //create the level two array as a copy
    toys = allToysLevelTwo.slice(0);
    //remove all of the images on the divs from level one
    $itemsLevelTwo.children().css({
      backgroundImage: 'none'
    });
    //change the background image to level two image
    $body.css('backgroundImage', 'url(/images/bedroom-two.jpg)');
    //this stops users from click on the top image to move it along
    gameInPlay = false;
    //sets level two time
    time = 20;
    //sets score back to 0
    score = 0;
    //displays the score text on the screen
    $score.text(0);
    //remove the items div from level 1
    $items.css('display','none');
    //hide the modal
    $scoreModal.css('display','none');
    //display the level two divs for the items
    $itemsLevelTwo.css('display','block');
    //pause level one game tune
    $gameTune.pause();
    //run level two function
    threeTwoOneLevelTwo();
    //set the question mark image as the current toy
    $currentToy.attr('src', '/images/question-mark.png');
    //this is for the score arrow at the top - changes to a new style for level two
    $pointer.removeClass('pointer');
    $pointer.addClass('pointerTwo');
    //change the timer image to a pillow image for level two
    $timeGlobe.attr('src','/images/level-two-toys/timerTwo.png');
  }

  //Level Two Toy Generator
  function randomToyGeneratorTwo(){
    //randomly select a toy from the array
    randomIndexNumber = Math.floor(Math.random()*toys.length);
    //save the selected toys image to the vaiable so it can be displayed in the top right
    const currentToyImage = toys[randomIndexNumber].image;
    //show the current toys image
    $currentToy.attr('src', currentToyImage);
    //save the current toys answer in a variable in order to check the user clicked on the correct div
    currentAnswer = toys[randomIndexNumber].answer;
  }
  //When an item is clicked, check if the answer is correct
  $itemsLevelTwo.children().on('click', checkAnswerTwo);

  function checkAnswerTwo(e) {
    //the class of the toy is labled the same as the answer, the below saves it in to a variable to be checked
    playersAnswer = $(e.target).attr('class');
    //if the current answer is equal to the playersAnswer....
    if(currentAnswer === playersAnswer) {
      //play the sound to say it's been selected, via the random sound generator function
      randomSoundGenerator(soundsTwo);
      $(e.target).css({
        backgroundImage: 'url(/images/level-two-toys/poof.png)',
        backgroundRepeat: 'no-repeat'
      });
      //remove the toy from the array
      toys.splice(randomIndexNumber, 1);
      //increase the score by 1
      score++;
      //display the new score
      $score.text(score);
      //when the toys array is empty then the player has won so....
      if (toys.length === 0) {
        //display the win text
        $endTitle.text('CONGRATS! You Won!');
        //display the winner modal and gif
        $scoreBox.css({backgroundImage: 'url(/images/winner.gif)', height: '420px'});
        $scoreModal.css({
          display: 'flex'
        });
        //play the winner theme
        $winnerSound.play();
        //pause the level two music
        $levelTwoSound.pause();
        //hide the level two items
        $itemsLevelTwo.css('display','none');
        //hide level one play again button
        $playAgainButton.css('display','none');
        //hide level two play again button
        $playAgainTwo.css('display','none');
        //hide level two button
        $levelTwo.css('display','none');
        //hide the score element
        $endScore.css('display','none');
        //hide the scored enough element
        $scoreEnough.css('display','none');
        //hide the score p element
        $scoreP.css('display','none');
      } else {
        //if the lenght is not equal to 0 then generate another toy
        randomToyGeneratorTwo();
      }
    }
  }

  //threeTwo One Timer Two - for level two
  function threeTwoOneLevelTwo(){
    //timer font colour to be red and font size 15px
    $timer.css('color','#D20010', 'font-size', '15px');
    //start timer to count down from 3
    let start = 3;
    //set interval
    const startRunning = setInterval(() => {
      start -= 1;
      if (start === 0) {
        //when the count down hit's 0 play the go sound
        $goSound.play();
        //randomly generate the toys for level two
        randomToyGeneratorTwo();
        //the text in the count down says 'go'
        start = 'GO!';
        //stop the count down
        clearInterval(startRunning);
        //start the timer two function which is a count down from 20 seconds for level two
        startTimerTwo();
        setTimeout(() => $threeTwoOne.css('display','none'),1000);
      }
      $timer.text(start);
    }, 800);
  }

  // Start Timer Two 20 seconds
  function startTimerTwo(){
    //change the font back to black from red
    $timer.css('color','black');
    //set the count down timer running
    const timerRunning = setInterval(() => {
      //minus 1 fom the timer every 1 second
      time -= 1;
      //when the timer is equal to 10...
      if (time === 10) {
        //add the animation of 'shake' to the timer
        $timeGlobe.addClass('shake');
        //change the font colour to be red
        $timer.css('color','red');
        //when the time hits 0 ....
      } if (time === 0) {
        //stop the timer
        clearInterval(timerRunning);
        //check the score and if it's more than or equal to 12
        if (score >= 12) {
          //display the time's up text
          $endTitle.text('TIME\'S UP');
          //display the winner gif and score modal
          $scoreBox.css({backgroundImage: 'url(/images/winner.gif)', height: '420px'});
          $scoreModal.css({
            display: 'flex'
          });
          //play winner sound
          $winnerSound.play();
          //pause the level music
          soundsTwo.pause();
          //hide the level two items
          $itemsLevelTwo.css('display','none');
          //display congrats text
          $scoreEnough.text('CONGRATS! You Won!');
          //hide buttons
          $playAgainButton.css('display','none');
          $playAgainTwo.css('display','none');
          $levelTwo.css('display','none');
          //set text for the score
          $endScore.text(score);
        } else {
          //if the score is not more than or equal to 12 then ...
          //display times up and modal
          $endTitle.text('TIME\'S UP');
          $scoreModal.css('display','flex');
          //score box to be purple
          $scoreBox.css('background','#a64bcc');
          //set the text to say - try again pal
          $scoreEnough.text('Try again Pal! You need to find all 12 items to win');
          //set the score text
          $endScore.text(score);
          //hide the level two buttons and play again button for level one
          $levelTwo.css('display','none');
          $playAgainButton.css('display','none');
          //display the play again button for level two
          $playAgainTwo.css('display','block');
        }
        //if the length of toys array is 0
      } if (toys.length === 0) {
        //stop the timer
        clearInterval(timerRunning);
      }
      //show the timer text
      $timer.text(time);
    }, 1000);
  }

  //Click play Again button
  $playAgainTwo.on('click',runLevelTwo);

});
