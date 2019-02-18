function add(arr) {
  let response = 0;

  for (let index = 0, len = arr.length; index < len; index++) {
    if (typeof arr[index] !== 'number') {
      response = response + add(arr[index])
    } else {
      response = response + arr[index]
    }
  }

  return response;
}

console.log(add([1, [2, [3, 4], [5, 6, 7, 8], 9, 10]]));
