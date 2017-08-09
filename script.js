var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: './poster/potter.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: './poster/lionking.jpg'
  },
  {
    id: 3,
    title: 'Incepcja',
    desc: 'Film o poziomach snu',
    img: './poster/inception.jpg'
  },
  {
    id: 4,
    title: 'Interstellar',
    desc: 'Film o podróżach w kosmosie',
    img: './poster/interstellar.jpg'
  },
  {
    id: 5,
    title: 'Ostatni Samurai',
    desc: 'Film o japońskich wojownikach',
    img: './poster/samurai.jpg'
  },
  {
    id: 6,
    title: 'Wyspa Tajemnic',
    desc: 'Film o agencie FBI badającym szpital psychiatryczny',
    img: './poster/island.jpg'
  },
  {
    id: 7,
    title: 'Dziennik zakrapiany rumem',
    desc: 'Film o redaktorze piszącym w Portoryko',
    img: './poster/rum.jpg'
  },
  {
    id: 8,
    title: 'Piraci z Karaibów',
    desc: 'Film o przygodach pirata Jacka Sparrowa',
    img: './poster/pirates.jpg'
  }
];

var moviesElements = movies.map(function(movie){
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.img})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
      
ReactDOM.render(element, document.getElementById('app'));