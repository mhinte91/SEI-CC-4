require('./config/database');
const Movie = require('./models/movie');
const Performer = require('./models/performer');


/*-- For each exercise below, write the code as described --*/

Promise.resolve().then(function() {
  console.log('HERE')
  Movie.find({});
  return Movie.find({});  // remember to return the promise!
}).then(function(result) {
  console.log('1): ', result)
  Performer.find({});
  return Performer.find({});
}).then(function(result) {
  console.log('2): ', result)
  m = Movie.find({mpaaRating: 'PG'});
  return m;
  
}).then(function(result) {
  console.log('3): ', result)
  m = Movie.find({nowShowing: true})
  return m;
})

.then(function(result) {
  console.log('4):', result);
  m = Movie.find({mpaaRating: /PG/i});
  return m;
})

.then(function(result){
  console.log('5):', result);
  Movie.findOne({releaseYear: 2018 });
})

.then(function(result) {
  console.log('6):', result);
})
  // 6) Find the first movie found with a releaseYear of 2018


  // 7) Find all movies released after 1980
  

  // 8) Find all movies whose titles start with a 'C'
  // Hint: StackOverflow will show how to use a regular expression
  

  // 9) Find the performer named 'Rami Malek'
  
  
  // 10) Find all performers born before 1980
  
  
  // 11) Find all performers whose name starts with a 'J'


  // 12) Add a reference to performer 'Bill Murray' to
  //     the movie Caddyshack's cast property and save.
  //     console.log the updated movie.


.then(function() {
  process.exit();
});

