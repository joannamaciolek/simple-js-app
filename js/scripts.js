var pokemonRepository = (function () {
  var repository = [
  {
    name: 'Charmeleon',
    height: 1.1,
    types :['blaze' , 'solar-power']
  } ,
  {
    name: 'Blastoise',
    height: 1.6 ,
    types :['water' , 'torrent']
  } ,
  {
    name: 'Pidgeotto',
    height: 1 ,
    types :['flying' , 'keen-eye']
  } ,
  {
    name: 'Sandshrew',
    height: 0.6 ,
    types :['sand' , 'earth']
  } ,
  {
    name: 'Snorlax',
    height: 0.9 ,
    types :['thick-fat' , 'immunity']
  }
  ];

  //Creates new elements and adds into the DOM
  function addListItem (eachPokemon) {
    //creates li element in DOM
    var $li = document.createElement('li');

    // chooses ul element
    var $ul = document.querySelector('ul');

    //appends li DOM node as child of ul
    $ul.appendChild($li);

    //creates button element in DOM
    var $button = document.createElement('button');

    //adds class to button
    $button.classList.add('button-style');

    //appends button to website as a child of li
    $li.appendChild($button);

    // prints Pokemon name from repository to a button
    $button.innerText = eachPokemon.name;

    //executes showDetails function if button is clicked
    $button.addEventListener('click',function(event){
      console.log(eachPokemon.name);
    })
  }

   //prints pokemon name to console when button is clicked
  function showDetails(eachPokemon){
    console.log(eachPokemon.name);
    }

  // adds item to the repository
  function add(item) {
    //validates if item is object
    if (typeof item === 'object' ){
      repository.push(item);
    }else{
      console.log('new item is not an object therefore it cannot be added');
    }
  }

  // allows to access the repository from outside
  function getAll() {
    return repository;
  }

  return {
    addListItem: addListItem,
    showDetails: showDetails,
    add: add,
    getAll: getAll
  };

} ) ();

//calls addListItem function for each object in Pokemon repository
pokemonRepository.getAll().forEach(function (eachPokemon){
   pokemonRepository.addListItem (eachPokemon);
});
