function triangle(ang1, ang2, ang3){
  let total = ang1 + ang2 + ang3;
  if (total !== 180) return "invalid";
  if (ang1 <= 0 || ang2 <= 0 || ang3 <= 0) return "invalid";
// we have confirmed that moving forward we are working with valid triangles and simply classifying them.
  if (isAcute(ang1,ang2,ang3)) {
    return "acute";
  }
  if (isRightAngle(ang1,ang2,ang3)){
    return 'right'
  }
  if (isObtuse(ang1,ang2,ang3)) {
    return "obtuse"
  }

//helper functions
function isAcute(num1,num2,num3) {
  return (num1 < 90) && (num2 < 90) && (num3 < 90);
}
function isRightAngle(num1,num2,num3){
  return (num1 === 90) || (num2 === 90) || (num3 === 90);
}
function isObtuse(num1,num2,num3) {
  return (num1 > 90) || (num2 > 90) || (num3 >90);
}
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

