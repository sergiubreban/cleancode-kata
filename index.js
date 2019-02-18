document
  .querySelector('button')
  .addEventListener('click', function() {
    document.querySelector('button').style.backgroundColor = document.querySelector('input').value;
    document.querySelector('label').style.backgroundColor = document.querySelector('input').value;

    console.log('\
      color has been changed n\
      to be color:' + document.querySelector('input').value + '\
    ');
  });
