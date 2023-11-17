class Anagram {
  constructor(str) {
    this.str = str;
  }

  match(arr) {
    //populate the passed in str first to get count of letters {letter : count}
    let final = [];
  

    // now iterate through each el in the array and each char - however wont this mutate the countObj with each iteration? need a way to reset it each time after each word finishes iterating and decrementing the counts. so maybe put in the outer loop of nested for loops so that each time it moves a word, it repopulates
    for (let index = 0; index < arr.length; index++) {

      let countObj = {};
      this.str.split('').forEach(el => {
        countObj[el] ? countObj[el]++ : countObj[el] = 1;
      })
      console.log(countObj)
      for (let char = 0; char < arr[index].length; char++) {
        for( let key in countObj) {
          if (arr[index][char] === key) {
            countObj[key]--;
          }
        }
        console.log(countObj)
      }
      // making sure every count was decremented to 0 so that there arent extra letters left over;
      if (Object.values(countObj).every(el => el === 0) && arr[index] !== this.str && arr[index].length === this.str.length) {
        final.push(arr[index]);
      }
    }
    return final
  }
}

let detector = new Anagram('ant');
console.log(detector.match(['tan', 'stand', 'at']));

module.exports = Anagram;