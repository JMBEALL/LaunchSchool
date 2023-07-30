function wordCap(string) {
  let stringArr = string.split(" ");
  let newStr = "";

  stringArr.forEach(word => {
    newStr += word[0].toUpperCase() + word.slice(1) + " ";
  });
  return newStr
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'