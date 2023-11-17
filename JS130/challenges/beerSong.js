class BeerSong {
  constructor(...nums) {
    this.nums = nums;
  }

  static verses(num1, num2) {
    let str = "";
    for (let index = num1; index >=num2; index--) {
      if (index === 0) {
        str += `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
      } else if (index === 1) {
        str += `${index} bottle of beer on the wall, ${index} bottle of beer. \nTake it down and pass it around, no more bottles of beer on the wall.`
      } else {
        str += `${index} bottles of beer on the wall, ${index} bottles of beer. \nTake one down and pass it around, ${index - 1} ${index - 1 > 1 ? 'bottles' : 'bottle'} of beer on the wall.`
      }
    }
    return str;
  }

  static verse(num) {
    if (!num) {
      return `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
    } else if (num === 1) {
      return `${num} bottle of beer on the wall, ${num} bottle of beer. \nTake it down and pass it around, no more bottles of beer on the wall.`
    }
      return `${num} bottles of beer on the wall, ${num} bottles of beer. \nTake one down and pass it around, ${num - 1} ${num - 1 > 1 ? 'bottles' : 'bottle'} of beer on the wall.`
  }

  static lyrics() {
    let str = "";
    for (let index = 99; index >=0; index--) {
      if (index === 0) {
        str += `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
      } else if (index === 1) {
        str += `${index} bottle of beer on the wall, ${index} bottle of beer. \nTake it down and pass it around, no more bottles of beer on the wall.`
      } else {
        str += `${index} bottles of beer on the wall, ${index} bottles of beer. \nTake one down and pass it around, ${index - 1} ${index - 1 > 1 ? 'bottles' : 'bottle'} of beer on the wall.`
      }
    }
    return str;
  }
}

let test = new BeerSong();

// console.log(BeerSong.verse(2))
// console.log(BeerSong.lyrics());

module.exports = BeerSong;
