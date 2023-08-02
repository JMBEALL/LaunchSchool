function wordSizes(str) {
  let obj = {};
  if(str === "") return {};
  str.split(" ").forEach(el => {
    if (obj[el.length]) {
      obj[el.length]++;
    } else {
      obj[el.length] = 1;
    }
  })
  return obj;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}