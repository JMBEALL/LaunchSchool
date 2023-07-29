let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

function createObj(arr) {
  let newObj = {};
  arr.forEach((el,index) => {
    newObj[el] = index;
  });
  return newObj;
}

console.log(createObj(flintstones));