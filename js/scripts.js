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
  }
  ];
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
    add: add,
    getAll: getAll
};

} ) ();
// iterates over each object in repository and prints its name & height to the website
pokemonRepository.getAll().forEach(function (eachName){
  //checks if height is above 1.1 and adds extra comment
    if(eachName.height > 1.1) {
      document.write( '<li>' + eachName.name + ' (height:' + eachName.height + ') Wow that is BIG !');
     }
    else {
      document.write( '<li>' + eachName.name + ' (height:' + eachName.height + ')');
    }
});
