var pokemonRepository = (function () {
  var repository = [];

  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  function loadList() {
      //fetches the data from API
      return fetch(apiUrl, {
       method: 'GET'
     }).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          //adds the data to repository
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

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
      showDetails(eachPokemon);
    });
  }

   //prints pokemons details in the console by clicking on the button
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
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

  //loads detailed data for each pokemon using detailsUrl property
  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails:loadDetails
  };

} ) ();

  // Loading the data from API
pokemonRepository.loadList().then(function() {
  // accessing pokemon repository & running function over each object in repository
  pokemonRepository.getAll().forEach(function (eachPokemon){
    //executing addListItem function for each object in pokemon repository
    pokemonRepository.addListItem (eachPokemon);
  });
});
