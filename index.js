import { Subject } from 'rxjs';
const cat$_stream = new Subject()
const dog_stream = new Subject()
cat$_stream.subscribe(function(cats){
    dog_stream.subscribe(function(dogs){
      cats.forEach(function(cat){
        cat === 'Fluffykins' ? console.log('Fluffykins is a tiny tiny dragon that spits lighning') : '' === '' ? console.log('No Fluffykins found continuing') : '' 
        dogs.forEach(function(dog){
          cat === 'Fluffykins' ? dog === 'Fluffykins' ? console.log('Dog and cat matches!!!, both named Fluffykins') : '' : ''
        })
      })
    })
  })
cat$_stream.next([ 'Gabor', 'Stuff', "Fluffykins", 'Jingo', "Miuriel" ])
dog_stream.next([ "Ionas", 'Jingo', 'Mauro', 'LOL', "Fluffykins"]);

