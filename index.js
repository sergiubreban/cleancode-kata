document.querySelector('button').addEventListener('click', function () {
  var NewItem = document.createElement("LI");
  var textnode = document.createTextNode("Water");
    NewItem.appendChild(textnode);
    document.querySelector('ul').insertBefore(NewItem, document.querySelector('ul').childNodes[0])
});
