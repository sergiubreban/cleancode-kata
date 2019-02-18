var most_Unreadable_Logger = function(worlD) {
  do {
    var word = ''; 
    for (var i=worlD.length-1;i>=0;i--){
      word+=worlD[i]
    }
    console.log(word)
  } while (false);
}.bind(null, 'Hello World');

most_Unreadable_Logger('Hello World');
