$(() => {
  console.log('JS Working');

  //get DOM elements
  const $currentToy = $('#currentToy');


  //Toys Object Array
  const toys = [{
    name: 'dino',
    image: '/images/dino.jpg',
    answer: '.dino'
  }, {
    name: 'ducky',
    image: '/images/ducky.jpg',
    answer: '.ducky'
  }, {
    name: 'teddy',
    image: '/images/teddy.jpg',
    answer: '.teddy'
  }];

  //Random Toy Generator Function
  function randomToyGenerator(){
    const randomIndexNumber = Math.floor(Math.random()*toys.length);
    const currentToyImage = toys[randomIndexNumber].image;
    console.log('This is the current Toy Image' + currentToyImage);
    $currentToy.attr('src', currentToyImage);
    let currentAnswer = toys[randomIndexNumber].answer;
    console.log('This is the Current Answer ' + currentAnswer);
  }
  randomToyGenerator();




});

//Step 1: Get the TopRight Image to rotate randomly every 10 seconds.
//    - Randomly generate a number between 1-3 using math.floor(math.Random())*10 save this in to a variable call let randomIndex;
//    - then current toy = toy.pop(randomIndex)

//Step 2: 
