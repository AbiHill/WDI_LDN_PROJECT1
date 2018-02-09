$(() => {
  console.log('JS Working');

  const $currentToy = $('#currentToy');


  //Toys
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

  function randomToyGenerator(){
    const randomIndexNumber = Math.floor(Math.random()*toys.length);
    const currentToy = toys[randomIndexNumber].image;
    $currentToy.attr('src', currentToy);
  }
  randomToyGenerator();


});

//Step 1: Get the TopRight Image to rotate randomly every 10 seconds.
//    - Randomly generate a number between 1-3 using math.floor(math.Random())*10 save this in to a variable call let randomIndex;
//    - then current toy = toy.pop(randomIndex)
