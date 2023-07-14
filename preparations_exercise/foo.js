let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

function object(obj) {
  let newObj = {};
  obj.forEach( arr => arr.forEach((prop , value) => {
    newObj[prop] = value;
  }))
  console.log(newObj);
}

object(nestedArray)