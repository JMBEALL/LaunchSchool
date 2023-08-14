// function triangle(ang1, ang2, ang3){
//   let total = ang1 + ang2 + ang3;
//   if (total !== 180) return "invalid";
//   if (ang1 <= 0 || ang2 <= 0 || ang3 <= 0) return "invalid";
// // we have confirmed that moving forward we are working with valid triangles and simply classifying them.
//   if (isAcute(ang1,ang2,ang3)) {
//     return "acute";
//   }
//   if (isRightAngle(ang1,ang2,ang3)){
//     return 'right'
//   }
//   if (isObtuse(ang1,ang2,ang3)) {
//     return "obtuse"
//   }

// //helper functions
// function isAcute(num1,num2,num3) {
//   return (num1 < 90) && (num2 < 90) && (num3 < 90);
// }
// function isRightAngle(num1,num2,num3){
//   return (num1 === 90) || (num2 === 90) || (num3 === 90);
// }
// function isObtuse(num1,num2,num3) {
//   return (num1 > 90) || (num2 > 90) || (num3 >90);
// }
// }

// console.log(triangle(60, 70, 50));       // "acute"
// console.log(triangle(30, 90, 60));       // "right"
// console.log(triangle(120, 50, 10));      // "obtuse"
// console.log(triangle(0, 90, 90));        // "invalid"
// console.log(triangle(50, 50, 50));       // "invalid"


function featured(num) {
  let MAX_NUM = 9876543201;
  for (let index = num + 1; index <= MAX_NUM; index++ ) {
    if ((index % 2 === 1) && (index % 7 === 0) && (noRepeat(index))) {
      return index;
      break;
    }
    // return "too big";
  }

  //helper function to check;
  function noRepeat(arg) {
    let arr = String(arg).split("");

    for (let index = 0; index < arr.length ; index++) {
      for (let j = index + 1; j < arr.length; j++) {
        if (arr[index] === arr[j]) return false;
      }
    }
    return true;
  }
}
//input: integer;
//output: integer - next consecutive featured number after the given input
//rules:
  //explicit: 


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."