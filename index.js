let CLEANROOM = function () {
  return new Promise(function(resolve, reject) {
    resolve('Cleaned the room');
  });
}

let removegarbage = function (message) {
  return new Promise(function(resolve, reject) {
    resolve(`${message} Removed garbage`);
  });
}

let WinIcecream = function (message) {
  return new Promise(function(resolve, reject) {
    resolve(`${message} Won Icecream`);
  });
}

CLEANROOM().then(function(res) {
  removegarbage(res).then(function(res){
    WinIcecream(res).then(function(res){
      console.log('yeeeeey', res)
    })
  })
})