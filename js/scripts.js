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

for(var i = 0, l = repository.length; i < l; i++) {
  if(repository[i].height > 1.1) {
    document.write( '<li>' + repository[i].name + ' (height:' + repository[i].height + ') Wow that is BIG !');
  } else {
document.write( '<li>' + repository[i].name + ' (height:' + repository[i].height + ')');
}
}
