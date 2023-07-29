// Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

function munsterSum(obj) {
  let sum = 0;
  let values = Object.values(obj);
  values.forEach(num => sum += num);
  return sum
}

console.log(munsterSum(ages));